# eslint-plugin-no-relative-path

[![npm version](https://badge.fury.io/js/eslint-plugin-no-relative-path.svg)](https://badge.fury.io/js/eslint-plugin-no-relative-path)

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

And also, you can designate absolute path prefix such as "/@":

```json
{
	"rules": {
		"no-relative-path/no-relative-path": [2, { "pathPrefix": "/@" }]
	}
}
```

This prefix is default to "/@".

## Extra feature

I belong to traP, which is a programming club in Tokyo Institute of Technology, and this club name is sometimes mistakenly written as "trap", "Trap", "TraP", and so on... So I added a feature to detect this mistake.

```json
{
	"rules": {
		"no-relative-path/no-trap-with-invalid-casing": 2
	}
}
```
