export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Alfa 1.0",
	stack: "Next.js + NextUI",
	description: "BYOB",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Ordering",
			href: "/older",
		},
		{
			label: "Achievement",
			href: "https://tfjsmartfactory.online/listrik/",

		},
		{
			label: "Blog",
			href: "https://tfjsmartfactory.online/listrik/",
			class: "disabled"
		},
		{
			label: "About",
			href: "",
			class: "disabled"
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Ordering",
			href: "/older",
		},
		{
			label: "Achievement",
			href: "https://tfjsmartfactory.online/listrik/",
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
