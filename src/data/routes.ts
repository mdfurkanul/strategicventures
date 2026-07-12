// Central route map for bilingual switching.
// Maps the Swedish path of every page to its English counterpart.
// Service detail pages share the same slug in both locales (only the hub
// prefix differs: /tjanster/<slug> ↔ /en/services/<slug>) so they don't
// need to be listed here individually.

export const routeMap: { sv: string; en: string }[] = [
  { sv: '/',            en: '/' },
  { sv: '/om-oss',      en: '/about' },
  { sv: '/tjanster',    en: '/services' },
  { sv: '/branscher',   en: '/industries' },
  { sv: '/varfor-oss',  en: '/why-us' },
  { sv: '/hallbarhet',  en: '/sustainability' },
  { sv: '/kontakt',     en: '/contact' },
  { sv: '/integritet',  en: '/privacy' },
];

/**
 * Given the current locale and the current page's path (in the current
 * locale's slug), return the equivalent path in the OTHER locale.
 *
 * Examples:
 *   translatePath('sv', '/om-oss')      → '/about'
 *   translatePath('en', '/about')       → '/om-oss'
 *   translatePath('sv', '/tjanster/innovation')  → '/services/innovation'
 *   translatePath('en', '/services/food-innovation') → '/tjanster/food-innovation'
 */
export function translatePath(
  currentLocale: 'sv' | 'en',
  currentPath: string
): string {
  // Home
  if (currentPath === '/' || currentPath === '') return '/';

  // Service detail pages: /tjanster/<slug> ↔ /services/<slug>
  const serviceMatch = currentPath.match(/^\/(tjanster|services)\/(.+)$/);
  if (serviceMatch) {
    const slug = serviceMatch[2];
    return currentLocale === 'sv'
      ? `/services/${slug}`
      : `/tjanster/${slug}`;
  }

  // Services hub
  if (currentPath === '/tjanster') return '/services';
  if (currentPath === '/services') return '/tjanster';

  // Look up in the explicit route map
  const other = currentLocale === 'sv' ? 'en' : 'sv';
  const entry = routeMap.find((r) => r[currentLocale] === currentPath);
  if (entry) return entry[other];

  // Fallback: same path (shouldn't happen for known pages)
  return currentPath;
}
