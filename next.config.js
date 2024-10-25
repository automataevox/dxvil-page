/** @type {import('next').NextConfig} */
const { execSync } = require('child_process');

const appVersion = execSync('git rev-parse HEAD').toString().trim();

const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
  nextConfig,
  env: {
    NEXT_PUBLIC_APP_VERSION: appVersion,
  },
}
