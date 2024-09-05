import { z, defineCollection } from "astro:content";

const musingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  musings: musingCollection,
};
