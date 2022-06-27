## Getting Started
```
$ yarn bootstrap
$ yarn run dev
```

See README from `packages/<package-name>` to run individual projects.

To explore commands available through [lerna](https://github.com/lerna/lerna/):
```
$ yarn learna
```

To run [lerna](https://github.com/lerna/lerna/) commands directly:
```
$ yarn lerna <command>
```

## Committing Changes

This repo follows the [conventional commits specification](https://conventionalcommits.org).

Run `yarn commit` to start an interactive commit.  Valid scopes are `macos`, `mobile`, `redux-lib`, `web`, and `repo`.

## Publishing Packages

To increment package versions, add git tags, push changes, and publish to npm registry:
```
$ yarn release
```

## Testing
To run tests on file changes across all packages (at project root):
```
$ yarn test:watch
```

To run tests for specific package:
```
$ cd packages/<package-name>
$ yarn test
```

## Available Package Scripts

| Name | Description |
|------|-------------|
|`bootstrap`|Pre-transpile module(s) and execute `lerna bootstrap`|
|`cleanup`|Remove `node_modules` within each package directory|
|`commit`|Open an interactive dialogue to generate a conventional commit message|
|`learna`|Start the lerna wizard|
|`release`|Generate changelogs and publish new package versions|
|`start`|Run `yarn start` in each package in parallel|
|`watch`|Transpile module(s) on file system changes|

## A few links to help you get started:

- [lerna.js.org: Documentation, Guides, Interactive Tutorials](https://lerna.js.org)
- [Getting Started](https://lerna.js.org/docs/getting-started)
- [Core Concepts](https://lerna.js.org/docs/core-concepts)
- [Official Nrwl YouTube Channel](https://www.youtube.com/c/Nrwl_io)
- [Blog Posts About Lerna and Nx](https://blog.nrwl.io/nx/home)
