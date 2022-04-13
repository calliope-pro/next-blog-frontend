/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ENV_SECURITY_CODE: process.env.ENV_SECURITY_CODE
  },
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_BACKEND_ORIGIN).hostname]
  },
}
