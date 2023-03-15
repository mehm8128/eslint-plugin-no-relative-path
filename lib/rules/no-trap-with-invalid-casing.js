"use strict"

function literalValidator(context, node) {
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
}
function templateElementValidator(context, node) {
	if (node.value.raw === "traP") return
	context.report({
		node,
		messageId: "invalidTraPCasing",
		data: {
			name: node.value.raw,
		},
		fix(fixer) {
			return fixer.replaceText(node, "'traP'")
		},
	})
}
function identifierValidator(context, node) {
	if (node.name === "traP") return
	context.report({
		node,
		messageId: "invalidTraPCasing",
		data: {
			name: node.name,
		},
		fix(fixer) {
			return fixer.replaceText(node, "traP")
		},
	})
}

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
		schema: [
			{
				type: "object",
				properties: {
					strict: {
						type: "boolean",
					},
				},
			},
		],
	},
	create(context) {
		return {
			"Literal[value=/trap/i]"(node) {
				literalValidator(context, node)
			},
			"TemplateElement[value.raw=/trap/i]"(node) {
				templateElementValidator(context, node)
			},
			"Identifier[name=/trap/i]"(node) {
				if (context.options[0] && context.options[0].strict) {
					identifierValidator(context, node)
				}
			},
		}
	},
}

module.exports = rule
