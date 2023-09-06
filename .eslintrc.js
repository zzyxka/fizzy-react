module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": [
            "./tsconfig.json"
        ],
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": "off",
        "@typescript-eslint/semi": "off"
    },
    "ignorePatterns": [
        "node_modules/**/*",
        "misc/**/*",
    ]
}
