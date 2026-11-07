# Artools — meu primeiro site em Astro

Site de uma marca fictícia de canetas de alta precisão, a **Artools**, feito com [Astro](https://astro.build) como exercício de um curso.

O ponto de partida foi um `index.html` pronto, que virou uma página `.astro` e depois foi quebrado em componentes reaproveitáveis. Com esses componentes, o site ganhou mais duas páginas: o catálogo e os detalhes de cada produto.

## Páginas

| Endereço | Página | Arquivo |
| :-- | :-- | :-- |
| `/` | Página inicial: caneta animada pela rolagem, tecnologia, cards, faixa de palavras, vídeo e especificações técnicas | `src/pages/index.astro` |
| `/segunda-pagina` | Catálogo com 9 canetas | `src/pages/segunda-pagina.astro` |
| `/produto/<nome-da-caneta>` | Detalhes de uma caneta (ex.: `/produto/signature-noir`) | `src/pages/produto/[slug].astro` |

A página de detalhes é uma **rota dinâmica**: um único arquivo gera uma página para cada caneta da lista em `src/data/products.ts`.

## Componentes

Todos ficam em `src/components/`:

| Componente | O que faz |
| :-- | :-- |
| `Header` | Cabeçalho fixo com o menu, que liga todas as páginas e tem versão para celular |
| `Footer` | Rodapé |
| `Button` | Botão do site, nas variantes `dark`, `light` e `cta`. Com `href`, vira um link |
| `FeatureCard` | Card com ícone, título e texto (seção "A ferramenta invisível…") |
| `Marquee` | Faixa infinita de palavras em letra cursiva |
| `SpecsTable` | Tabela de especificações técnicas em fundo escuro |
| `ProductCard` | Card de produto do catálogo, com foto e botão "Avise-me" |
| `NotifyForm` | Janela com o formulário "Avise-me" (nome, e-mail e telefone) |

O `src/layouts/Layout.astro` junta o `<head>`, as fontes, os estilos globais, o `Header` e o `Footer`. Toda página usa esse layout.

## Estrutura

```text
/
├── public/
│   └── assets/            # imagem, vídeo e os quadros da animação da página inicial
├── src/
│   ├── components/        # componentes reaproveitáveis (tabela acima)
│   ├── data/
│   │   └── products.ts    # lista das canetas, usada no catálogo e nos detalhes
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── segunda-pagina.astro
│       └── produto/
│           └── [slug].astro
└── package.json
```

## Como rodar

É preciso ter o [Node.js](https://nodejs.org) instalado. Na pasta do projeto, execute:

| Comando | O que faz |
| :-- | :-- |
| `npm install` | Instala as dependências (só na primeira vez) |
| `npm run dev` | Abre o site em modo de desenvolvimento em `http://localhost:4321` |
| `npm run build` | Gera a versão final do site na pasta `dist/` |
| `npm run preview` | Mostra a versão final no navegador antes de publicar |

## Tecnologias

- [Astro](https://astro.build) para páginas, componentes e rotas
- [Tailwind CSS](https://tailwindcss.com) (via CDN) para os estilos
- [GSAP](https://gsap.com) com ScrollTrigger para as animações de rolagem
- [Iconify](https://iconify.design) (ícones Solar) para os ícones
- Fontes do Google Fonts: Inter, Space Grotesk, JetBrains Mono e Pinyon Script

## Observações

- **Conteúdo fictício:** a Artools, as canetas, os textos e os números de especificação são exemplos criados para o exercício.
- **Fotos do catálogo:** vêm do [Unsplash](https://unsplash.com), com licença gratuita, e são carregadas direto de lá.
- **Formulário "Avise-me":** confere os campos e mostra a mensagem de sucesso, mas **ainda não envia os dados para lugar nenhum**. O ponto onde o envio deve entrar está marcado com `ENVIO` em `src/components/NotifyForm.astro`.
