interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  icon?: JSX.Element;
}

import { Search } from "@lucide/astro";

export const navigation: NavigationItem[] = [
  // { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Features", href: "/features", current: false },
  // { name: "Meals", href: "/meals", current: false },
  // { name: "Pricing", href: "/pricing", current: false },
  { name: "Teams", href: "/teams", current: false },
  { name: "Search", href: "/search", current: false, icon: Search },
];
