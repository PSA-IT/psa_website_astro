// Photo collections that rotate randomly. To change the photos, just add or delete
// image files in these folders. No code changes needed.
//   src/assets/img/staff/      → staff photos on the Careers page
//   src/assets/img/interiors/  → hospital interior backgrounds behind each page title
const staff = import.meta.glob('../assets/img/staff/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
});
const interiors = import.meta.glob('../assets/img/interiors/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
});

export const photoSets = {
  staff: Object.values(staff),
  interiors: Object.values(interiors),
};
