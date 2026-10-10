/**
 * Extract initials from a full name (e.g., "Md. Mahmudur Rahman" -> "AM")
 */
export function getInitials(name) {
  if (!name) return 'DEV';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join('');
}

/**
 * Check if a URL is valid and non-empty
 */
export function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('mailto:');
}
