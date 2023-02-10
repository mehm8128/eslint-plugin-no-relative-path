"use strict"

const rule = require("../../../lib/rules/no-relative-path.js")

const RuleTester = require("eslint").RuleTester
const ruleTester = new RuleTester()

const valid = [
	{ code: "var a = requier('/@/aaa')", options: [{ pathPrefix: "@" }] },
	{ code: "var a = require('./aaa')", options: [{ pathPrefix: "@" }] },
]

const invalid = [
	{
		code: "var a = require('../aaa')",
		errors: [
			{
				message: "Relative paths are not allowed.",
				type: "CallExpression",
			},
		],
		output: "var a = require('/@/aaa')",
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
