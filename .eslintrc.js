module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": __dirname,
        "sourceType": "module",
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": [
            "warn",
            {
                "default": "generic"
            }
        ],
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/class-name-casing": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/consistent-type-definitions": "warn",
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                "allowExpressions": true,
                "allowTypedFunctionExpressions": true,
                "allowHigherOrderFunctions": true
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [
            "warn",
            "tab",
            {
                "ArrayExpression": 1,
                "CallExpression": {
                    "arguments": "first"
                },
                "FunctionDeclaration": {
                    "parameters": "first",
                    "body": 1
                },
                "FunctionExpression": {
                    "parameters": "first",
                    "body": 1
                },
                "flatTernaryExpressions": true,
                "ImportDeclaration": 1,
                "MemberExpression": 1,
                "ObjectExpression": 1,
                "SwitchCase": 1
            }
        ],
        "@typescript-eslint/interface-name-prefix": "warn",
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": [
            "warn",
            {
                "default": [
                    "field",
                    "constructor",
                    "method"
                ]
            }
        ],
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-misused-promises": [
            "warn",
            {
                "checksVoidReturn": false
            }
        ],
        "@typescript-eslint/no-for-in-array": "warn",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/quotes": [
            "warn",
            "double",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/semi": [
            "warn",
            "never"
        ],
        "@typescript-eslint/triple-slash-reference": "warn",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/unified-signatures": "warn",
        "arrow-body-style": "warn",
        "arrow-parens": [
            "warn",
            "as-needed"
        ],
        "camelcase": "warn",
        "comma-dangle": "warn",
        "complexity": "off",
        "constructor-super": "warn",
        "curly": "warn",
        "dot-notation": "warn",
        "eol-last": "warn",
        "eqeqeq": [
            "warn",
            "always"
        ],
        "guard-for-in": "warn",
        "id-blacklist": "off",
        "id-match": "warn",
        "init-declarations": "warn",
        "max-classes-per-file": [
            "warn",
            1
        ],
        "max-len": [
            "warn",
            {
                "code": 150,
                "tabWidth": 2
            }
        ],
        "new-parens": "warn",
        "no-await-in-loop": "warn",
        "no-bitwise": "warn",
        "no-caller": "warn",
        "no-cond-assign": "warn",
        "no-console": "warn",
        "no-debugger": "warn",
        "no-dupe-else-if": "warn",
        "no-empty": "warn",
        "no-eval": "warn",
        "no-extra-boolean-cast": "warn",
        "no-extra-parens": "off",
        "no-fallthrough": "off",
        "no-import-assign": "warn",
        "no-invalid-this": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-multiple-empty-lines": "warn",
        "no-new-wrappers": "warn",
        "no-shadow": [
            "warn",
            {
                "hoist": "all"
            }
        ],
        "no-template-curly-in-string": "warn",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-undef-init": "warn",
        "no-underscore-dangle": "off",
        "no-unexpected-multiline": "off",
        "no-unsafe-finally": "warn",
        "no-unused-expressions": "warn",
        "no-unused-labels": "warn",
        "no-var": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never"
        ],
        "padding-line-between-statements": [
            "off",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-arrow-callback": "warn",
        "prefer-const": "warn",
        "prefer-object-spread": "warn",
        "prefer-template": "warn",
        "quote-props": [
            "warn",
            "as-needed"
        ],
        "radix": "warn",
        "space-before-function-paren": [
            "warn",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "space-in-parens": [
            "warn",
            "never"
        ],
        "spaced-comment": "warn",
        "@typescript-eslint/tslint/config": [
            "warn",
            {
                "rules": {
                    "import-spacing": true,
                    "jsdoc-format": true,
                    "no-boolean-literal-compare": true,
                    "no-reference-import": true,
                    "number-literal-format": true,
                    "one-line": [
                        true,
                        "check-catch",
                        "check-else",
                        "check-finally",
                        "check-open-brace",
                        "check-whitespace"
                    ],
                    "switch-final-break": [
                        true,
                        "always"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type",
                        "check-typecast"
                    ]
                }
            }
        ]
    },
    "overrides": [
        {
            "files": ["*.js"],
            "rules": {
                "@typescript-eslint/no-var-requires": "off",
                "no-console": "off",
                "no-shadow": "off"
            }
        },
        {
            "files": ["*.spec.ts"],
            "rules": {
                "no-undef": "off",
                "no-unused-expressions": "off",
                "no-shadow": "off",
                "init-declarations": "off"
            }
        },
        {
            "files": ["*.d.ts"],
            "rules": {
                "init-declarations": "off"
            }
        }
    ]
};
