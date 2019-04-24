(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{323:function(e,n,o){"use strict";o.r(n),n.default='<p>These options configure whether to polyfill or mock certain <a href="https://nodejs.org/docs/latest/api/globals.html">Node.js globals</a> and modules. This allows code originally written for the Node.js environment to run in other environments like the browser.</p>\n<p>This feature is provided by webpack\'s internal <a href="https://github.com/webpack/webpack/blob/master/lib/NodeStuffPlugin.js"><code>NodeStuffPlugin</code></a> plugin. If the target is "web" (default) or "webworker", the <a href="https://github.com/webpack/webpack/blob/master/lib/node/NodeSourcePlugin.js"><code>NodeSourcePlugin</code></a> plugin is also activated.</p>\n<h2 id="node"><code>node</code><a href="#node" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object</code></p>\n<p>This is an object where each property is the name of a Node global or module and each value may be one of the following...</p>\n<ul>\n<li><code>true</code>: Provide a polyfill.</li>\n<li><code>"mock"</code>: Provide a mock that implements the expected interface but has little or no functionality.</li>\n<li><code>"empty"</code>: Provide an empty object.</li>\n<li><code>false</code>: Provide nothing. Code that expects this object may crash with a <code>ReferenceError</code>. Code that attempts to import the module using <code>require(\'modulename\')</code> may trigger a <code>Cannot find module "modulename"</code> error.</li>\n</ul>\n<blockquote class="warning">\n<p>Not every Node global supports all four options. The compiler will throw an error for property-value combinations that aren\'t supported (e.g. <code>process: \'empty\'</code>). See the sections below for more details.</p>\n</blockquote>\n<p>These are the defaults:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    global<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    process<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    __filename<span class="token punctuation">:</span> <span class="token string">\'mock\'</span><span class="token punctuation">,</span>\n    __dirname<span class="token punctuation">:</span> <span class="token string">\'mock\'</span><span class="token punctuation">,</span>\n    Buffer<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    setImmediate<span class="token punctuation">:</span> <span class="token boolean">true</span>\n\n    <span class="token comment">// See "Other node core libraries" for additional options.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Since webpack 3.0.0, the <code>node</code> option may be set to <code>false</code> to completely turn off the <code>NodeStuffPlugin</code> and <code>NodeSourcePlugin</code> plugins.</p>\n<h2 id="nodeconsole"><code>node.console</code><a href="#nodeconsole" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean | "mock"</code></p>\n<p>Default: <code>false</code></p>\n<p>The browser provides a <code>console</code> object with a very similar interface to the Node.js <code>console</code>, so a polyfill is generally not needed.</p>\n<h2 id="nodeprocess"><code>node.process</code><a href="#nodeprocess" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean | "mock"</code></p>\n<p>Default: <code>true</code></p>\n<h2 id="nodeglobal"><code>node.global</code><a href="#nodeglobal" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean</code></p>\n<p>Default: <code>true</code></p>\n<p>See <a href="https://github.com/webpack/webpack/blob/master/buildin/global.js">the source</a> for the exact behavior of this object.</p>\n<h2 id="node__filename"><code>node.__filename</code><a href="#node__filename" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean | "mock"</code></p>\n<p>Default: <code>"mock"</code></p>\n<p>Options:</p>\n<ul>\n<li><code>true</code>: The filename of the <strong>input</strong> file relative to the <a href="https://webpack.js.org/configuration/entry-context/#context"><code>context</code> option</a>.</li>\n<li><code>false</code>: The regular Node.js <code>__filename</code> behavior. The filename of the <strong>output</strong> file when run in a Node.js environment.</li>\n<li><code>"mock"</code>: The fixed value <code>"index.js"</code>.</li>\n</ul>\n<h2 id="node__dirname"><code>node.__dirname</code><a href="#node__dirname" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean | "mock"</code></p>\n<p>Default: <code>"mock"</code></p>\n<p>Options:</p>\n<ul>\n<li><code>true</code>: The dirname of the <strong>input</strong> file relative to the <a href="https://webpack.js.org/configuration/entry-context/#context"><code>context</code> option</a>.</li>\n<li><code>false</code>: The regular Node.js <code>__dirname</code> behavior. The dirname of the <strong>output</strong> file when run in a Node.js environment.</li>\n<li><code>"mock"</code>: The fixed value <code>"/"</code>.</li>\n</ul>\n<h2 id="nodebuffer"><code>node.Buffer</code><a href="#nodebuffer" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean | "mock"</code></p>\n<p>Default: <code>true</code></p>\n<h2 id="nodesetimmediate"><code>node.setImmediate</code><a href="#nodesetimmediate" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean | "mock" | "empty"</code></p>\n<p>Default: <code>true</code></p>\n<h2 id="other-node-core-libraries">Other node core libraries<a href="#other-node-core-libraries" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean | "mock" | "empty"</code></p>\n<blockquote class="warning">\n<p>This option is only activated (via <code>NodeSourcePlugin</code>) when the target is unspecified, "web" or "webworker".</p>\n</blockquote>\n<p>Polyfills for Node.js core libraries from <a href="https://github.com/webpack/node-libs-browser"><code>node-libs-browser</code></a> are used if available, when the <code>NodeSourcePlugin</code> plugin is enabled. See the list of <a href="https://github.com/webpack/node-libs-browser#readme">Node.js core libraries and their polyfills</a>.</p>\n<p>By default, webpack will polyfill each library if there is a known polyfill or do nothing if there is not one. In the latter case, webpack will behave as if the module name was configured with the <code>false</code> value.</p>\n<blockquote class="tip">\n<p>To import a built-in module, use <a href="/api/module-variables/#__non_webpack_require__-webpack-specific-"><code>__non_webpack_require__</code></a>, i.e. <code>__non_webpack_require__(\'modulename\')</code> instead of <code>require(\'modulename\')</code>.</p>\n</blockquote>\n<p>Example:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    dns<span class="token punctuation">:</span> <span class="token string">\'mock\'</span><span class="token punctuation">,</span>\n    fs<span class="token punctuation">:</span> <span class="token string">\'empty\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    url<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);