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
    metaTitle: z.string().optional(), // krajši <title> (30–60 zn.), če je naslov predolg; H1 ostane title
    description: z.string(), // meta + uvodni povzetek
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(), // pomembno za GEO svežino (dateModified)
    author: z.string().default("Rok Skol"),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(), // Cloudinary public id naslovne slike (priporočeno 1200×630)
    imageAlt: z.string().optional(), // opisen alt v slovenščini; obvezen, kadar je image nastavljen
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
