---
to: src/components/<%= name %>/<%= name %>.tsx
unless_exists: true
---

import { FC } from 'react';
import { <%= h.changeCase.pascalCase(name) %>Props } from './types';
import styles from './<%= name %>.module.css';

export const <%= h.changeCase.pascalCase(name) %>: FC<<%= h.changeCase.pascalCase(name) %>Props> = () => {
  return (
    <div>

    </div>
  );
}