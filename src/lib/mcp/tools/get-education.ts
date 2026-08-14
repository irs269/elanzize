import { defineTool } from "@lovable.dev/mcp-js";

import { certifications, formations } from "../data";

export default defineTool({
  name: "get_education",
  title: "Get education and certifications",
  description: "Get the academic background (degrees) and the professional certifications.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ formations, certifications }, null, 2) }],
    structuredContent: { formations, certifications },
  }),
});
