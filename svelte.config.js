import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const repoName = 'EasyVisa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
		}),
		prerender: {
			handleHttpError: 'warn'
		},
		paths: {
			base: `/${repoName}`
		},
	},
	preprocess: vitePreprocess(),
};

export default config;
