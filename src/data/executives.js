// The Executive Team shown at the top of the Leadership section on /staff.
// Each person also gets a bio page at /leadership/<first-last>, built by
// src/pages/leadership/[slug].astro.
//
// Photos go in src/assets/img/ (they're resized automatically).
// For physicians, education and credentials are pulled from physicians.json by name,
// so you don't need to repeat them here.
// Add bio paragraphs to `bio` as a list of strings; the page shows them above the credentials.

export const executiveGroupPhoto = {
  src: '/img/bios/exec_team.jpg',
  alt: 'The PSA executive team',
};

export const executives = [
  {
    name: 'John H. Stephenson, M.D., FASA',
    title: 'Chair and Medical Director',
    photo: '/img/bios/dr_stephenson.jpg',
    bio: ["This is where the bio for Dr. Stephenson will be. We can also remove the Education and Credentials listed below"],
  },
  {
    name: 'Julius Hamilton, M.D.',
    title: 'President',
    photo: '/img/bios/dr_hamilton.jpg',
    bio: ["This is where the bio for Dr. Hamilton will be. We can also remove the Education and Credentials listed below"],
  },
  {
    name: 'David Moore, M.D.',
    title: 'Secretary/Treasurer; Chief of Clinical Operations',
    photo: '/img/bios/dr_moore.jpg',
    bio: ["This is where the bio for Dr. Moore will be. We can also remove the Education and Credentials listed below"],
  },
  {
    name: 'Lynn Epps',
    title: 'Chief Operations Officer',
    photo: '/img/bios/lynn_epps.jpg',
    email: 'lynn.epps@psa-online.net',
    ext: '100',
    bio: ["This is where the bio for Lynn will be. We can also remove the Education and Credentials listed below"],
  },
];
