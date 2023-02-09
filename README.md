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
	"plugins": ["no-relative-path"]
}
```

And add `no-relative-path/no-relative-path` to the rules section of your `.eslintrc` configuration file:

```json
{
	"rules": {
		"no-relative-path/no-relative-path": 2
	}
}
```
