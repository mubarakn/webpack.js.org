(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{386:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/json5-loader"><img src="https://img.shields.io/npm/v/json5-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/json5-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/json5-loader"><img src="https://david-dm.org/webpack-contrib/json5-loader.svg" alt="deps"></a>\n<a href="https://travis-ci.org/webpack-contrib/json5-loader"><img src="https://img.shields.io/travis/webpack-contrib/json5-loader.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/json5-loader"><img src="https://codecov.io/gh/webpack-contrib/json5-loader/branch/master/graph/badge.svg" alt="cover"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=json5-loader"><img src="https://packagephobia.now.sh/badge?p=json5-loader" alt="size"></a></p>\n<p>A webpack loader for parsing <a href="https://json5.org/">json5</a> files into JavaScript objects.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>json5-loader</code>:</p>\n<pre><code class="hljs language-sh">$ npm install json5-loader --save-dev\n</code></pre>\n<p>You can use the loader either:</p>\n<ul>\n<li>by configuring the <code>json5-loader</code> in the <code>module.loaders</code> object of the webpack configuration, or</li>\n<li>by directly using the <code>json5-loader!</code> prefix to the require statement.</li>\n</ul>\n<p>Suppose we have the following <code>json5</code> file:</p>\n<p><strong>file.json5</strong></p>\n<pre><code class="hljs language-json5">// file.json5\n{\n  env: \'production\',\n  passwordStrength: \'strong\',\n}\n</code></pre>\n<h3 id="usage-with-preconfigured-loader">Usage with preconfigured loader<a href="#usage-with-preconfigured-loader" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./index.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token comment">// make all files ending in .json5 use the `json5-loader`</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.json5$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'json5-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// index.js</span>\n<span class="token keyword">var</span> appConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./appData.json5\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// or, in ES6</span>\n<span class="token comment">// import appConfig from \'./appData.json5\'</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appConfig<span class="token punctuation">.</span>env<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'production\'</span></code></pre>\n<h3 id="usage-with-require-statement-loader-prefix">Usage with require statement loader prefix<a href="#usage-with-require-statement-loader-prefix" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token keyword">var</span> appConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'json5-loader!./appData.json5\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// returns the content as json parsed object</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appConfig<span class="token punctuation">.</span>env<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'production\'</span></code></pre>\n<p>Don\'t forget to polyfill require if you want to use it in Node.js. See the webpack documentation.</p>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/json5-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/json5-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);