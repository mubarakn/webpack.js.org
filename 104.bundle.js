(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{387:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/less-loader"><img src="https://img.shields.io/npm/v/less-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/less-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/less-loader"><img src="https://david-dm.org/webpack-contrib/less-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/less-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/less-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>A Less loader for webpack. Compiles Less to CSS.</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>less-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install less-loader --save-dev\n</code></pre>\n<p>Then modify your <code>webpack.config.js</code>:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span> <span class="token comment">// compiles Less to CSS</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<p>The <code>less-loader</code> requires <a href="https://github.com/less/less.js">less</a> as <a href="https://docs.npmjs.com/files/package.json#peerdependencies"><code>peerDependency</code></a>.\nThus you are able to control the versions accurately.</p>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Chain the <code>less-loader</code> with the\n<a href="/loaders/css-loader/"><code>css-loader</code></a> and the\n<a href="/loaders/style-loader/"><code>style-loader</code></a> to immediately\napply all styles to the DOM.</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span> <span class="token comment">// creates style nodes from JS strings</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span> <span class="token comment">// translates CSS into CommonJS</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span> <span class="token comment">// compiles Less to CSS</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>You can pass any Less specific options to the <code>less-loader</code> via <a href="/configuration/module/#rule-options-rule-query">loader options</a>.\nSee the <a href="http://lesscss.org/usage/#command-line-usage-options">Less documentation</a>\nfor all available options in dash-case. Since we\'re passing these options to\nLess programmatically, you need to pass them in camelCase here:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          strictMath<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          noIeCompat<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Unfortunately, Less doesn\'t map all options 1-by-1 to camelCase. When in doubt,\n<a href="https://github.com/less/less.js/blob/3.x/bin/lessc">check their executable</a>\nand search for the dash-case option.</p>\n<h3 id="in-production">In production<a href="#in-production" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Usually, it\'s recommended to extract the style sheets into a dedicated file in\nproduction using the\n<a href="/plugins/mini-css-extract-plugin/">MiniCssExtractPlugin</a>.\nThis way your styles are not dependent on JavaScript.</p>\n<h3 id="imports">Imports<a href="#imports" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Starting with <code>less-loader</code> 4, you can now choose between Less\' builtin resolver\nand webpack\'s resolver. By default, webpack\'s resolver is used.</p>\n<h4 id="webpack-resolver">webpack resolver<a href="#webpack-resolver" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>webpack provides an\n<a href="/configuration/resolve/">advanced mechanism to resolve files</a>.\nThe <code>less-loader</code> applies a Less plugin that passes all queries to the webpack\nresolver. Thus you can import your Less modules from <code>node_modules</code>. Just\nprepend them with a <code>~</code> which tells webpack to look up the\n<a href="/configuration/resolve/#resolve-modules"><code>modules</code></a>.</p>\n<pre><code class="hljs language-css"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~bootstrap/less/bootstrap\'</span><span class="token punctuation">;</span></span></code></pre>\n<p>It\'s important to only prepend it with <code>~</code>, because <code>~/</code> resolves to the\nhome-directory. webpack needs to distinguish between <code>bootstrap</code> and\n<code>~bootstrap</code>, because CSS and Less files have no special syntax for importing\nrelative files. Writing <code>@import "file"</code> is the same as <code>@import "./file";</code></p>\n<h5 id="non-less-imports">Non-Less imports<a href="#non-less-imports" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p>Using webpack\'s resolver, you can import any file type. You just need a loader\nthat exports valid Less code. Often, you will also want to set the <code>issuer</code>\ncondition to ensure that this rule is only applied on imports originating from\nLess files:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n      issuer<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'js-to-less-loader\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="less-resolver">Less resolver<a href="#less-resolver" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>If you specify the <code>paths</code> option, the <code>less-loader</code> will not use webpack\'s\nresolver. Modules, that can\'t be resolved in the local folder, will be searched\nin the given <code>paths</code>. This is Less\' default behavior. <code>paths</code> should be an array\nwith absolute paths:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          paths<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'node_modules\'</span><span class="token punctuation">)</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>In this case, all webpack features like importing non-Less files or aliasing\nwon\'t work of course.</p>\n<h3 id="plugins">Plugins<a href="#plugins" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>In order to use <a href="http://lesscss.org/usage/#plugins">plugins</a>, simply set the\n<code>plugins</code> option like this:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> CleanCSSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'less-plugin-clean-css\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token keyword">new</span> <span class="token class-name">CleanCSSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> advanced<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="extracting-style-sheets">Extracting style sheets<a href="#extracting-style-sheets" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Bundling CSS with webpack has some nice advantages like referencing images and\nfonts with hashed urls or\n<a href="/concepts/hot-module-replacement/">hot module replacement</a>\nin development. In production, on the other hand, it\'s not a good idea to apply\nyour style sheets depending on JS execution. Rendering may be delayed or even a\n<a href="https://en.wikipedia.org/wiki/Flash_of_unstyled_content">FOUC</a> might be visible.\nThus it\'s often still better to have them as separate files in your final\nproduction build.</p>\n<p>There are two possibilities to extract a style sheet from the bundle:</p>\n<ul>\n<li><a href="https://github.com/peerigon/extract-loader"><code>extract-loader</code></a> (simpler, but\nspecialized on the css-loader\'s output)</li>\n<li><a href="/plugins/mini-css-extract-plugin/">MiniCssExtractPlugin</a>\n(more complex, but works in all use-cases)</li>\n</ul>\n<h3 id="source-maps">Source maps<a href="#source-maps" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>To enable CSS source maps, you\'ll need to pass the <code>sourceMap</code> option to the\n<code>less-loader</code> <em>and</em> the <code>css-loader</code>. Your <code>webpack.config.js</code> should look\nlike this:</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Also checkout the <a href="https://github.com/webpack-contrib/less-loader/tree/master/examples/sourceMaps">sourceMaps example</a>.</p>\n<p>If you want to edit the original Less files inside Chrome,\n<a href="https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0">there\'s a good blog post</a>.\nThe blog post is about Sass but it also works for Less.</p>\n<h3 id="css-modules-gotcha">CSS modules gotcha<a href="#css-modules-gotcha" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>There is a known problem with Less and\n<a href="https://github.com/css-modules/css-modules">CSS modules</a> regarding relative\nfile paths in <code>url(...)</code> statements.\n<a href="https://github.com/webpack-contrib/less-loader/issues/109#issuecomment-253797335">See this issue for an explanation</a>.</p>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done\nso.</p>\n<h4 id="contributing-1"><a href="https://github.com/webpack-contrib/less-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a><a href="#contributing-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/less-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}}]);