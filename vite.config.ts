import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      'components': path.resolve(__dirname, './src/components/'),
      'constants': path.resolve(__dirname, './src/constants/'),
      'context': path.resolve(__dirname, './src/context/'),
      'storage': path.resolve(__dirname, './src/storage/'),
      'types': path.resolve(__dirname, './src/types/'),
    }
  }
})
