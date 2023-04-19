import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), svgr({ exportAsDefault: true })],
    define: {
        __API__: JSON.stringify('http://localhost:3002')
    }
});
