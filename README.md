# vue-grid-layout-v3-types

TypeScript definitions for [vue-grid-layout-v3](https://www.npmjs.com/package/vue-grid-layout-v3).

## Installation

```bash
npm install --save-dev vue-grid-layout-v3-types
```

# Usage

This package provides TypeScript types for vue-grid-layout-v3. To use it:

Add the types package to your project (see installation above).

Update your tsconfig.json or tsconfig.app.json:

```json
{
  "compilerOptions": {
    "types": ["vue-grid-layout-v3-types"]
  }
}
```


After that, you can import and use GridLayoutInterface and GridItemInterface alongside GridLayout and GridItem for full TS support:

```js
import type { GridLayoutInterface, GridItemInterface } from "vue-grid-layout-v3";
import { GridLayout, GridItem } from "vue-grid-layout-v3";
```
