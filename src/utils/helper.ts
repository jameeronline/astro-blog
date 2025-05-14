export function textToSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function capitalizeText(text: string): string {
  return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
