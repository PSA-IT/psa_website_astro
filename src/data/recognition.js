// Awards listed on the About page. Each one also gets its own page at
// /recognition/<id>, built by src/pages/recognition/[id].astro.
// Files must be in public/img/ (they're shown as-is, not optimized).
export const recognition = [
  ['2026', 'Atlanta Business Chronicle: Best Places to Work', '/img/bptw-2026.svg'],
  ['2025', 'Atlanta Business Chronicle: Best Places to Work', '/img/bptw-2023.webp'],
  ['2025', 'Castle Connolly Top Doctors: Drs. Apatov, Au, Briesacher, Guidry, Haluski, Harkins, Hamilton, Hartney-Baucom, Hyatt, Kahnke, Krueth, Mitter, Moore, Sivanesan, Yao and York', '/img/top-doctors-2025.webp'],
  ['2024', 'Castle Connolly Top Doctors: Drs. Apatov (Rising Star), Au, Briesacher, Guidry, Haluski, Hamilton, Hartney-Baucom, Hyatt, Krueth, Mitter, Yao and York', '/img/award-top-docs-2024-castle.webp'],
  ['2024', 'Atlanta Business Chronicle: Best Places to Work', '/img/award-bestplacework-2023-2024.webp'],
  ['2023', 'Atlanta Business Chronicle: Best Places to Work', '/img/award-bestplacework.webp'],
  ['2023', 'Atlanta Magazine Top Doctors: Drs. Hartney-Baucom, Stephenson, Sween and York', '/img/award-combined-top-docs-2023.webp'],
  ['2023', 'Castle Connolly Top Doctors: Drs. Au, Hartney-Baucom, Briesacher, Guidry, Haluski, Hamilton, Hyatt, Yao and York', '/img/award-combined-top-docs-2023.webp'],
  ['2022', 'Atlanta Magazine Top Doctors: Drs. Hartney-Baucom, Haluski, Stephenson, Sween and York', '/img/award-top-docs-2022.webp'],
  ['2022', 'Castle Connolly Top Doctors: Dr. York', '/img/award-top-docs-2022.webp'],
];

// Builds the page address from the year and award name (doctor names are left out):
//   "2026", "Atlanta Business Chronicle: Best Places to Work"
//     -> "2026-atlanta-business-chronicle-best-places-to-work"
//   "2025", "Castle Connolly Top Doctors: Drs. Apatov, Au, ..."
//     -> "2025-castle-connolly-top-doctors"
export function recognitionId(year, label) {
  const award = label.split(/:\s*Drs?\.?\s/)[0];
  return `${year} ${award}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}