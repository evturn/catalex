##### Webpack

`path.resolve` is equivalent to navigating the file system through cd.

`path.join` gives you just that, a join.

`inline` setting embeds the webpack-dev-server runtime into the bundle allowing HMR to work easily. Otherwise we would have to set up more entry paths.

Loaders are transformations that are applied to source files, and return the new source. Loaders can be chained together, like using a pipe in Unix.

css-loader will resolve `@import` and `url` statements in our CSS files.

style-loader deals with require statements in our JavaScript.

It is a good idea to set up `include` always. There’s also `exclude` option.

If `new webpack.HotModuleReplacementPlugin()` is added twice to the plugins declaration, Webpack will return `Uncaught RangeError: Maximum call stack size exceeded` while hot loading.

ESLint Stages:
```
Stage 0 - Strawman
Stage 1 - Proposal
Stage 2 - Draft
Stage 3 - Candidate
Stage 4 - Finished
```
`resolve.extensions` setting will allow you to refer to JSX files without an extension.

`react-dom` is needed as React can be used to target multiple systems (DOM, mobile, terminal, i.e.,).

Babel determines the value of env like this:
Use the value of `BABEL_ENV` if set.
Use the value of `NODE_ENV` if set.
Default to `development`.