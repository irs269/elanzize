import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { skillCategories } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description:
    "List the technical skills grouped by category (languages & frameworks, databases, DevOps & infrastructure, CMS & ERP, security).",
  inputSchema: {
    category: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Optional category name filter, e.g. 'DevOps' or 'Bases de données'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const needle = category?.toLowerCase();
    const items = needle
      ? skillCategories.filter((c) => c.category.toLowerCase().includes(needle))
      : skillCategories;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { categories: items },
    };
  },
});
