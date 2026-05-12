import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Custom resolver para lidar com assets do Figma ou referências locais.
 * Ajustado para buscar na sua pasta 'imports' conforme a estrutura do projeto.
 */
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        // Ajustado para a sua pasta de imports identificada nos componentes
        return path.resolve(__dirname, 'src/imports', filename)
      }
    },
  }
}

export default defineConfig({
  // Define o caminho base para que o site funcione em brazilhealth.com.br/lmge/
  base: '/lmge/',

  plugins: [
    figmaAssetResolver(),
    // Plugins obrigatórios para o funcionamento do React e Tailwind
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // Atalho para a pasta src e imports
      '@': path.resolve(__dirname, './src'),
      'imports': path.resolve(__dirname, './src/imports'),
    },
  },

  // Configurações de build para garantir compatibilidade e performance
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Garante que o build limpe a pasta antes de gerar uma nova
    emptyOutDir: true,
  },

  // Tipos de arquivos suportados para imports raw
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg'],

  server: {
    port: 3000,
    open: true,
  }
})