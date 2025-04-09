import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog"  }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string(),
        heroImage: z.string().optional(),
        heroAlt: z.string().optional(),
        tags: z.array(z.string()),
    }),
});

export const collections = { blog };