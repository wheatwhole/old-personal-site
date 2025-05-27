import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite' 
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({ 
      compiler: 'svelte', 
    }), 
  ],
  server: {
    fs: {
      allow: [
        // your custom rules
        '/web/src/changelog/*',
        '/path/to/custom/allow_file.demo',
      ],
    },
  },
})
