"use strict"

const rule = require("../../../lib/rules/no-trap-with-invalid-casing.js")

const RuleTester = require("eslint").RuleTester
const ruleTester = new RuleTester()

const valid = [{ code: "var traP = 'traP'" }]

const invalid = [
	{
		code: "var traP = 'trap'",
		errors: [
			{
				message: "'trap' is invalid casing.",
				type: "Literal",
			},
		],
		output: "var traP = 'traP'",
	},
	{
		code: "trap('Trap')",
		errors: [
			{
				message: "'Trap' is invalid casing.",
				type: "Literal",
			},
		],
		output: "trap('traP')",
	},
	{
		code: "['TRAP']",
		errors: [
			{
				message: "'TRAP' is invalid casing.",
				type: "Literal",
			},
		],
		output: "['traP']",
	},
	{
		code: "'TraP'",
		errors: [
			{
				message: "'TraP' is invalid casing.",
				type: "Literal",
			},
		],
		output: "'traP'",
	},
]

ruleTester.run("no-relative-path", rule, { valid, invalid })
