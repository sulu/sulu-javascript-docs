# Sulu Javascript Docs

This repository contains the sources for sulu's javascript documentation.
The docs are available at https://jsdocs.sulu.io.

## Maintenance

The build of the styleguide is triggered automatically by [sulu/sulu](https://github.com/sulu/sulu). There is also the possibility to manually trigger that workflow in this repository.

Only two versions are published, `2.x` and `3.x`. The old folders (`2.0` to `2.6`, `3.0`, `3.1`, `latest`) only hold a redirect to them.

On every new minor release of [sulu/sulu](https://github.com/sulu/sulu), the [update-documentation.yaml](.github/workflows/update-documentation.yaml) workflow file has to be adjusted.
- The `ref` of the matching entry in the matrix of the `build-styleguide` job needs to be changed to the new release branch (`2.x` builds from the latest 2.* branch, `3.x` from the latest 3.* branch).
- A new major version needs a new matrix entry, a new `AVAILABLE_VERSIONS` entry and a redirect from its old folders.
