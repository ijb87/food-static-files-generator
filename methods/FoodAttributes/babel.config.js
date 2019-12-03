"use strict";

// const path = require('path')

const presets = [
  [
    "@babel/preset-env",
    {
      modules: false
    }
  ]
];

// Add this to working tests
const env = {
  test: {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current"
          }
        }
      ]
    ]
  }
};

const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: ["./src/"],
      alias: {
        "~": "./src/data"
      }
    }
  ],
  ["@babel/plugin-syntax-dynamic-import"],
  ["@babel/plugin-proposal-object-rest-spread"],
  ["@babel/plugin-transform-async-to-generator"]
];

module.exports = { presets, plugins, env };
