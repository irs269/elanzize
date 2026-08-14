import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { experiences } from "../data";

export default defineTool({
  name: "list_experiences",
  title: "List experiences",
  description:
    "List the professional experiences shown on the portfolio timeline, optionally filtered by a keyword matching the role, company, description or tags.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Optional keyword filter, e.g. 'bank', 'OpenIMIS', 'mobile'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const needle = query?.toLowerCase();
    const items = needle
      ? experiences.filter((e) =>
          [e.role, e.company, e.description, ...e.tags].join(" ").toLowerCase().includes(needle),
        )
      : experiences;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, experiences: items },
    };
  },
});
