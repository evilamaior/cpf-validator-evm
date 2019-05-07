module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'no-multiple-empty-lines': [
            'error',
            {'max': 0}
        ],
        'eqeqeq': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'camelcase': 'error',
        'keyword-spacing': 'error',
        'space-infix-ops': 'error',
        'comma-spacing': 'error',
        'space-before-blocks': 'error',
        'spaced-comment': 'error',
        'key-spacing': 'error',
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        'func-call-spacing': 'error',
        'no-floating-decimal': 'error',
        'object-property-newline': 'error',
        'brace-style': 'error',
        'no-array-constructor': 'error'
    }
 };