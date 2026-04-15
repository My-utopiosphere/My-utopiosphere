module.exports = {
  eleventyComputed: {
    permalink: (data) => `/notes/무제/${data.page.fileSlug}/`
  }
};
