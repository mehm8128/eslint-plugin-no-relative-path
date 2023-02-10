"use strict"

const rule = {
	meta: {
		type: "layout",
		docs: {
			description: "Disallow invalid 'traP' casing.",
		},
		fixable: "code",
		messages: {
			invalidTraPCasing: "'{{name}}' is invalid casing.",
		},
		schema: [],
	},
	create(context) {
		return {
			"Literal[value=/trap/i]"(node) {
				if (node.value === "traP") return
				context.report({
					node,
					messageId: "invalidTraPCasing",
					data: {
						name: node.value,
					},
					fix(fixer) {
						return fixer.replaceText(node, "'traP'")
					},
				})
			},
		}
	},
}

module.exports = rule
