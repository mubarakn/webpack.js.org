(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{407:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/yaml-frontmatter-loader"><img src="https://img.shields.io/npm/v/yaml-frontmatter-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/yaml-frontmatter-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/yaml-frontmatter-loader"><img src="https://david-dm.org/webpack-contrib/yaml-frontmatter-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/yaml-frontmatter-loader"><img src="https://circleci.com/gh/webpack-contrib/yaml-frontmatter-loader.svg?style=svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>YAML frontmatter loader for webpack. Converts YAML in files to JSON.</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>yaml-frontmatter-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install yaml-frontmatter-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'yaml-frontmatter-loader!./file.md\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => returns file.md as javascript object</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n         test<span class="token punctuation">:</span> <span class="token regex">/\\.md$/</span><span class="token punctuation">,</span>\n         use<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">\'json-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'yaml-frontmatter-loader\'</span> <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/yaml-frontmatter-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}}]);