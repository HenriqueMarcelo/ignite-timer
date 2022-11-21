# ESLint Installation and Configuration Instructions

// https://www.npmjs.com/package/eslint-config-airbnb-typescript

### Instaling ESLint

```
yarn add eslint --dev
yarn run eslint --init
```

Choose the options:

```
To check syntax, find problems, and enforce code style
JavaScript modules (import/export)
React
TypeScript > No
Browser
Use a popular style guide
Airbnb: https://github.com/airbnb/javascript
JavaScript
```

### Instaling Airbnb TypeScript

```
yarn add eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin@^5.13.0 @typescript-eslint/parser@^5.0.0 --dev
```

In .eslintrs.cjs 

```
+ parserOptions: {
+   project: './tsconfig.json'
+ },
  extends: [
    'airbnb',
+   'airbnb-typescript'
  ]
```

In tsconfig.json

```
"include": [
    "src",
    ".eslintrc.cjs",
  ],
```

### Using autofix in VSCode

```
ctrl + shift + p
Open Workspace settings
```

In the settings file

```
"settings": {
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true
		},
		"eslint.validate": ["javascript", "typescript"]
	},
	"extensions": {
		"recommendations": [
			"dbaeumer.vscode-eslint"
		]
	},

```


### Usefull rules

```
  rules: {
    'prefer-default-export': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-bind': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'react/no-unstable-nested-components': 0,

    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/alt-text': 0,
    'no-restricted-globals': 1,
    'no-unused-vars': 1,

    'react/require-default-props': 0,
    'import/no-cycle': 0,
    'no-param-reassign': 0,
  },
```