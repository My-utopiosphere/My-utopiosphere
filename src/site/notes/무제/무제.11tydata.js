module.exports = {
  eleventyComputed: {
    permalink: data => {
      if (data.permalink) return data.permalink;
      return `/notes/무제/${data.page.fileSlug}/`;
    }
  }
};
