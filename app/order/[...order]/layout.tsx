
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {

  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: 'dark',
  viewport: {
    width: 1,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};


export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-6">
      <div className="inline-block w-full max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
