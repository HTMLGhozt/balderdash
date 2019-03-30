export default {
  files: ['__tests__/**/*.test.js'],
  require: ['sucrase/register'],
  sources: ['!dist/**/*', '!node_modules/**/*'],
  concerrency: 4,
};
