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
			href: "/order",
		},
		{
			label: "Achievement",
			href: "../listrik",

		},
		{
			label: "Blog",
			href: "../blog",
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
			href: "/order",
		},
		{
			label: "Achievement",
			href: "../listrik",
		},
		{
			label: "Blog",
			href: "../blog",
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
