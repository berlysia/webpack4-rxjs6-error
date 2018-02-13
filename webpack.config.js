
// https://github.com/ReactiveX/rxjs/blob/92dd3d135d3fcf7fa98526a2ba0493754407a94a/doc/pipeable-operators.md#build-and-treeshaking
const rxPaths = require('rxjs/_esm2015/path-mapping');
// no reproduce under 'rxjs/_esm5/path-mapping'

const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  resolve: {
    alias: rxPaths()
  },
  mode: 'production'
};
