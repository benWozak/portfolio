module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        // options: { mode: ['react-component'] }
      });
      return config;
    },
    env: {
      NEXT_SERVICE_ID: process.env.NEXT_SERVICE_ID,
      NEXT_TEMPLATE_ID: process.env.NEXT_TEMPLATE_ID,
      NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
    },
  };