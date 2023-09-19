const webpack = require("webpack");
const isProduction = false;
const dev = (arg) => {
  return {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      historyApiFallback: true//该配置影响react-router的路由刷新
    }
  };
}
module.exports = dev();
