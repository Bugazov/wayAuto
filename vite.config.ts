import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr({ exportAsDefault: true })],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' }
        ]
    },
    define: {
        __API__: JSON.stringify('http://localhost:3002')
    }
});
