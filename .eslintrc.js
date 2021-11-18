module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended', // add prettier
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/extensions': [0, 'never'],
    'import/no-unresolved': [0, 'never'],
    'vue/no-v-model-argument': [0, 'never'],
  },
  globals: {
    // import { defineProps } from 'vue'
    // defineProps在<script setup>中自动可用，无需导入
    defineProps: true,
    defineEmits: true,
  },
};
