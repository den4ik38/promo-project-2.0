import webpack, { WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { buildPaths } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(paths: buildPaths): WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    })
  ]
}