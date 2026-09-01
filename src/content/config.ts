import { defineCollection, z } from "astro:content";
import { locales } from "../i18n/config";

const localeEnum = z.enum(locales);

const intelligence = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    locale: localeEnum,
    publishDate: z.date(),
    // Required: geographic coverage, audience, methodology limits.
    // Rendered prominently at the top of every report — see ScopeNote.astro.
    scopeNote: z.string().min(1, "scopeNote is required on every intelligence entry"),
    // Required: e.g. "1.2". Superseded documents are never deleted, only
    // marked via supersededBy on the outgoing version.
    methodologyVersion: z.string().min(1, "methodologyVersion is required on every intelligence entry"),
    supersededBy: z.string().optional(),
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url().optional(),
          accessed: z.date(),
        }),
      )
      .min(1, "every intelligence entry must cite at least one source"),
    countries: z.array(z.string()).optional(),
    summary: z.string(),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    locale: localeEnum,
    publishDate: z.date(),
    summary: z.string(),
  }),
});

export const collections = { intelligence, news };
