import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: buildOptions): webpack.Configuration{
  const {mode, isDev, paths} = options
  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(paths)
  }
}