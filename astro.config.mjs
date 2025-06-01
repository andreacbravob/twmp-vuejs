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
						{ label: 'Introduction', link: '/getting-started/introduction' },
						{ label: 'Quick Start', link: '/getting-started/quick-start' },
						{ label: 'Create an Application', link: '/getting-started/application' },
						{ label: 'Ways of Using Vue', link: '/getting-started/ways-of-using-vue' },
      				],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Reactivity Fundamentals', link: '/core-concepts/reactivity-fundamentals' },
						{ label: 'Computed Properties', link: '/core-concepts/computed' },
						{ label: 'Class and Style Bindings', link: '/core-concepts/class-and-style' },
						{ label: 'Template Refs', link: '/core-concepts/template-refs'},
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
						{ label: 'Registration', link: '/advanced-topics/registration' },
						{ label: 'Props', link: '/advanced-topics/props' },
						{ label: 'Events', link: '/advanced-topics/events' },
						{ label: 'Fallthrough Attributes', link: '/advanced-topics/attrs' },						
						{ label: 'Async Components', link: '/advanced-topics/async' },
						{ label: 'Composables', link: '/advanced-topics/composables' },
						{ label: 'Custom Directives', link: '/advanced-topics/custom-directives' },
						{ label: 'Plugins', link: '/advanced-topics/plugins' },
						{ label: 'Reactivity in Depth', link: '/advanced-topics/reactivity-in-depth' },
						{ label: 'Rendering Mechanism', link: '/advanced-topics/rendering-mechanism' },
						{ label: 'Vue and Web Components', link: '/advanced-topics/web-components' },
						{ label: 'TypeScript', link: '/advanced-topics/typescript' },
						{ label: 'TypeScript with Composition API', link: '/advanced-topics/composition-api' },
						{ label: 'TypeScript with Options API', link: '/advanced-topics/options-api' },
      				],
				},
				{
					label: 'Best Practices',
					items: [
						{ label: 'Testing', link: '/best-practices/testing' },	
						{ label: 'Production Deployment', link: '/best-practices/production-deployment' },
						{ label: 'Performance', link: '/best-practices/performance' },
						{ label: 'Accessibility', link: '/best-practices/accessibility' },
						{ label: 'Security', link: '/best-practices/security' },
						{ label: 'Tooling', link: '/best-practices/tooling' },					
      				],
				},
				{
					label: 'Troubleshooting & FAQs',
					items: [
						{ label: 'Composition API FAQ', link: '/faqs/composition-api-faq' },						
      				],
				},
			],
		}),
	],
});
