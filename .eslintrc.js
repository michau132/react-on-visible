const ERROR = 'error';
const OFF = 'off';

module.exports = {
    'extends': 'eslint:recommended',
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        // Possible Errors - http://eslint.org/docs/rules/#possible-errors
        'no-template-curly-in-string': ERROR,
        'no-unsafe-negation': ERROR,
        'valid-jsdoc': [ERROR, {
            "requireParamDescription": false,
            "requireReturnDescription": false
        }],

        // Best Practices - http://eslint.org/docs/rules/#best-practices
        'block-scoped-var': ERROR,
        'class-methods-use-this': ERROR,
        'consistent-return': ERROR,
        'curly': ERROR,
        'default-case': ERROR,
        'dot-location': [ERROR, 'property'],
        'dot-notation': ERROR,
        'eqeqeq': ERROR,
        'guard-for-in': ERROR,
        'no-caller': ERROR,
        'no-console': OFF,
        'no-div-regex': ERROR,
        'no-else-return': ERROR,
        'no-empty-function': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        'no-floating-decimal': ERROR,
        'no-global-assign': ERROR,
        'no-implicit-coercion': ERROR,
        'no-implied-eval': ERROR,
        'no-invalid-this': ERROR,
        'no-iterator': ERROR,
        'no-labels': ERROR,
        'no-lone-blocks': ERROR,
        'no-loop-func': ERROR,
        'no-multi-spaces': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-new': ERROR,
        'no-octal-escape': ERROR,
        'no-param-reassign': ERROR,
        'no-proto': ERROR,
        'no-return-assign': [ERROR, 'always'],
        'no-return-await': ERROR,
        'no-script-url': ERROR,
        'no-self-compare': ERROR,
        'no-sequences': ERROR,
        'no-throw-literal': ERROR,
        'no-unmodified-loop-condition': ERROR,
        'no-unused-expressions': ERROR,
        'no-useless-call': ERROR,
        'no-useless-concat': ERROR,
        'no-useless-escape': ERROR,
        'no-useless-return': ERROR,
        'no-void': ERROR,
        'no-warning-comments': ERROR,
        'no-with': ERROR,
        'prefer-promise-reject-errors': ERROR,
        'radix': [ERROR, 'as-needed'],
        'require-await': ERROR,
        'vars-on-top': ERROR,
        'wrap-iife': ERROR,
        'yoda': ERROR,
        'no-var': ERROR,

        // Strict Mode - http://eslint.org/docs/rules/#strict-mode
        'strict': [ERROR, 'safe'],

        // Variables - http://eslint.org/docs/rules/#variables
        'no-shadow-restricted-names': ERROR,
        'no-shadow': ERROR,
        'no-use-before-define': [ERROR, {'functions': false, 'classes': false}],

        // Node and CommonJS - http://eslint.org/docs/rules/#nodejs-and-commonjs
        'callback-return': ERROR,
        'global-require': ERROR,
        'handle-callback-err': [ERROR, '^.*(e|E)rr'],
        'no-mixed-requires': ERROR,
        'no-new-require': ERROR,
        'no-path-concat': ERROR,
        'no-process-env': ERROR,
        'no-process-exit': ERROR,

        // Stylistic Issues - http://eslint.org/docs/rules/#stylistic-issues
        'array-bracket-spacing': [ERROR, 'never'],
        'block-spacing': ERROR,
        'brace-style': [ERROR, '1tbs'],
        'camelcase': ERROR,
        'comma-dangle': [ERROR, 'never'],
        'comma-spacing': [ERROR, {'before': false, 'after': true}],
        'comma-style': [ERROR, 'last'],
        'computed-property-spacing': [ERROR, 'never'],
        'eol-last': [ERROR, 'always'],
        'func-call-spacing': [ERROR, 'never'],
        'func-name-matching': ERROR,
        'func-style': [ERROR, 'declaration', {'allowArrowFunctions': true}],
        'id-blacklist': [ERROR, 'data', 'err', 'e', 'cb', 'callback'],
        'id-length': [ERROR, {'exceptions': ['$', '_']} ],
        'indent': [ERROR, 4, {'MemberExpression': OFF}],
        'key-spacing': [ERROR, {'beforeColon': false, 'mode':'strict'}],
        'keyword-spacing': ERROR,
        'linebreak-style': [ERROR, 'unix'],
        'max-depth': [ERROR, 4],
        'max-len': [ERROR, 120, { "ignoreStrings": true, "ignoreTemplateLiterals": true }],
        'max-lines': [ERROR, { "skipBlankLines": true, "skipComments": true }],
        'max-nested-callbacks': [ERROR, 6],
        'max-params': [ERROR, 3],
        'max-statements-per-line': [ERROR, {'max': 1}],
        'max-statements': [ERROR, 15],
        'new-cap': ERROR,
        'new-parens': ERROR,
        'newline-after-var': ERROR,
        'newline-before-return': ERROR,
        'newline-per-chained-call': ERROR,
        'no-array-constructor': ERROR,
        'no-bitwise': ERROR,
        'no-continue': ERROR,
        'no-mixed-operators': ERROR,
        'no-mixed-spaces-and-tabs': ERROR,
        'no-multi-assign': ERROR,
        'no-multiple-empty-lines': [ERROR, {'max': 1}],
        'no-negated-condition': ERROR,
        'no-nested-ternary': ERROR,
        'no-new-object': ERROR,
        'no-plusplus': [ERROR, {'allowForLoopAfterthoughts': true}],
        'no-trailing-spaces': ERROR,
        'no-underscore-dangle': ERROR,
        'no-unneeded-ternary': ERROR,
        'no-whitespace-before-property': ERROR,
        'object-curly-newline': OFF,
        'object-curly-spacing': [ERROR, 'never'],
        'object-property-newline': ERROR,
        'one-var-declaration-per-line': [ERROR, 'always'],
        'one-var': [ERROR, 'never'],
        'padded-blocks': [ERROR, 'never'],
        'quote-props': [ERROR, 'as-needed'],
        'quotes': [ERROR, 'single'],
        'semi-spacing': ERROR,
        'semi': ERROR,
        'space-before-blocks': ERROR,
        'space-before-function-paren': [ERROR, {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
        'space-in-parens': ERROR,
        'space-infix-ops': [ERROR, {'int32Hint': false}],
        'space-unary-ops': ERROR,
        'template-tag-spacing': ERROR,
        'unicode-bom': ERROR,

        // EcmaScript 6 - http://eslint.org/docs/rules/#ecmascript-6
        'arrow-body-style': [ERROR, 'as-needed'],
        'arrow-parens': ERROR,
        'arrow-spacing': ERROR,
        'generator-star-spacing': ERROR,
        'no-confusing-arrow': [ERROR, {'allowParens': true}],
        'no-duplicate-imports': [ERROR, {'includeExports': true}],
        'no-useless-computed-key': ERROR,
        'no-useless-constructor': ERROR,
        'no-useless-rename': ERROR,
        'object-shorthand': OFF,
        'prefer-const': ERROR,
        'prefer-numeric-literals': ERROR,
        'prefer-rest-params': ERROR,
        'prefer-spread': ERROR,
        'prefer-template': ERROR,
        'require-yield': ERROR,
        'sort-imports': ERROR,
        'symbol-description': ERROR,
        'template-curly-spacing': ERROR,
        'yield-star-spacing': ERROR
    }
};
