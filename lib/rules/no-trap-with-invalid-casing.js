"use strict"

function stringValidator(context, node) {
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
function valueValidator(context, node) {
	if (node.id.name === "traP") return
	context.report({
		node,
		messageId: "invalidTraPCasing",
		data: {
			name: node.id.name,
		},
		fix(fixer) {
			return fixer.replaceText(node.id, "traP")
		},
	})
}
function keyValidator(context, node) {
	if (node.key.name === "traP") return
	context.report({
		node,
		messageId: "invalidTraPCasing",
		data: {
			name: node.key.name,
		},
		fix(fixer) {
			return fixer.replaceText(node.key, "traP")
		},
	})
}
function argumentValidator(context, node) {
	node.arguments.forEach((arg) => {
		if (!/trap/i.test(arg.name)) return
		if (arg.name === "traP") return
		context.report({
			node,
			messageId: "invalidTraPCasing",
			data: {
				name: arg.name,
			},
			fix(fixer) {
				return fixer.replaceText(arg, "traP")
			},
		})
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
				stringValidator(context, node)
			},
			"VariableDeclarator[id.name=/trap/i]"(node) {
				if (context.options[0] && context.options[0].strict) {
					valueValidator(context, node)
				}
			},
			"FunctionDeclaration[id.name=/trap/i]"(node) {
				if (context.options[0] && context.options[0].strict) {
					valueValidator(context, node)
				}
			},
			"Property[key.name=/trap/i]"(node) {
				if (context.options[0] && context.options[0].strict) {
					keyValidator(context, node)
				}
			},
			CallExpression(node) {
				if (context.options[0] && context.options[0].strict) {
					argumentValidator(context, node)
				}
			},
		}
	},
}

module.exports = rule
