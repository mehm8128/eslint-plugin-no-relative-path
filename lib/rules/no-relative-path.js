"use strict"

const rule = {
	meta: {
		type: "layout",
		docs: {
			description: "Disallow relative paths",
		},
		fixable: "code",
		messages: {
			unexpectedRelativePath: "Relative paths are not allowed.",
		},
		schema: [],
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				const source = node.source.value
				const sourceRaw = node.source.raw
				if (source.startsWith("..")) {
					const absolutePath = sourceRaw.replace(/(\.\.\/)+/, "/@/")
					context.report({
						node,
						messageId: "unexpectedRelativePath",
						fix: (fixer) => fixer.replaceText(node.source, absolutePath),
					})
				}
			},
			CallExpression(node) {
				if (!node.callee) return
				if (node.callee.name !== "require") return
				const source = node.arguments[0].value
				const sourceRaw = node.arguments[0].raw
				if (source.startsWith("..")) {
					const absolutePath = sourceRaw.replace(/(\.\.\/)+/, "/@/")
					context.report({
						node,
						messageId: "unexpectedRelativePath",
						fix: (fixer) => fixer.replaceText(node.arguments[0], absolutePath),
					})
				}
			},
		}
	},
}

module.exports = rule
