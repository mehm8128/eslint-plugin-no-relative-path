"use strict"

const rule = require("../../../lib/rules/no-relative-path.js")

const RuleTester = require("eslint").RuleTester
const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } })

const valid = [
	{ code: "const a = require('/@/aaa')", options: [{ pathPrefix: "@" }] },
	{ code: "var a = require('./aaa')", options: [{ pathPrefix: "@" }] },
]

const invalid = [
	{
		code: "const a = require('../aaa')",
		errors: [
			{
				message: "Relative paths are not allowed.",
				type: "CallExpression",
			},
		],
		output: "const a = require('/@/aaa')",
	},
	{
		code: "var a = require('../../aaa')",
		errors: [
			{
				message: "Relative paths are not allowed.",
				type: "CallExpression",
			},
		],
		options: [{ pathPrefix: "@" }],
		output: "var a = require('@/aaa')",
	},
]

ruleTester.run("no-relative-path", rule, { valid, invalid })
