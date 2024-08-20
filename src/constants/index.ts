export const LINKS: LinkItem[] = [
    {label: "About", path: "about"},
    {label: "Contact", path: "contact"},
    {label: "Cart", path: "cart"},
]

interface LinkItem {
    path: string;
    label: string;
}