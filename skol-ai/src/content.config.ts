/* =========================================================================
   SKOL AI — Content Collections (Astro Content Layer API)
   Blog: markdown v src/content/blog/. Schema spodaj validira frontmatter.
   ========================================================================= */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // meta + uvodni povzetek
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(), // pomembno za GEO svežino (dateModified)
    author: z.string().default("Rok Skol"),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(), // Cloudinary public id (npr. "v123/clanek-cover.webp")
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
