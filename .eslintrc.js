module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb','prettier','prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser:'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',

  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    'no-console': 'off',
    "generators": "never",
    "no-underscore-dangle": "off",
    "no-param-reassign": 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {extensions: ['.jsx','.js']}
    ],
    'import/prefer-default-export':'off',
    'react/state-in-constructor': [0, "always"],
    'react/prop-types': 0,
    "react/jsx-props-no-spreading": "off",
    'static-property-placement': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings:
  {
    "import/resolver":{
    "babel-plugin-root-import": {
      rootPathSuffix: "src"

    },
  }
  }
};
