import { z, defineCollection } from "astro:content";

const musingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  musings: musingCollection,
};
