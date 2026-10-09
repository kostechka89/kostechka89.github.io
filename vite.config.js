import {defineConfig} from 'vite';
export default defineConfig({esbuild:{jsx:'automatic'},build:{rollupOptions:{onwarn(warning,defaultHandler){if(warning.code==='MODULE_LEVEL_DIRECTIVE'||warning.code==='SOURCEMAP_ERROR')return;defaultHandler(warning);},output:{manualChunks:{react:['react','react-dom'],motion:['motion/react'],graphics:['ogl','gsap','matter-js']}}}}});
