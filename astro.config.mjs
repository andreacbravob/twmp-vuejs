// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VueJS Audit Docs',
			plugins: [starlightLinksValidator()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Essentials',
					items: [
						{ label: 'Create an Application', link: '/essentials/application' },
						{ label: 'Reactivity Fundamentals', link: '/essentials/reactivity-fundamentals' },
						{ label: 'Computed Properties', link: '/essentials/computed' },
						{ label: 'Class and Style Bindings', link: '/essentials/class-and-style' },
						{ label: 'Template Refs', link: '/essentials/template-refs'},
      				],
				},
				{
					label: 'Components In-Depth',
					items: [
						{ label: 'Registration', link: '/components/registration' },
						{ label: 'Props', link: '/components/props' },
						{ label: 'Events', link: '/components/events' },
						{ label: 'Fallthrough Attributes', link: '/components/attrs' },						
						{ label: 'Async Components', link: '/components/async' },
      				],
				},
				{
					label: 'Reusability',
					autogenerate: { directory: 'reusability' },
				},
				{
					label: 'Built-in Components',
					items: [
						{ label: 'Transition', link: '/built-ins/transition' },
						{ label: 'TransitionGroup', link: '/built-ins/transition-group' },
						{ label: 'KeepAlive', link: '/built-ins/keep-alive' },
						{ label: 'Teleport', link: '/built-ins/teleport' },
						{ label: 'Suspense', link: '/built-ins/suspense' },						
      				],
				},
				{
					label: 'Scaling Up',
					items: [
						{ label: 'Single-File Components', link: '/scaling-up/sfc' },
						{ label: 'Tooling', link: '/scaling-up/tooling' },
						{ label: 'Routing', link: '/scaling-up/routing' },
						{ label: 'State Management', link: '/scaling-up/state-management' },
						{ label: 'Testing', link: '/scaling-up/testing' },						
      				],
				},
				{
					label: 'Best Practices',
					items: [
						{ label: 'Production Deployment', link: '/best-practices/production-deployment' },
						{ label: 'Performance', link: '/best-practices/performance' },
						{ label: 'Accessibility', link: '/best-practices/accessibility' },
						{ label: 'Security', link: '/best-practices/security' },					
      				],
				},
				{
					label: 'TypeScript',
					items: [
						{ label: 'Overview', link: '/typescript/overview' },
						{ label: 'TS with Composition API', link: '/typescript/composition-api' },
						{ label: 'TS with Options API', link: '/typescript/options-api' },				
      				],
				},
				{
					label: 'Extra Topics',
					items: [
						{ label: 'Ways of Using Vue', link: '/extras/ways-of-using-vue' },
						{ label: 'Composition API FAQ', link: '/extras/composition-api-faq' },
						{ label: 'Reactivity in Depth', link: '/extras/reactivity-in-depth' },
						{ label: 'Rendering Mechanism', link: '/extras/rendering-mechanism' },
						{ label: 'Vue and Web Components', link: '/extras/web-components' },						
      				],
				},
			],
		}),
	],
});
