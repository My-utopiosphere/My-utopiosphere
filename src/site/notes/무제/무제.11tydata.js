module.exports = {
  eleventyComputed: {
    permalink: data => {
      if (data['dg-home']) return '/';
      if (data.permalink && data.permalink !== '///') return data.permalink;
      return `/notes/무제/${data.page.fileSlug}/`;
    }
  }
};
