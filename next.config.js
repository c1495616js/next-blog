const withImages = require('next-images')
module.exports = withImages({
  async headers() {
    return [
      /** Global */
      {
        source: '/:path*',
        headers: [{
            key: 'Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
        ],
      },
      {
        source: '/',
        headers: [{
            key: 'Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
        ],
      },

      /**  Universal Links */
      {
        source: '/.well-known/:path*',
        headers: [{
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      }, 
    ]
  },
});