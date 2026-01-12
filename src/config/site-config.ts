//types
import type { NavigationItem } from "../types/global";
import type { SocialLinkItem } from "../types/global";

import { Search, House, CircleUser, Presentation, Headset, UsersRound, Rss } from "@lucide/astro";

export const siteConfig = {
  title: "UI Land",
  logoText: "UI land",
  tagline: "Frontend Developer Portfolio",
  description:
    "A modern frontend developer portfolio built with Astro, Tailwind CSS, and Lucide icons.",
  logo: "/logo.svg",
  onlyLogo: false,
  pageLength: 6,
  year: new Date().getFullYear(),
};

//navigation
export const navigation: NavigationItem[] = [
  // { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false, icon: House },
  { name: "Blog", href: "/blog", current: false, icon: Rss },
  { name: "Projects", href: "/projects", current: false, icon: Presentation },
  { name: "Contact", href: "/contact", current: false, icon: Headset },
  // { name: "Features", href: "/features", current: false },
  // { name: "Meals", href: "/meals", current: false },
  // { name: "Pricing", href: "/pricing", current: false },
  { name: "Teams", href: "/teams", current: false, icon: UsersRound },
  // { name: "Search", href: "/search", current: false, icon: Search },
];

//social share
export const socialLinks: SocialLinkItem[] = [
  {
    href: "https://facebook.com/jameeronline",
    icon: "brands/facebook",
    alt: "Facebook",
  },
  {
    href: "https://instagram.com/jameeronline",
    icon: "brands/instagram",
    alt: "Instagram",
  },
  {
    href: "https://x.com/jameeonline",
    icon: "brands/x",
    alt: "X",
  },
  {
    href: "https://github.com/jameeronline",
    icon: "brands/instagram",
    alt: "Instagram",
  },
  {
    href: "https://linkedin.com/jameeronline",
    icon: "brands/linkedin",
    alt: "LinkedIn",
  },
];
