module.exports = {
  extends: ['@commitlint/config-conventional', 'commitlint-config-gitmoji'],
  rules: {
    'scope-enum': [2, 'always', ['global', 'akagi', 'kaguya', 'globalkey']],
  },
};
