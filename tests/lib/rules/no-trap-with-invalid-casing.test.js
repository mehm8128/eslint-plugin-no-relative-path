"use strict"

const rule = require("../../../lib/rules/no-trap-with-invalid-casing.js")

const RuleTester = require("eslint").RuleTester
const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } })

const valid = [
	{ code: "const traP = 'traP'" },
	{ code: "function traP() {}", options: [{ strict: true }] },
	{ code: "const traP = {\n  traP: 'traP'\n}", options: [{ strict: true }] },
]

const invalid = [
	{
		code: "const traP = 'trap'",
		errors: [
			{
				message: "'trap' is invalid casing.",
				type: "Literal",
			},
		],
		output: "const traP = 'traP'",
	},
	{
		code: "const traP = `trap`",
		errors: [
			{
				message: "'trap' is invalid casing.",
				type: "TemplateElement",
			},
		],
		output: "const traP = 'traP'",
	},
	{
		code: "let trAP",
		errors: [
			{
				message: "'trAP' is invalid casing.",
				type: "Identifier",
			},
		],
		options: [{ strict: true }],
		output: "let traP",
	},
	{
		code: "function Trap() {}",
		errors: [
			{
				message: "'Trap' is invalid casing.",
				type: "Identifier",
			},
		],
		options: [{ strict: true }],
		output: "function traP() {}",
	},
	{
		code: "const aaa = {\n  TRAP : 'traP'\n}",
		errors: [
			{
				message: "'TRAP' is invalid casing.",
				type: "Identifier",
			},
		],
		options: [{ strict: true }],
		output: "const aaa = {\n  traP : 'traP'\n}",
	},
	{
		code: "const Trap = {\n  TrAp: 'tRaP'\n}",
		errors: [
			{
				message: "'Trap' is invalid casing.",
				type: "Identifier",
			},
			{
				message: "'TrAp' is invalid casing.",
				type: "Identifier",
			},
			{
				message: "'tRaP' is invalid casing.",
				type: "Literal",
			},
		],
		options: [{ strict: true }],
		output: "const traP = {\n  traP: 'traP'\n}",
	},
	{
		code: "console.log(trap)",
		errors: [
			{
				message: "'trap' is invalid casing.",
				type: "Identifier",
			},
		],
		options: [{ strict: true }],
		output: "console.log(traP)",
	},
]

ruleTester.run("no-relative-path", rule, { valid, invalid })
