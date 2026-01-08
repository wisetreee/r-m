import path from 'path';

export const viteConfigObj = {
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src')
    }
  }
};