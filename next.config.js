const path = require('path');
const withPWA = require("next-pwa");

const nextConfig = {
  webpack: (config, { isServer }) => {
    // サーバーとクライアントの両方での設定
    if (!isServer) {
      config.resolve.alias['@app'] = path.join(process.cwd(), 'app');
    }

    return config;
  },
  // 画像のドメイン使用
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // URL末尾のスラッシュ
  trailingSlash: true,
}

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrinctMode: true,
});

module.exports = nextConfig;