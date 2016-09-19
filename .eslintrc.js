module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "react/jsx-filename-extension": ["off"],
    "class-methods-use-this": ["off"]
  }
};
