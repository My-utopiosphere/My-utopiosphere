module.exports = {
  eleventyComputed: {
    permalink: data => {
      if (data['dg-home']) return '/';
      return `/notes/무제/${data.page.fileSlug}/`;
    }
  }
};
