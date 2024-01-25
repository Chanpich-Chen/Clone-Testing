import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // assetsInclude: ['**/*.Jsx'],
  define: {
    "process.env": {},
  },

  //change port 
  server: {
    port:3100
  }, 
})