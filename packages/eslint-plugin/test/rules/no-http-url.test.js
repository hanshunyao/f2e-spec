'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://hansy.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://hansy.com';",
      output: "var test = 'http://hansy.com';",
      errors: [
        {
          message: 'Recommended "http://hansy.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://hansy.com' />",
      output: "<img src='http://hansy.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://hansy.com" switch to HTTPS',
        },
      ],
    },
  ],
});
