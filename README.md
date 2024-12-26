## Problem

When using `simple-git` in this way with [Deno](https://deno.com/): 

```typescript
// use-simple-git-error.ts
import { simpleGit } from "https://esm.sh/simple-git@3.27.0?target=deno";
// ...
```

When checking through `deno check`:

```shell
deno check --allow-import 'use-simple-git-error.ts'
```

❌ We get an error:

```
error: Relative import path "child_process" not prefixed with / or ./ or ../
  hint: If you want to use a built-in Node module, add a "node:" prefix (ex. "node:child_process").
    at https://esm.sh/v135/@types/node@20.11.20/child_process.d.ts:1540:19
```

## Solution

- Import `simple-git` with option `no-dts`
- Use typings from this repository

```typescript
// use-simple-git.ts
import { simpleGit } from "https://esm.sh/simple-git@3.27.0?target=deno&no-dts";
import type { SimpleGit } from "https://raw.githubusercontent.com/chudnyi/simple-git-deno-types/refs/tags/3.27.0/typings/index.d.ts";

const git: SimpleGit = simpleGit();
// use git...
```

✅ `deno check` working without error:

```shell
deno check --allow-import 'use-simple-git.ts'
```
