# @dabbott/generate-icon-lib

Forked from [radix-ui/icons](https://github.com/radix-ui/icons/tree/ae5c48fc3cdafadddf97dc1c59d02027bd63e6bf/packages/generate-icon-lib) (MIT)

## Usage

```shell
npx @dabbott/generate-icon-lib --file=<figma-file-key>
```

_The `figma-file-key` can be sourced from the link to a Figma document:_

- `https://www.figma.com/file/<figma-file-key>`

### Authentication with Figma

Go to your Account Settings in Figma to create a Personal Access Token.

This can be provided to `generate-icon-lib` via the `FIGMA_ACCESS_TOKEN` environment variable.

Create an `.env` file an intended directory for easy reuse:

```shell
echo "FIGMA_ACCESS_TOKEN=<token>" >> packages/radix-icons/.env
```
