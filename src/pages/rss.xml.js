// import rss, { pagesGlobToRssItems } from '@astrojs/rss';

// export async function GET(context) {
//   return rss({
//     title: 'Max Phillips | Blog',
//     description: 'Tim told me to write this',
//     site: context.site,
//     items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
//     customData: `<language>en-us</language>`,
//   });
// }

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog"); // Adjust "blog" to your collection name

  return rss({
    title: "Max Phillips | Blog",
    description: "A collection of random stories aobut my life.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`, // Links directly to the post
    })),
    customData: `<language>en-us</language>`,
  });
}