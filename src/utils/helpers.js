/**
 * Extract clean monogram initials from full name (e.g., "Md. Mahmudur Rahman" -> "MR")
 */
export function getInitials(name) {
  if (!name) return 'MR';
  const parts = name.split(' ').map(p => p.replace(/[.,]/g, '')).filter(Boolean);
  if (parts.length >= 3 && (parts[0].toLowerCase() === 'md' || parts[0].toLowerCase() === 'mohammed')) {
    return (parts[1][0] + parts[2][0]).toUpperCase();
  }
  return parts.slice(0, 2).map(p => p[0].toUpperCase()).join('');
}

/**
 * Check if a URL is valid and non-empty
 */
export function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('mailto:');
}
