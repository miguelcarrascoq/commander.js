# commander.js

Base on the first example from https://github.com/tj/commander.js

## Usage

```bash
node index.js -v
node index.js --version

node index.js -i
node index.js --indicadores
```

```bash
node index.js -s / --fits a/b/c
# error: unknown option '--fits'
# (Did you mean --first?)

node index.js -s / --first a/b/c
# [ 'a' ]
```
