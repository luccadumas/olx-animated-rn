module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": "./src/config/.env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }]
  ]
};
