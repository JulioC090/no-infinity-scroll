<h1 align="center">🌀 No Infinity Scroll</h1>

> Retome seu foco — bloqueie Shorts, Reels e armadilhas de rolagem infinita.

<p align="center"> 
  <img src="../../static/demo.gif" width="640" alt="No Infinity Scroll Demo"> 
</p> 

<p align="center"> 
  <a href="../../../README.md"> English </a>
  |
  Português
</p>

No Infinity Scroll é uma extensão do Chrome desenvolvida com React, TypeScript e Vite (CRXJS) que bloqueia experiências de rolagem infinita viciantes, como YouTube Shorts, Instagram Reels e outros conteúdos semelhantes — ajudando você a recuperar seu tempo e foco.

## 📌 Sumário
- [🔹 O que é o No Infinity Scroll?](#-o-que-é-o-no-infinity-scroll)
- [🚀 Começando](#-começando)
- [⚙️ Funcionalidades](#️-funcionalidades)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [📜 Licença](#-licença)

## 🔹 O que é o No Infinity Scroll?
O No Infinity Scroll atua como uma camada de autodefesa digital, desativando ou bloqueando seções de rolagem infinita em plataformas de mídia social e aplicativos de vídeo.

Ele foi projetado para ajudar usuários a evitar ciclos de consumo compulsivo, incentivando uma navegação mais intencional e significativa.

## 🚀 Primeiros Passos

### 📋 Requisitos
Antes da instalação, verifique se você possui:
- [Node.js](https://nodejs.org/en) (para desenvolvimento)
- [Chrome Browser](https://www.google.com/intl/en-US/chrome) (para testar a extensão)

### 🔧 Instalação
1. Instale as dependências

```bash
pnpm install
```

2. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

3. Carregue a extensão no Chrome
- Acesse `chrome://extensions/`
- Ative o Modo do desenvolvedor
- Clique em Carregar sem compactação
- Selecione a pasta `/dist`

4. Gerar build de produção

```bash
pnpm build
```

## ⚙️ Funcionalidades

✅ Bloqueio de Shorts do YouTube – Detecta e impede o acesso à interface do Shorts.  
✅ Bloqueio de Reels do Instagram – Intercepta e bloqueia páginas e feeds de Reels.  
✅ Discreto e leve – Funciona silenciosamente em segundo plano, sem poluir a interface.  

## 📂 Estrutura do Projeto

```
no-infinity-scroll/
│── src/
│   ├── content/
│   │   ├── instagram/       # Lógica para bloquear navegação de Reels
│   │   ├── youtube/         # Lógica para bloquear navegação de Shorts
│   │   └── shared/          # Scripts compartilhados
│── manifest.config.ts       # Configuração do manifest via CRXJS
│── vite.config.ts           # Configuração do Vite
│── package.json
│── README.md
```

## 📜 Licença
Este projeto está licenciado sob a Licença MIT.  
Consulte o arquivo [LICENSE](../../../LICENSE) para mais detalhes.