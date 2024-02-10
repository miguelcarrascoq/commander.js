# commander.js

Example from https://github.com/tj/commander.js

```bash
node index.js -s / --fits a/b/c
# error: unknown option '--fits'
# (Did you mean --first?)

node index.js -s / --first a/b/c
# [ 'a' ]
```
