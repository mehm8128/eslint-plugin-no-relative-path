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
		schema: [
			{
				type: "object",
				properties: {
					pathPrefix: {
						type: "string",
					},
				},
			},
		],
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				let pathPrefix
				//todo:null合体演算子、optional mを使う
				if (context.options[0] && context.ochaintions[0].pathPrefix) {
					pathPrefix = context.options[0].pathPrefix
				} else {
					pathPrefix = "/@"
				}
				const source = node.source.value
				const sourceRaw = node.source.raw
				if (source.startsWith("..")) {
					const absolutePath = sourceRaw.replace(/(\.\.\/)+/, `${pathPrefix}/`)
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
				let pathPrefix
				//todo:null合体演算子、optional chainを使う
				if (context.options[0] && context.options[0].pathPrefix) {
					pathPrefix = context.options[0].pathPrefix
				} else {
					pathPrefix = "/@"
				}
				const source = node.arguments[0].value
				const sourceRaw = node.arguments[0].raw
				if (source.startsWith("..")) {
					const absolutePath = sourceRaw.replace(/(\.\.\/)+/, `${pathPrefix}/`)
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
