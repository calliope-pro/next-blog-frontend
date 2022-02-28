/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ENV_SECURITY_CODE: process.env.ENV_SECURITY_CODE
  }
}
