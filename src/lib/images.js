// Lets data files (physicians.json, awardsData.json …) keep simple paths like
// "/img/bios/Dr_Apatov2.webp" while Astro still resizes and optimizes the image.
// Put new images in src/assets/img/ and refer to them as /img/<path>.
const files = import.meta.glob('../assets/img/**/*.{png,PNG,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

export function img(path) {
  const clean = String(path || '').replace(/\\/g, '/').replace(/^\/?(public\/)?img\//, '');
  const found = files[`../assets/img/${clean}`];
  if (!found) throw new Error(`Image not found in src/assets/img: ${path}`);
  return found;
}

// "Nanhi Mitter, M.D., M.Ed., FASA" -> "nanhi-mitter" (used for /staff#anchors)
const CREDENTIALS = /^(m\.?d\.?|d\.?o\.?|ph\.?d\.?|m\.?p\.?h\.?|m\.?ed\.?|fasa|cpe|d\.?aba|jr\.?|sr\.?|ii|iii|iv)$/i;
export function slugFor(name) {
  const words = String(name).replace(/,/g, ' ').split(/\s+/).filter(Boolean);
  while (words.length > 1 && CREDENTIALS.test(words[words.length - 1])) words.pop();
  const first = words[0];
  const last = words[words.length - 1];
  return `${first} ${last}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function lastName(name) {
  return slugFor(name).split('-').slice(1).join('-');
}
