// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Terra Support Community',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pdnode-team/Terra-Support' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Start', slug: 'guides/start' },
					],
				},
				{
					label: 'FAQ',
					items: [{ autogenerate: { directory: 'faq' } }],
				},
			],
		}),
	],
});
