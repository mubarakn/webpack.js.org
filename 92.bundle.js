(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{375:function(e,n,s){"use strict";s.r(n),n.default='<p><a href="https://npmjs.com/package/exports-loader"><img src="https://img.shields.io/npm/v/exports-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/exports-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/exports-loader"><img src="https://david-dm.org/webpack-contrib/exports-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/exports-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/exports-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>exports loader module for webpack</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>exports-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install exports-loader --save-dev\n</code></pre>\n<p>Then add the loader to the desired <code>require</code> calls. For example:</p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'exports-loader?file,parse=helpers.parse!./file.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// adds the following code to the file\'s source:</span>\n<span class="token comment">//  exports[\'file\'] = file;</span>\n<span class="token comment">//  exports[\'parse\'] = helpers.parse;</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'exports-loader?file!./file.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// adds the following code to the file\'s source:</span>\n<span class="token comment">//  module.exports = file;</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'exports-loader?[name]!./file.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// adds the following code to the file\'s source:</span>\n<span class="token comment">//  module.exports = file;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<h4 id="contributing-1"><a href="https://github.com/webpack-contrib/exports-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a><a href="#contributing-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/exports-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}}]);