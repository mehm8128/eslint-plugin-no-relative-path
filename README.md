# eslint-plugin-no-relative-path

Disallow relative path import.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-relative-path`:

```sh
npm install eslint-plugin-no-relative-path --save-dev
```

## Usage

Add `no-relative-path` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-relative-path"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-relative-path/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


