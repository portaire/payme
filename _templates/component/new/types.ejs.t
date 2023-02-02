---
to: src/components/<%= name %>/types.ts
unless_exists: true
---

export interface <%= h.changeCase.pascalCase(name) %>Props {}