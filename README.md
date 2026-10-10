# psa-online.net

The website for Physician Specialists in Anesthesia, built with [Astro](https://astro.build).
Astro turns the files in this repository into plain HTML pages, so the site loads fast and
every page can be read by search engines.

## Where things live

| To change… | Edit |
|---|---|
| Phone, fax, address, emails, bill-pay link, menu | `src/data/site.js` |
| Physician bios | `src/data/physicians.json` (photo goes in `src/assets/img/bios/`) |
| Physician and workplace awards | `src/data/awardsData.json` |
| Patient comments on the Awards page | `src/data/testimonials.json` |
| Patient FAQ | `src/data/FAQ.json` |
| Metro Atlanta GI FAQ | `src/data/maeFAQ.json` |
| Page text | `src/pages/<page>.astro` (one file per page) |
| Colors and fonts | `src/styles/global.css` (top of file) |
| PDF forms | `public/patient_forms/` |

Each page file in `src/pages/` becomes a page with the same name: `about.astro` → `/about`,
`pt_info.astro` → `/pt_info`, and so on. These match the old site's addresses, so existing
links and bookmarks keep working.

### Adding a physician

1. Put the photo in `src/assets/img/bios/` (any JPG, PNG or WebP; it's resized automatically).
2. Copy an existing entry in `src/data/physicians.json`, change the details, and set
   `"image": "/img/bios/<file name>"`.
3. Commit. Netlify rebuilds the site in a minute or two.

The physician list is sorted by last name automatically, and each card gets an address like
`/staff#jason-york` that the leadership list and Awards page link to.

## Running it on your own computer (optional)

You need [Node.js](https://nodejs.org) 22.12 or later.

```sh
npm install      # once
npm run dev      # live preview at http://localhost:4321, updates as you edit
npm run build    # produces the finished site in dist/
```

## Hosting on Netlify

Settings are in `netlify.toml` (build command `npm run build`, publish folder `dist`).

- **Preview addresses are hidden from Google.** Until psa-online.net is attached to this site,
  every page includes a `noindex` tag and `robots.txt` blocks crawlers.
- **After moving the psa-online.net domain to this site, trigger one new deploy**
  (Deploys → Trigger deploy). That rebuild removes the `noindex` tag and opens the site to search
  engines.
- `public/_redirects` sends old `/patientforms/…` links to `/patient_forms/…` and keeps the
  `sharepoint.psa-online.net` redirect from the previous site.
