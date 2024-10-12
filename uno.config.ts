import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			black: '#1e1e1e',
		},
	},
});
