# Sulu Javascript Docs

This repository contains the sources for sulu's javascript documentation.
The docs are available at https://jsdocs.sulu.io.

## Maintenance

The build of the styleguide is triggered automatically by [sulu/sulu](https://github.com/sulu/sulu). There is also the possibility to manually trigger that workflow in this repository.

On every new minor release of [sulu/sulu](https://github.com/sulu/sulu), the [update-documentation.yaml](.github/workflows/update-documentation.yaml) workflow file has to be adjusted.
- The `STABLE_VERSION` env var needs to be changed to the new minor version.
- The new minor version needs to be added to the `AVAILABLE_VERSIONS` env var.
- The new minor version along with its release branch needs to be added to the matrix for the `build-styleguide` job.

An example pull request can be found here: https://github.com/sulu/sulu-javascript-docs/pull/3/files
