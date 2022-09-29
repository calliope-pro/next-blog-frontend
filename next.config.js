/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  reactStrictMode: true,
  env: {
    ENV_SECURITY_CODE: process.env.ENV_SECURITY_CODE
  }
}
