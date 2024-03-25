// utils.js
export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    // .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/\s+/g, '') // Replace spaces with dashes
    .replace(/[^\w-]+/g, ''); // Remove non-word characters except dashes
