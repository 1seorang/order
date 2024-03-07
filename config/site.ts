export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Alfa 1.2",
	stack: "Next.js + NextUI",
	description: "BYOB",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Ordering",
			href: "/order",
		},
		{
			label: "Catatan",
			href: "/note",

		},
		{
			label: "Kalkulator",
			href: "/kalkulator",
			
		},
		{
			label: "Informasi",
			href: "/docs",
			class: 'text-base-700 animate-pulse'
			
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Cloud",
			href: "/cloud",
		},
	
		{
			label: "Blog",
			href: "https://tfjsmartfactory.online/blog/",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "CTA",
			href: "mailto:aby@consultant.com",
		},
	],
	links: {
		github: "/",
		twitter: "/",
		docs: "/",
		discord: "/",
		sponsor: "mailto:aby@consultant.com"
	},
};
