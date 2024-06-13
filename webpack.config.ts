import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { buildEnv, buildPaths } from "./config/types/config";

export default (env: buildEnv) => {
  const paths: buildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build')
  }
  
  const mode = env.mode || 'development';
  const PORT = env.port || 3000
  const isDev = mode === 'development';
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });
  return config;
}