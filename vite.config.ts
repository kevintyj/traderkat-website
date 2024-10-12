import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
	plugins: [
		// devtools(),
		solidPlugin(),
		UnoCSS(),
		tsconfigPaths(),
	],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
});
