// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VueJS Audit Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', link: '/guides/introduction' },
						{ label: 'Quick Start', link: '/guides/quick-start' },
						{ label: 'Ways of Using Vue', link: '/extras/ways-of-using-vue' },
      				],
				},
				{
					label: 'Installation and setup',
					items: [
						{ label: 'Create an Application', link: '/essentials/application' },
      				],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Reactivity Fundamentals', link: '/essentials/reactivity-fundamentals' },
						{ label: 'Computed Properties', link: '/essentials/computed' },
						{ label: 'Class and Style Bindings', link: '/essentials/class-and-style' },
						{ label: 'Template Refs', link: '/essentials/template-refs'},
      				],
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
						{ label: 'Routing', link: '/scaling-up/routing' },
						{ label: 'State Management', link: '/scaling-up/state-management' },					
      				],
				},
				{
					label: 'Advanced Topics',
					items: [
						{ label: 'Registration', link: '/components/registration' },
						{ label: 'Props', link: '/components/props' },
						{ label: 'Events', link: '/components/events' },
						{ label: 'Fallthrough Attributes', link: '/components/attrs' },						
						{ label: 'Async Components', link: '/components/async' },
						{ label: 'Composables', link: '/reusability/composables' },
						{ label: 'Custom Directives', link: '/reusability/custom-directives' },
						{ label: 'Plugins', link: '/reusability/plugins' },
						{ label: 'Reactivity in Depth', link: '/extras/reactivity-in-depth' },
						{ label: 'Rendering Mechanism', link: '/extras/rendering-mechanism' },
						{ label: 'Vue and Web Components', link: '/extras/web-components' },
						{ label: 'TypeScript', link: '/typescript/overview' },
						{ label: 'TypeScript with Composition API', link: '/typescript/composition-api' },
						{ label: 'TypeScript with Options API', link: '/typescript/options-api' },
      				],
				},
				{
					label: 'Best Practices',
					items: [
						{ label: 'Testing', link: '/scaling-up/testing' },	
						{ label: 'Production Deployment', link: '/best-practices/production-deployment' },
						{ label: 'Performance', link: '/best-practices/performance' },
						{ label: 'Accessibility', link: '/best-practices/accessibility' },
						{ label: 'Security', link: '/best-practices/security' },
						{ label: 'Tooling', link: '/scaling-up/tooling' },					
      				],
				},
				{
					label: 'Troubleshooting & FAQs',
					items: [
						{ label: 'Composition API FAQ', link: '/extras/composition-api-faq' },						
      				],
				},
			],
		}),
	],
});
