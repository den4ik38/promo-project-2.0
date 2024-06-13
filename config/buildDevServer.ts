import { buildOptions } from './types/config';

import type { Configuration as CofigurationDevServer } from 'webpack-dev-server';

export function buildDevServer(options: buildOptions): CofigurationDevServer{
  return {
    port: options.port,
    open: true,
    historyApiFallback: true
  }
}