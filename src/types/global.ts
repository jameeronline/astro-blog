export interface PageProps {
    title: string;
    caption: string;
    description: string;
};

export interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    icon?: JSX.Element;
}

export interface SocialLinkItem {
    href: string;
    icon: string;
    alt: string;
}

export interface ErrorProps {
  code: string;
  title: string;
  description: string;
}