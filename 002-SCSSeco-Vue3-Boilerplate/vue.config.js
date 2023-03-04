module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  // 4 localtunnel
  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
  },
};
