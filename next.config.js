/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  swcMinify: true,
  reactStrictMode: true,
  env: {
    ENV_SECURITY_CODE: process.env.ENV_SECURITY_CODE
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }, { protocol: 'http', hostname: '**' }]
    // domains: [new URL(process.env.NEXT_PUBLIC_BACKEND_ORIGIN).hostname]
  },
}
