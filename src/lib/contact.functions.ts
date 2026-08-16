import { createServerFn } from "@tanstack/react-start";

import getContactTool from "./mcp/tools/get-contact";

type Contact = {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
};

/** Reads the contact details through the MCP `get_contact` tool. */
export const getMcpContact = createServerFn({ method: "GET" }).handler(async () => {
  const result = await getContactTool.handler({}, {} as never);
  const structured = result.structuredContent as { contact: Contact } | undefined;
  const contact =
    structured?.contact ??
    (JSON.parse(
      (result.content?.[0] as { text?: string } | undefined)?.text ?? "{}",
    ) as Contact);

  return {
    tool: getContactTool.name,
    contact,
    message: `Coordonnées récupérées via l'outil MCP « ${getContactTool.name} » — ${contact.email}`,
  };
});
