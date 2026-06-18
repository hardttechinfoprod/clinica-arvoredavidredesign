const fs = require('fs');
const readline = require('readline');

async function processTranscript() {
  const fileStream = fs.createReadStream('C:\\Users\\pedro\\.gemini\\antigravity-ide\\brain\\26731f5b-18af-409f-9d04-a8db0579e6e7\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let fileContent = '';
  // Let's first see if there is a write_to_file
  try {
     fileContent = fs.readFileSync('public/index-editorial.html', 'utf8');
  } catch(e) {}

  let successCount = 0;
  let failCount = 0;

  for await (const line of rl) {
    try {
      const step = JSON.parse(line);
      if (step.tool_calls) {
        for (const tc of step.tool_calls) {
          const toolName = tc.name || (tc.function && tc.function.name);
          
          if (toolName === 'write_to_file' || toolName === 'default_api:write_to_file') {
             const args = tc.args ? (typeof tc.args === 'string' ? JSON.parse(tc.args) : tc.args) : (tc.function && JSON.parse(tc.function.arguments));
             if (args.TargetFile && args.TargetFile.includes('index-editorial.html')) {
                 fileContent = args.CodeContent;
                 console.log('write_to_file applied. Length: ' + fileContent.length);
             }
          }
          
          if (toolName && toolName.includes('replace_file_content')) {
            const args = tc.args ? (typeof tc.args === 'string' ? JSON.parse(tc.args) : tc.args) : (tc.function && JSON.parse(tc.function.arguments));
            
            if (args.TargetFile && args.TargetFile.includes('index-editorial.html')) {
              let chunks = args.ReplacementChunks;
              if (chunks && typeof chunks === 'string') {
                 try { chunks = JSON.parse(chunks); } catch(e) { console.log('JSON parse error chunks'); }
              }
              
              if (chunks) {
                 for (const chunk of chunks) {
                    let target = chunk.TargetContent.replace(/\r\n/g, '\n');
                    let repl = chunk.ReplacementContent.replace(/\r\n/g, '\n');
                    let fClean = fileContent.replace(/\r\n/g, '\n');
                    
                    if (fClean.includes(target)) {
                        fileContent = fClean.replace(target, repl);
                        successCount++;
                    } else {
                        console.log('FAILED chunk len ' + target.length + ' - starting with: ' + target.substring(0, 30));
                        failCount++;
                    }
                 }
              } else if (args.TargetContent) {
                  let target = args.TargetContent.replace(/\r\n/g, '\n');
                  let repl = args.ReplacementContent.replace(/\r\n/g, '\n');
                  let fClean = fileContent.replace(/\r\n/g, '\n');
                  
                  if (fClean.includes(target)) {
                      fileContent = fClean.replace(target, repl);
                      successCount++;
                  } else {
                      console.log('FAILED single chunk len ' + target.length);
                      failCount++;
                  }
              }
            }
          }
        }
      }
    } catch (e) {
       // console.log(e);
    }
  }

  fs.writeFileSync('public/index-editorial-recovered.html', fileContent, 'utf8');
  console.log('Recovery complete! Size: ' + fileContent.length + ' Success: ' + successCount + ' Fails: ' + failCount);
}

processTranscript();
