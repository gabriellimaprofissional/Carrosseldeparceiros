# Brazil Health - Instruções para Exportação

## 📦 Como exportar para Visual Studio Code

### Opção 1: Baixar o projeto completo

1. **Baixar os arquivos**
   - Todos os arquivos do projeto estão em `/workspaces/default/code`
   - Faça o download da pasta completa

2. **Abrir no VS Code**
   - Abra o Visual Studio Code
   - File → Open Folder
   - Selecione a pasta do projeto

3. **Instalar dependências**
   ```bash
   pnpm install
   ```

4. **Rodar o projeto**
   ```bash
   pnpm run dev
   ```

### Opção 2: Criar novo projeto e copiar arquivos

Se preferir criar um projeto do zero:

1. **Criar estrutura base**
   ```bash
   npm create vite@latest brazil-health -- --template react-ts
   cd brazil-health
   ```

2. **Copiar os arquivos importantes**
   - `src/app/` - Todos os componentes
   - `src/imports/` - Todas as imagens
   - `src/styles/` - Arquivos de estilo
   - `package.json` - Dependências

3. **Instalar as dependências necessárias**
   ```bash
   pnpm install
   ```

## 📁 Estrutura do Projeto

```
brazil-health/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx
│   ├── imports/
│   │   ├── DivMaxW7Xl/
│   │   │   └── DivMaxW7Xl.tsx (Carrossel de Parceiros)
│   │   └── *.png (Todas as imagens)
│   └── styles/
│       ├── fonts.css
│       └── theme.css
├── package.json
└── vite.config.ts
```

## 🎨 Componentes Criados

1. **Header** - Cabeçalho com navegação e informações de contato
2. **HeroSection** - Primeira dobra com formulário de cotação
3. **ServicesSection** - Seções de serviços (Plano Saúde, Odonto, Seguro Vida, Plano Pet)
4. **DivMaxW7Xl** - Carrossel de parceiros (automatizado)
5. **ContactSection** - Formulário de contato
6. **Footer** - Rodapé com informações da empresa

## ✨ Funcionalidades do Carrossel

O carrossel de parceiros está localizado em `/src/imports/DivMaxW7Xl/DivMaxW7Xl.tsx` e possui:

- ✅ Exibe 4 logos por vez
- ✅ Animação suave de deslizamento horizontal
- ✅ Transição a cada 2 segundos
- ✅ Loop infinito
- ✅ Logos sempre enquadrados sem cortes
- ✅ Ordem: Sul América, Amil, Bradesco, Porto Seguro, Sompo, Prevent Senior, Unimed, Allianz

## 🚀 Tecnologias Utilizadas

- React 18.3.1
- TypeScript
- Tailwind CSS v4
- Vite
- Lucide React (ícones)

## 📝 Notas

- O site é totalmente responsivo para desktop
- Todas as imagens estão otimizadas
- Formulários têm validação básica
- Cores seguem a identidade visual Brazil Health
