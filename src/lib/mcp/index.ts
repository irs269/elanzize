import { defineMcp } from "@lovable.dev/mcp-js";

import getContactTool from "./tools/get-contact";
import getEducationTool from "./tools/get-education";
import getProfileTool from "./tools/get-profile";
import listExperiencesTool from "./tools/list-experiences";
import listSkillsTool from "./tools/list-skills";

export default defineMcp({
  name: "elanzize-portfolio-engine",
  title: "Elanzize Portfolio Engine",
  version: "0.1.0",
  instructions:
    "Read-only tools exposing the public portfolio of Mohamed Irsoid Abdou El-Anzize (ingénieur en application web, Moroni, Comores). Use get_profile for the headline profile, list_experiences for the career timeline, list_skills for the technical stack, get_education for degrees and certifications, and get_contact for how to reach him. All content is French.",
  tools: [getProfileTool, listExperiencesTool, listSkillsTool, getEducationTool, getContactTool],
});
