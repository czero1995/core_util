
const scriptsDev = [
    "https://gw.alipayobjects.com/os/lib/react/16.8.6/umd/react.development.js",
    "https://gw.alipayobjects.com/os/lib/react-dom/16.8.6/umd/react-dom.development.js",
    "https://cdn.bootcdn.net/ajax/libs/moment.js/2.25.3/moment.js",
  ];
  const scriptsProd = [
    "https://gw.alipayobjects.com/os/lib/react/16.8.6/umd/react.production.min.js",
    "https://gw.alipayobjects.com/os/lib/react-dom/16.8.6/umd/react-dom.production.min.js",
    "https://cdn.bootcdn.net/ajax/libs/moment.js/2.25.3/moment.min.js",
  ];
  const config = {
    scripts: process.env.NODE_ENV === "development" ? scriptsDev : scriptsProd,
    externals: { react: "React", "react-dom": "ReactDOM", moment: "moment" },
    chunks:  process.env.NODE_ENV === "production" ? ["vendors", "umi"] : ["umi"],
    chainWebpack: function (config, { webpack }) {
      if (process.env.NODE_ENV === "production") {
        config.merge({
          optimization: {
            splitChunks: {
              chunks: "all",
              minSize: 30000,
              minChunks: 3,
              automaticNameDelimiter: ".",
              cacheGroups: {
                vendor: {
                  name: "vendors",
                  test({ resource }) {
                    return /[\\/]node_modules[\\/]/.test(resource);
                  },
                  priority: 10,
                },
              },
            },
          },
        });
      }
    }
  }
  
  
  module.exports = config
  