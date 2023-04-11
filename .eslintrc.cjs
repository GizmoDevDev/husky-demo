module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks', '@typescript-eslint/eslint-plugin', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        "prettier"
    ],
    root: true,
    env: {
        es6: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'import/named': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['node_modules', 'build', 'dist', 'webpack.config.js', 'generated.tsx'],
};
