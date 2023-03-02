import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      port: env.DOCS_EXPOSE_PORT || 8082,
      host: true,
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..', '../../']
      }
    }
  }
})
