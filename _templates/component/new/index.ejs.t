---
to: src/components/<%= name %>/index.ts
unless_exists: true
---

export { <%= h.changeCase.pascalCase(name) %> } from './<%= name %>'