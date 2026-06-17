---
version: "1.0"
name: Arvore-da-Vida-Design-System
site: arvoredavida.com.br
niche: Clínica de Psicologia Premium — Marília, SP
description: >
  Sistema visual de uma clínica de psicologia com estética editorial-literária.
  A identidade se ancora em uma paleta de verde floresta + ouro + bege parchment
  com tipografia Fraunces (literary serif) + Instrument Sans (modern sans).
  A experiência deve transmitir calma, autoridade clínica e humanidade genuína
  nos primeiros 3 segundos — sem parecer SaaS, startup, landing page genérica
  ou "premium falso". Cada seção é uma página. Cada transição é uma virada de
  capítulo. A clínica é literária, não tecnológica.

# ══════════════════════════════════════════════════════
# 1. PERSONALIDADE VISUAL
# ══════════════════════════════════════════════════════

personality:
  archetype: "Clínica Literária — como uma editora de livros de cuidado humano"
  
  IS:
    - Editorial e intencional como uma publicação impressa de qualidade
    - Acolhedor sem ser condescendente
    - Autoritário sem ser frio
    - Humano sem ser informal demais
    - Quieto e com presença — como um terapeuta bom que não precisa se anunciar
    - Fotografia que respira — ambientes reais, luz natural, texturas de madeira
    - Tipografia com peso literário — Fraunces cria emoção, Instrument Sans ancora
  
  IS NOT:
    - SaaS, startup, produto digital, app de saúde
    - Landing page genérica de serviços
    - Marketplace ou app de delivery de profissionais
    - "Premium falso" — luxo decorativo sem substância
    - Agência de marketing ou consultoria B2B
    - Clínica hospitalar fria ou institucional
    - Template Webflow / Framer genérico

  references_used:
    - Apple: "UI chrome recedes so the product (the human) can speak. Whitespace
      is a design element, not an afterthought. Photography-first."
    - Airbnb: "Warmth through photography. Trust built before asking for action.
      Human tone — friendly without being casual. Generous whitespace."

# ══════════════════════════════════════════════════════
# 2. PALETA DE CORES
# ══════════════════════════════════════════════════════

colors:

  # Verdes — a espinha dorsal da identidade
  forest-deep: "#0E1F18"      # Fundo escuro principal. Hero, footer, seções de impacto. USO CIRÚRGICO — máx. 3 seções por página.
  forest-mid:  "#1A3A2F"      # Fundo escuro secundário. Mobile drawer, superfícies elevadas sobre forest-deep.
  forest-soft: "#274D38"      # Accent verde médio. Títulos em seções claras com ênfase em em/italic.
  moss:        "#3D6B52"      # Verde intermediário. Hover states, bordas ativas.
  sage:        "#7A9E88"      # Verde suave. Nunca como fundo de seção — apenas como detalhe.

  # Ouro — o único acento quente. Jamais decorativo, sempre funcional.
  gold:        "#B8924A"      # CTA primário, números de destaque, itálicos do hero, links ativos.
  gold-light:  "#CBA85F"      # Hover state do gold. Nunca usar como cor base.
  gold-dim:    "#93732F"      # Eyebrows, badges de credencial, detalhes tipográficos sutis em fundos claros.
  gold-rgb:    "184, 146, 74" # Para rgba(). Bordas, glows, sombras douradas.

  # Superfícies claras — o "papel" do site
  canvas:          "#F4F1EB"  # Background padrão. Quente, parchment. A maioria das seções claras.
  canvas-light:    "#FBF8F2"  # Superfície elevada sobre canvas. Cards, formulários, destaques.
  canvas-mid:      "#D4CEBF"  # NOVO — superfície intermediária. Evita o binário escuro/claro entre seções.
  canvas-cool:     "#F5F5F7"  # Superfície fria. Usar com moderação — pode quebrar o calor da paleta.
  surface-placeholder: "#E5E5E7"  # Placeholder de imagens antes de carregar.
  white:           "#FFFFFF"  # Branco puro. Seções de máximo contraste e formulários.

  # Texto
  ink:       "#1C1916"   # Títulos, texto de alto contraste. Sempre sobre canvas ou white.
  ink-mid:   "#4A4540"   # Corpo de texto principal. Parágrafos de leitura.
  ink-light: "#7A7470"   # Texto secundário, captions, metadados. ⚠️ Verificar contraste WCAG AA sobre canvas.
  ink-ghost: "#A8A4A0"   # Placeholder, texto terciário. Nunca como texto de leitura.

  # Texto sobre fundos escuros (forest-deep / forest-mid)
  on-dark-primary:   "#FFFFFF"             # Títulos sobre fundo escuro
  on-dark-secondary: "rgba(255,255,255,0.80)"  # Corpo sobre fundo escuro
  on-dark-muted:     "rgba(255,255,255,0.55)"  # Texto secundário sobre escuro
  on-dark-ghost:     "rgba(255,255,255,0.30)"  # Copyright, legal sobre escuro

  # Bordas
  border:     "rgba(22, 40, 32, 0.07)"   # Borda padrão entre elementos em fundo claro
  border-mid: "rgba(22, 40, 32, 0.13)"   # Borda com mais peso — dividers e separadores

  # WhatsApp (não alterar — verde institucional da plataforma)
  whatsapp:   "#25D366"

  # Uso de cores — regras obrigatórias
  color_rules:
    - "forest-deep aparece em no máximo 3 seções por página (hero, 1 seção intermediária de impacto, footer)"
    - "gold NUNCA é usado como fundo de seção — apenas como acento, texto ou borda"
    - "canvas-cool (#F5F5F7) só entra se houver razão específica — o padrão é canvas quente"
    - "canvas-mid (#D4CEBF) é a transição entre uma seção forest-deep e uma seção canvas — use para evitar alternância mecânica"
    - "Nunca usar mais de 2 temperaturas de superfície adjacentes sem respiro"

# ══════════════════════════════════════════════════════
# 3. TIPOGRAFIA
# ══════════════════════════════════════════════════════

typography:

  families:
    serif: "'Fraunces', Georgia, serif"
    sans:  "'Instrument Sans', system-ui, sans-serif"
  
  google_fonts_import: >
    https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@
    0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300;
    1,9..144,400&family=Instrument+Sans:wght@300;400;500;600&display=swap

  philosophy:
    Fraunces: >
      Cria peso emocional e literário. Usar em títulos, quotes, nomes de
      profissionais, momentos de calma. O italic do Fraunces tem personalidade
      própria — é a voz da clínica falando com emoção. Weight 200-300 para
      quietude; weight 400 para presença. NUNCA weight 700+ — mata a delicadeza.
    Instrument_Sans: >
      Ancora no real e no concreto. Corpo de texto, navigation, labels, CTAs,
      eyebrows. Weights 300 (suave), 400 (leitura), 500 (ênfase discreta),
      600 (urgência ou ação). NUNCA em títulos de seção — esse papel é do Fraunces.

  scale:
    hero:     "clamp(52px, 7vw, 88px)"    # Apenas o h1 do hero. Fraunces weight 300.
    h1:       "clamp(44px, 6vw, 72px)"    # Títulos de página longa. Fraunces weight 300.
    h2:       "clamp(32px, 4vw, 52px)"    # Títulos de seção. Fraunces weight 300.
    h3:       "clamp(22px, 2.5vw, 32px)"  # Subtítulos, títulos de card. Fraunces weight 400.
    h4:       "clamp(18px, 1.8vw, 22px)"  # Títulos menores, nomes de profissionais.
    quote:    "clamp(20px, 2.2vw, 28px)"  # Fraunces italic weight 300. Intro band, depoimentos.
    lead:     "19px"                       # Primeiro parágrafo de seção. Instrument Sans weight 300.
    body:     "17px"                       # Corpo de texto padrão. Instrument Sans weight 300-400.
    body-sm:  "15px"                       # Texto de suporte. Instrument Sans weight 400.
    eyebrow:  "11px"                       # CAIXA ALTA, letter-spacing 0.18em. Instrument Sans weight 600. MÁXIMO 2 seções por página.
    label:    "12px"                       # Labels de form, metadados.
    caption:  "13px"                       # Legendas de imagem, notas de rodapé.
    button:   "13px"                       # CTAs. Instrument Sans weight 600, uppercase, letter-spacing 0.10em.
    nav:      "12px"                       # Links de navegação. Instrument Sans weight 500, uppercase, letter-spacing 0.06em.

  line_heights:
    display:  "1.03 – 1.07"   # Títulos grandes — muito comprimido, impacto visual
    heading:  "1.20 – 1.30"   # Títulos de seção
    lead:     "1.72"          # Parágrafos grandes
    body:     "1.65 – 1.72"   # Corpo de texto
    tight:    "1.25"          # Labels, eyebrows, metadados

  letter_spacing:
    display:    "-0.02em"   # Títulos hero — tracking negativo para peso editorial
    heading:    "-0.01em"   # Títulos de seção
    eyebrow:    "0.18em"    # OBRIGATÓRIO para eyebrow — define o ritmo visual
    button:     "0.10em"    # CTAs uppercase
    nav:        "0.06em"    # Navigation links

  # Composição tipográfica editorial (hierarquia dentro de um título)
  editorial_composition:
    technique: >
      Títulos podem misturar weights e estilos dentro do mesmo elemento:
      linha em Fraunces 300 regular + linha em Fraunces 300/400 italic com color: gold.
      Isso cria tensão visual sem precisar de elementos decorativos extras.
    example: >
      <h1>Um espaço para<br><em style="color: var(--gold)">se reencontrar</em></h1>
    rule: "O italic em gold é a voz da emoção. Usar com parcimônia — no máximo 1-2 ocorrências por página."

# ══════════════════════════════════════════════════════
# 4. ESPAÇAMENTO
# ══════════════════════════════════════════════════════

spacing:
  s1:  "4px"    # Micro-espaço entre elementos inline
  s2:  "8px"    # Gap entre ícone e texto
  s3:  "12px"   # Gap entre label e campo, entre badge e texto
  s4:  "16px"   # Espaço interno de elemento pequeno
  s5:  "24px"   # Gap padrão entre elementos de um grupo
  s6:  "32px"   # Espaço interno de card, padding de seção pequena
  s7:  "48px"   # Gap entre grupos de conteúdo, margin entre h2 e corpo
  s8:  "64px"   # Espaço entre blocos maiores dentro de uma seção
  s9:  "96px"   # Margin entre header de seção e grid de conteúdo
  s10: "128px"  # Espaço generoso — apenas entre seções ou blocos editoriais

  section:
    vertical:    "clamp(80px, 10vw, 140px)"   # Padding top/bottom de cada seção
    horizontal:  "clamp(24px, 8vw, 120px)"    # Padding left/right de cada seção

  layout:
    max-content: "1280px"   # Largura máxima do conteúdo normal
    max-wide:    "1440px"   # Largura máxima para seções full-width (galeria, hero)
    max-narrow:  "800px"    # Largura máxima para texto corrido (artigos, manifesto)
    max-form:    "520px"    # Largura máxima do formulário de agendamento

  whitespace_philosophy: >
    Whitespace não é espaço vazio — é o silêncio entre as palavras.
    Uma clínica literária respira. Não preencher cada pixel.
    Inspiração Apple: "UI chrome recedes so the human can speak."
    O espaço em branco comunica calma antes de qualquer texto.

# ══════════════════════════════════════════════════════
# 5. COMPONENTES
# ══════════════════════════════════════════════════════

components:

  # ─── BOTÕES ───────────────────────────────────────────
  button-primary:
    background:   "var(--gold)"              # #B8924A
    color:        "var(--forest-deep)"       # #0E1F18
    font:         "Instrument Sans weight 600, 13px, uppercase, letter-spacing 0.10em"
    border-radius: "9999px (pill)"
    padding:      "16px 32px"
    min-height:   "48px"
    shadow:       "0 8px 20px rgba(184,146,74,0.20)"
    hover:
      background:   "var(--gold-light)"      # #CBA85F
      transform:    "translateY(-2px)"
      shadow:       "0 12px 28px rgba(184,146,74,0.28)"
    use_for:      "Agendamento, CTA principal de cada seção, ação irreversível"
    
  button-ghost:
    background:   "transparent"
    color:        "rgba(255,255,255,0.90)"
    border:       "1px solid rgba(255,255,255,0.28)"
    border-radius: "9999px (pill)"
    padding:      "16px 32px"
    use_context:  "APENAS sobre fundos escuros (forest-deep / forest-mid)"
    hover:
      border-color: "rgba(255,255,255,0.60)"
      background:   "rgba(255,255,255,0.06)"
    
  button-outline-dark:
    background:   "transparent"
    color:        "var(--forest-deep)"
    border:       "1px solid var(--forest-deep)"
    border-radius: "9999px (pill)"
    use_context:  "APENAS sobre fundos claros (canvas / white)"
    hover:
      background: "var(--forest-deep)"
      color:      "var(--gold)"

  button-editorial:
    description:  "NOVO — botão que quebra o padrão uppercase/sans dos outros 3"
    font:         "Fraunces italic weight 300, 16px"
    color:        "var(--forest-mid)"
    border:       "none"
    background:   "none"
    border-bottom: "1px solid rgba(26,58,47,0.25)"
    padding:      "0 0 4px 0"
    letter-spacing: "0"
    text-transform: "none"
    use_for:      "CTAs secundários dentro de narrativa de texto, links contextuais"

  # ─── CARDS ────────────────────────────────────────────
  card-pilar:
    background:      "var(--canvas-light)"
    border:          "1px solid rgba(22,40,32,0.12)"
    border-radius:   "16px (r-md)"
    padding:         "48px (s7)"
    shadow:          "0 2px 8px rgba(22,40,32,0.05), 0 14px 44px rgba(22,40,32,0.08)"
    hover-transform: "translateY(-6px)"
    hover-shadow:    "var(--shadow-2)"
    hover-border:    "rgba(184,146,74,0.15)"
    structure:       "ícone (48×48px) → título Fraunces → descrição Instrument Sans"
    anti-pattern:    >
      NÃO usar features grid 3 colunas com ícone SVG + título + descrição para
      os pilares/abordagem. Esse é o pattern SaaS mais genérico que existe.
      ALTERNATIVA: composição editorial assimétrica, manifesto em coluna única
      com marcadores tipográficos, ou accordion editorial.

  card-profissional:
    current_issue:   "Layout horizontal com foto 220px + lista de info = SaaS/marketplace"
    target_layout:   "Formato editorial — foto full-bleed aspect-ratio 2:3, nome em Fraunces grande sobreposto na base"
    photo-width:     "Full bleed (não 220px fixo)"
    photo-aspect:    "2:3 (retrato)"
    photo-filter:    "saturate(0.9) contrast(1.03) brightness(1.02) sepia(0.06)"
    photo-overlay:   "linear-gradient(170deg, rgba(184,146,74,0.10), rgba(26,58,47,0.12)) mix-blend-mode: multiply"
    name-font:       "Fraunces weight 400, clamp(20px→24px)"
    crp-font:        "Instrument Sans weight 700, 10px, uppercase, letter-spacing 0.10em, color gold-dim"
    quote-font:      "Fraunces italic weight 300, 16px, color ink-mid"
    tags:            "Instrument Sans weight 600, 10px, uppercase — background rgba(22,40,32,0.06)"
    REMOVE:          "badge 'Disponível' — linguagem de marketplace/delivery app"

  card-depoimento:
    background:      "var(--canvas-light)"
    border:          "1px solid var(--border)"
    border-radius:   "16px (r-md)"
    padding:         "32px (s6)"
    shadow:          "var(--shadow-1)"
    quote-font:      "Fraunces italic weight 400, 17px, color ink-mid, line-height 1.70"
    avatar:          "40×40px círculo, background forest-mid, inicial em Fraunces gold"
    hover-transform: "translateY(-5px)"
    current_issue:   "Grid 3 colunas = pattern genérico. Considerar scroll horizontal editorial ou coluna única com quotes grandes"

  # ─── NAVEGAÇÃO ────────────────────────────────────────
  nav:
    height:          "84px (reduz para 64px no scroll)"
    background:
      initial:       "linear-gradient(to bottom, rgba(7,13,10,0.90) 0%, transparent 100%)"
      scrolled:      "rgba(244,241,235,0.93) com backdrop-filter: blur(20px) saturate(180%)"
    logo-name:       "Fraunces weight 300, 18px, color white → ink no scroll"
    logo-sub:        "Instrument Sans weight 500, 10px, uppercase, letter-spacing 0.12em"
    links:           "Instrument Sans weight 500, 12px, uppercase, letter-spacing 0.06em"
    cta:             "btn-ghost inicial → btn-outline-dark no scroll"
    mobile-breakpoint: "1024px → esconder links e CTA, mostrar hamburger"
    mobile-drawer:
      background:    "var(--forest-mid)"
      links-font:    "Fraunces weight 300, 22px — elegante no drawer"
      link-hover:    "color: var(--gold)"

  # ─── FORMULÁRIO ───────────────────────────────────────
  form:
    context:         "O formulário de agendamento é o momento mais emocionalmente carregado da jornada"
    current_issue:   "Parece captação de leads de startup — campos frios, linguagem transacional"
    target:          "Experiência de onboarding emocional — linguagem acolhedora, placeholders como frases humanas"
    
    input:
      height:        "48px"
      background:    "var(--canvas)"
      border:        "1.5px solid transparent"
      border-radius: "8px (r-sm)"
      font:          "Instrument Sans 15px weight 400"
      focus-border:  "var(--gold)"
      focus-shadow:  "0 0 0 3px rgba(184,146,74,0.12)"
    
    submit:
      height:        "52px"
      background:    "var(--gold)"
      color:         "var(--forest-deep)"
      font:          "Instrument Sans weight 700, 13px, uppercase, letter-spacing 0.10em"
      border-radius: "8px (r-sm) — diferente dos btns pill para diferenciar ação de formulário"
      shadow:        "0 8px 20px rgba(184,146,74,0.22)"
    
    placeholder_language:
      bad:  "Nome completo / Seu WhatsApp / Especialidade desejada"
      good: "Como prefere ser chamado(a)? / Qual número posso usar para entrar em contato? / Com o que gostaria de trabalhar na terapia?"

  # ─── HERO ─────────────────────────────────────────────
  hero:
    min-height:      "100svh"
    background:      "var(--forest-deep) com foto full-bleed"
    photo:           "main3.jpeg (sala de terapia — poltronas couro, mesa madeira, plantas, luz natural)"
    photo-filter:    "brightness(0.82) saturate(0.92) sepia(0.04) contrast(1.02)"
    photo-position:  "50% 97% desktop / 62% 100% mobile"
    ken-burns:       "scale(1.12), transition 14s ease-spring — suave e cinematográfico"
    
    overlay:
      gradient: >
        linear-gradient(180deg, rgba(7,13,10,0.52) 0%, rgba(7,13,10,0) 26%),
        linear-gradient(78deg, rgba(7,13,10,0.80) 0%, rgba(7,13,10,0.55) 38%,
        rgba(7,13,10,0.22) 68%, rgba(7,13,10,0.06) 100%)
      philosophy: "Escuro concentrado atrás do texto; direita abre para revelar a sala real"
    
    REMOVE:
      - "hero-pill com ponto pulsante (hero-pill-dot) — pattern SaaS saturado"
    
    title:
      font:          "Fraunces weight 300, clamp(52px→88px), letter-spacing -0.02em"
      color:         "#FFFFFF"
      em-color:      "var(--gold) — italic gold é a voz emocional"
      max-width:     "680px"
    
    trust-signals:
      philosophy: >
        Trust signals devem parecer editoriais, não widgets de e-commerce.
        Integrar ao layout de forma tipográfica, não como cards/boxes.
      items:
        - "5.0 Google Reviews (com ícone estrela em gold)"
        - "+9 Anos de experiência clínica"
        - "CRP ativo — Conselho Regional de Psicologia"
    
    ctas:
      primary:   "Agendar Consulta → btn-primary (gold)"
      secondary: "Conhecer o Espaço → btn-ghost (branco transparente)"
      mobile:    "Primary full-width pill; Secondary como link de texto com seta — NÃO dois botões idênticos empilhados"

  # ─── ORNAMENTO ────────────────────────────────────────
  ornament:
    description:     "Linha dourada 40×1px, opacity 0.55"
    max_occurrences: "2 por página — no máximo"
    current_problem: "Aparece em 6+ seções = invisível, virou formatação padrão"
    use_only_in:
      - "Seção Sobre (logo após o eyebrow/h2 — ancora a assinatura da clínica)"
      - "Footer (antes do nome da clínica — sela a identidade)"
    substitute:      "Nas outras seções, usar transição de whitespace ou mudança tipográfica para separar conteúdo"

  # ─── GALERIA ──────────────────────────────────────────
  gallery-cell:
    border-radius:   "16px (r-md)"
    aspect-ratio:    "3/2 (normal) / 6/4 (destaque span 2×2)"
    image-filter:    "saturate(0.9) contrast(1.03) brightness(1.02) sepia(0.06)"
    hover-scale:     "1.04"
    caption:
      background:    "rgba(253,251,248,0.82) backdrop-filter blur(10px)"
      border-radius: "9999px (pill)"
      font:          "Instrument Sans weight 600, 11px, uppercase"
      visibility:    "opacity 0 → 1 no hover"

  # ─── ASSINATURA "LINHA DA VIDA" ────────────────────────
  lifeline:
    description:     "SVG vertical no gutter esquerdo que se desenha com o scroll"
    color:           "var(--gold) opacity 0.38"
    stroke-width:    "1px"
    visibility:      "apenas telas > 1100px"
    path:            "M40 0 L40 1000 — linha reta, precisão arquitetônica"
    philosophy:      "Conceito de crescimento no tempo. Discreto. Percebido, nunca anunciado."

  # ─── WHATSAPP FLOAT ───────────────────────────────────
  whatsapp-float:
    position:        "fixed bottom: 28px right: 28px z-index: 500"
    size:            "56×56px círculo"
    background:      "#25D366"
    shadow:          "0 4px 20px rgba(37,211,102,0.35)"
    tooltip:         "forest-mid background, surge no hover vindo da direita"
    mobile-coexistence: "Banner LGPD usa right: 96px para não sobrepor o botão WA"

# ══════════════════════════════════════════════════════
# 6. SISTEMA DE SOMBRAS
# ══════════════════════════════════════════════════════

shadows:
  shadow-1:  "0 8px 32px rgba(22,40,32,0.07)"    # Sombra suave — cards em repouso
  shadow-2:  "0 20px 56px rgba(22,40,32,0.10)"   # Sombra média — cards em hover
  shadow-3:  "0 40px 80px rgba(7,13,10,0.22)"    # Sombra forte — formulário, modais
  
  shadow-warm-1: "0 8px 32px rgba(184,146,74,0.08)"   # NOVO — sombra quente para fundos claros
  shadow-warm-2: "0 20px 56px rgba(184,146,74,0.14)"  # NOVO — hover em seções bege
  
  philosophy: >
    shadow-1/2/3 são baseados em verde (rgba 22,40,32) — correto para fundos claros canvas/white.
    Em fundos muito claros ou elementos dourados, usar shadow-warm para coerência de temperatura.

# ══════════════════════════════════════════════════════
# 7. BORDER RADIUS
# ══════════════════════════════════════════════════════

radii:
  r-sm:   "8px"     # Inputs, ícones, elementos pequenos
  r-md:   "16px"    # Cards, modais, galeria
  r-lg:   "24px"    # Containers grandes, formulário completo
  r-pill: "9999px"  # Botões, badges, pills, tags

# ══════════════════════════════════════════════════════
# 8. ANIMAÇÕES E MOTION
# ══════════════════════════════════════════════════════

motion:
  easings:
    ease-out:    "cubic-bezier(0.16, 1, 0.3, 1)"     # Desaceleração natural — a maioria dos hovers
    ease-in-out: "cubic-bezier(0.45, 0, 0.55, 1)"    # Transições de estado (nav scroll, drawer)
    ease-spring: "cubic-bezier(0.165, 0.84, 0.44, 1)" # Hover de cards, Ken Burns, elementos com "peso"

  durations:
    instant:    "0.15s"    # Focus states, active states
    fast:       "0.22s"    # Hovers de links e botões
    base:       "0.35s"    # Transições de cor, opacity
    slow:       "0.50s"    # Reveal de elementos, transições de nav
    cinematic:  "14s"      # Ken Burns do hero APENAS

  reveal:
    description:    "Scroll reveal via IntersectionObserver"
    variants:
      reveal-lift:  "translateY(24px)→0 + opacity 0→1 — padrão para a maioria dos elementos"
      reveal-fade:  "apenas opacity 0→1 — textos largos e imagens full-width"
      reveal-slide: "translateX(-16px)→0 + opacity 0→1 — elementos editoriais alinhados à esquerda"
    stagger:
      d1: "0.06s delay"
      d2: "0.15s delay"
      d3: "0.24s delay"

  rules:
    - "Nenhuma animação de conteúdo dura mais de 0.7s (exceto Ken Burns e lifeline)"
    - "Nenhum elemento 'salta' para o lugar — apenas surge com presença"
    - "prefers-reduced-motion: TODAS as animações devem ter fallback instantâneo"
    - "Não usar libraries externas (GSAP, Framer, etc.) — CSS + IntersectionObserver puro"

# ══════════════════════════════════════════════════════
# 9. ESTRUTURA DE SEÇÕES (ORDEM E RITMO)
# ══════════════════════════════════════════════════════

page_structure:
  sections:
    1:  "Hero             — forest-deep + foto full-bleed"
    2:  "Intro Band       — forest-deep + quote + stats"
    3:  "Sobre            — canvas (bege quente) + grid editorial"
    4:  "Pilares          — white OU canvas-mid — composição editorial (NÃO features grid)"
    5:  "Equipe           — canvas + cards editoriais de profissionais"
    6:  "Processo         — forest-deep + narrativa de jornada (NÃO how-it-works com números)"
    7:  "Ambiente         — canvas-light + galeria editorial"
    8:  "Cães Terapeutas  — seção própria com destaque emocional — NÃO subfooter da galeria"
    9:  "Depoimentos      — canvas + quotes"
    10: "Agendar (CTA)    — forest-deep + formulário emocional"
    11: "Localização      — white + mapa"
    12: "Footer           — forest-deep"

  rhythm_rules:
    - "Máximo 2 seções forest-deep consecutivas antes de uma seção clara"
    - "Não usar canvas-cool (#F5F5F7) — quebra o calor da paleta"
    - "Cada seção deve ter composição tipográfica diferente das adjacentes"
    - "Uma seção que descanse (sem CTA) entre duas seções de conversão"

  section_template_to_avoid: >
    PROIBIDO usar o template: eyebrow (11px uppercase) → h2 serif → ornament →
    body text EM TODAS AS SEÇÕES. Isso cria ritmo robótico.
    Máximo 2 seções podem usar eyebrow. Nas outras, variar com:
    - Título large sem eyebrow
    - Quote como abertura (Fraunces italic grande)
    - Número tipográfico grande como âncora visual
    - Linha de manifesto em corpo small

# ══════════════════════════════════════════════════════
# 10. RESPONSIVIDADE
# ══════════════════════════════════════════════════════

responsive:
  breakpoints:
    desktop:    "> 1024px"
    tablet:     "900px – 1024px"
    mobile-lg:  "600px – 900px"
    mobile:     "< 600px"
    mobile-xs:  "< 380px"

  mobile_rules:
    - "Hero: manter alinhamento à esquerda com padding generoso — NÃO centralizar tudo"
    - "Hero CTAs: primary full-width pill + secondary como text-link com seta (não 2 pills idênticos)"
    - "Cards de profissionais: foto aspect-ratio 4:5, max-height 420px, object-position center 28%"
    - "Galeria ambiente: scroll horizontal com células 80vw + indicador de paginação visível"
    - "Depoimentos mobile < 600px: grid 1 coluna normal (não carrossel)"
    - "Formulário: form-row vira 1 coluna; inputs com min-height 48px (touch target)"
    - "WhatsApp float + LGPD banner: banner usa right: 96px para não sobrepor o botão"
    - "Lifeline + read-ring: display none em telas < 1100px"
    - "Alvos de toque: min 44×44px em todos os controles interativos"

  nav_mobile:
    breakpoint:   "1024px"
    hamburger:    "mostrar, esconder links e CTA"
    drawer:       "width min(80vw, 320px), background forest-mid, links em Fraunces 22px"

# ══════════════════════════════════════════════════════
# 11. ANTI-PATTERNS — O QUE NUNCA FAZER
# ══════════════════════════════════════════════════════

anti_patterns:
  visual:
    - name: "Hero pill com ponto pulsante"
      description: "Pill badge + ponto animado pulsando = pattern SaaS 2021-2024. Já foi tão copiado que comunica template, não premium."
      alternative: "Linha de contexto integrada à composição tipográfica, ou simplesmente nada"
    
    - name: "Features grid 3 colunas com ícone SVG + título + descrição"
      description: "O componente mais genérico de landing page que existe. Todo SaaS, toda startup, todo template Webflow usa."
      alternative: "Manifesto em coluna única, accordion editorial, composição assimétrica com texto + números tipográficos"
    
    - name: "How-it-works com números em círculo — 4 steps em grid"
      description: "Funil de onboarding de SaaS aplicado a uma jornada emocional de saúde mental. Não tem carga emocional."
      alternative: "Timeline vertical editorial, narrativa de jornada em texto corrido com marcações laterais"
    
    - name: "Badge 'Disponível' sobre fotos de profissionais"
      description: "Linguagem de app de delivery/Uber. Prejudica ativamente a percepção de autoridade clínica."
      alternative: "Remover completamente. Disponibilidade comunicada no formulário ou por WhatsApp."
    
    - name: "transform: scale(2.1) para 'esconder' partes de uma foto"
      description: "Gambiarra visível. Qualquer olhar calibrado vê a imagem borrada/pixelada."
      alternative: "Fotografia nova com enquadramento correto. Ou object-position sem zoom acima de 1.2x."
    
    - name: "Ornamento (linha dourada) em 6+ seções"
      description: "Repetição elimina a assinatura. O ornamento que está em todo lugar não está em lugar nenhum."
      alternative: "Máximo 2 ocorrências por página — Sobre e Footer."
    
    - name: "Alternância mecânica escuro/claro/escuro/claro sem intenção"
      description: "Ritmo de metrônomo. Sem tensão editorial, sem pausa, sem impacto."
      alternative: "Sequência com intenção: impacto → respiro → narrativa → impacto → resolução"
    
    - name: "Formulário genérico de captação de leads"
      description: "No momento mais emocionalmente carregado da jornada (decisão de iniciar terapia), tratar o usuário como lead é antiético e anti-conversão."
      alternative: "Linguagem de onboarding emocional, placeholders como frases humanas, campo de mensagem livre"

  typographic:
    - name: "Eyebrow uppercase em TODAS as seções"
      description: "Eyebrow que se repete em 8 seções deixa de ser marcador e vira ruído de formatação."
      rule: "Máximo em 2 seções por página."
    
    - name: "Fraunces em weights acima de 400"
      description: "Weight 700+ no Fraunces mata a delicadeza editorial que torna a fonte especial."
      rule: "200-300 para quietude, 400 para presença. Jamais 500+."
    
    - name: "Template eyebrow → h2 → ornament → body em todas as seções"
      description: "Cria hierarquia roboticamente previsível. Sites Awwwards variam a composição tipográfica por seção."
      rule: "Cada seção deve ter uma composição diferente da anterior."

  image:
    - name: "Mesma foto em múltiplas seções"
      description: "main3.jpeg não pode aparecer em hero, sobre E galeria."
      rule: "Cada seção usa uma imagem diferente. Se não há fotos suficientes, priorizar: hero > galeria > sobre."
    
    - name: "Fotos sem tratamento unificado"
      description: "Fotos de fontes diferentes (estúdio vs selfie casual) sem grading CSS unificado quebram a coesão."
      rule: "Aplicar em TODAS as imagens: filter: saturate(0.9) contrast(1.03) brightness(1.02) sepia(0.06)"

# ══════════════════════════════════════════════════════
# 12. COPY E VOZ
# ══════════════════════════════════════════════════════

voice:
  archetype: "Terapeuta que também é escritor"
  
  IS:
    - Específico emocionalmente — nomear a experiência real do usuário
    - Direto sem ser agressivo
    - Acolhedor sem ser infantilizante
    - Confiante sem prometer resultados
    - Poético quando justificado — nunca como ornamento
  
  IS NOT:
    - Frases de auto-ajuda: "seja você mesmo", "você merece", "sua melhor versão"
    - Verbos de marketing: "descubra", "transforme", "conquiste", "potencialize"
    - Adjetivos inflados: "único", "exclusivo", "incrível", "revolucionário"
    - Promessas vagas: "mudanças reais no seu dia a dia"
    - Linguagem de app: "respondemos em até 2h", "plano personalizado para você"
    - Urgência artificial: "vagas limitadas", "agende agora"

  target_audience:
    demographics: "Adultos 25-45 anos, Marília SP"
    emotional_state: "Hesitação + vulnerabilidade + desejo de mudança misturado com medo de julgamento"
    decision_moment: "Considerando iniciar terapia pela primeira vez, ou retornar após pausa"
    
  tone_by_section:
    hero:          "Convite quieto. Não chamariz. Como uma porta aberta, não um anúncio."
    sobre:         "Apresentação honesta. Sem superlativo. O espaço fala por si."
    pilares:       "Manifesto de valores. Frases curtas, presença direta."
    equipe:        "Humano e específico. O que move cada profissional, não apenas currículo."
    processo:      "Narrativa de jornada. Não funil. Cada passo tem peso emocional."
    depoimentos:   "Vozes reais. Deixar o texto falar — não sumarizar."
    cta_form:      "O momento mais cuidadoso. Linguagem que reduz ansiedade, não aumenta pressão."

# ══════════════════════════════════════════════════════
# 13. ACESSIBILIDADE
# ══════════════════════════════════════════════════════

accessibility:
  focus:
    style:         "outline: 2px solid var(--gold); outline-offset: 3px; border-radius: 8px"
    rule:          "Usar :focus-visible — nunca aparecer em cliques de mouse"
  
  skip_link:       "Primeiro elemento focável; visível apenas com foco de teclado"
  
  reduced_motion:
    rule:          "TODAS as transições e animações devem ter @media (prefers-reduced-motion: reduce)"
    fallback:      "Conteúdo aparece imediatamente sem translate/opacity; transitions quase instantâneas"
  
  contrast:
    rule:          "WCAG AA mínimo: 4.5:1 para texto normal, 3:1 para texto grande"
    to_verify:
      - "ink-light (#7A7470) sobre canvas (#F4F1EB) — pode estar abaixo de 4.5:1"
      - "gold-dim (#93732F) sobre canvas-light (#FBF8F2) em eyebrow"
      - "rgba(255,255,255,0.74) sobre forest-deep (#0E1F18)"
  
  touch_targets:   "Mínimo 44×44px em todos os elementos interativos no mobile"
  aria:            "Labels descritivos em todos os botões de ação (hamburger, drawer close, lightbox nav)"

# ══════════════════════════════════════════════════════
# 14. GUIA RÁPIDO PARA AGENTES
# ══════════════════════════════════════════════════════

agent_quick_reference:

  paleta_resumida: |
    Fundos escuros:  #0E1F18 (principal) · #1A3A2F (secundário)
    Fundos claros:   #F4F1EB (canvas) · #FBF8F2 (elevado) · #D4CEBF (intermediário) · #FFFFFF (puro)
    Acento:          #B8924A (ouro)
    Texto escuro:    #1C1916 (ink) · #4A4540 (mid) · #7A7470 (light)
    Texto claro:     white 90% / white 80% / white 55% / white 30%

  fontes_resumidas: |
    Títulos:  Fraunces (300 regular + 300/400 italic em gold)
    Corpo:    Instrument Sans (300 body · 600 buttons/labels)

  tom_resumido: |
    É: clínica literária, calma, autoridade humana
    Não é: SaaS, startup, template, luxury fake

  perguntas_de_validacao:
    - "Isso parece uma landing page de software? → Redesenhar"
    - "Esse pattern existe em 90% das startups? → Substituir"
    - "Um jurado de Awwwards diria 'template'? → Refatorar"
    - "O usuário ansioso sente calma ou pressão ao ver isso? → Ajustar"
    - "Existe um elemento genuinamente original nessa seção? → Se não, criar"

# ══════════════════════════════════════════════════════
# FIM DO DOCUMENTO
# ══════════════════════════════════════════════════════
# Como usar:
# 1. Cole este arquivo no início de cada prompt para o Claude Opus 4.8
# 2. Adicione: "Use o ARVOREDAVIDA-DESIGN.md acima como fonte de verdade do design"
# 3. Descreva a tarefa específica sem repetir o contexto — ele está aqui
# ══════════════════════════════════════════════════════
