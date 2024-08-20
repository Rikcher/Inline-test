export const LINKS: LinkItem[] = [
    {label: "about", path: "about"},
    {label: "contact", path: "contact"},
    {label: "favorites", path: "favorites"},
    {label: "cart", path: "cart"},
]

interface LinkItem {
    path: string;
    label: string;
}

export type Languages = 'ru' | 'en';