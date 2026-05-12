import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Mantendo a função de resolução de assets do seu projeto original
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        // Busca os arquivos na pasta src/assets conforme o seu padrão no GitHub
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // ADICIONE ESTA LINHA: Essencial para rodar em https://brazilhealth.com.br/lmge/
  base: '/lmge/',

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias padrão para facilitar as importações no seu código
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Suporte para os tipos de arquivos que você utiliza no repositório
  assetsInclude: ['**/*.svg', '**/*.csv'],
})