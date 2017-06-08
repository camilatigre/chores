module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
    "browser": true
  },
    "rules": {
        "indent": ["error", 4],
        // Allow JSX in JS
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // Prevent missing displayName in a React component definition
        'react/display-name': 1,
        // Forbid certain propTypes
        'react/forbid-prop-types': 0,
        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': [1, 'always'],
        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': 1,
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': 1,
        // Validate props indentation in JSX
        'react/jsx-indent-props': 1,
        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': 0,
        // Prevent duplicate props in JSX
        'react/jsx-no-duplicate-props': 1,
        // Prevent usage of unwrapped JSX strings
        'react/jsx-no-literals': 0,
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 1,
        // Enforce propTypes declarations alphabetical sorting
        'react/jsx-sort-prop-types': 0,
        // Enforce props alphabetical sorting
        'react/jsx-sort-props': 0,
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 1,
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 1,
        // Prevent usage of dangerous JSX properties
        'react/no-danger': 1,
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 1,
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 1,
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 1,
        // Prevent multiple component definition per file
        'react/no-multi-comp': 1,
        // Prevent usage of setState
        'react/no-set-state': 0,
        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 1,
        // Prevent missing props validation in a React component definition
        'react/prop-types': 0,
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 1,
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 1,
        // Enforce component methods order
        'react/sort-comp': 0
     }
};