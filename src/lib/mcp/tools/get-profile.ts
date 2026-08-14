import { defineTool } from "@lovable.dev/mcp-js";

import { profile } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get the public profile of Mohamed Irsoid Abdou El-Anzize: name, job title, location, summary and languages.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile },
  }),
});
