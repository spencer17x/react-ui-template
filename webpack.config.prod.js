const base = require('./webpack.config');

module.exports = Object.assign({}, base, {
  mode: 'production',
  // 举例: 如果有 jq 用 cdn 就不用 wp 来打包了
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    }
  }
})