import { sveltekit } from '@sveltejs/kit/vite';
import legacy from '@vitejs/plugin-legacy';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		legacy({
			// For complete list of available options, see:
			// https://www.npmjs.com/package/@vitejs/plugin-legacy#Options
			targets: ['ie >= 11'],
			additionalLegacyPolyfills: [
				'custom-event-polyfill',
				'core-js/modules/es.promise.js',
				'whatwg-fetch',
				// 'global-this' should be used so 'regenerator-runtime' wouldn't do CSP issues
				'core-js/proposals/global-this',
				'regenerator-runtime/runtime',
				'unorm'
			],
			//modernPolyfills: ['es.promise.finally'] // You may add modern polyfills too!
		}),
	]
};

export default config;
