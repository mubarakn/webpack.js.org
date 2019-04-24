(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{312:function(n,a,s){"use strict";s.r(a),a.default='<p>Because JavaScript can be written for both server and browser, webpack offers multiple deployment <em>targets</em> that you can set in your webpack <a href="/configuration">configuration</a>.</p>\n<blockquote class="warning">\n<p>The webpack <code>target</code> property is not to be confused with the <code>output.libraryTarget</code> property. For more information see <a href="/concepts/output/">our guide</a> on the <code>output</code> property.</p>\n</blockquote>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To set the <code>target</code> property, you simply set the target value in your webpack config:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  target<span class="token punctuation">:</span> <span class="token string">\'node\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>In the example above, using <code>node</code> webpack will compile for usage in a Node.js-like environment (uses Node.js <code>require</code> to load chunks and not touch any built in modules like <code>fs</code> or <code>path</code>).</p>\n<p>Each <em>target</em> has a variety of deployment/environment specific additions, support to fit its needs. See what <a href="/configuration/target/">targets are available</a>.</p>\n<blockquote class="todo">\n<p>Further expansion for other popular target values</p>\n</blockquote>\n<h2 id="multiple-targets">Multiple Targets<a href="#multiple-targets" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Although webpack does <strong>not</strong> support multiple strings being passed into the <code>target</code> property, you can create an isomorphic library by bundling two separate configurations:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> serverConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  target<span class="token punctuation">:</span> <span class="token string">\'node\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'lib.node.js\'</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//…</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> clientConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  target<span class="token punctuation">:</span> <span class="token string">\'web\'</span><span class="token punctuation">,</span> <span class="token comment">// &#x3C;=== can be omitted as default is \'web\'</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'lib.js\'</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//…</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span> serverConfig<span class="token punctuation">,</span> clientConfig <span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n<p>The example above will create a <code>lib.js</code> and <code>lib.node.js</code> file in your <code>dist</code> folder.</p>\n<h2 id="resources">Resources<a href="#resources" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>As seen from the options above there are multiple different deployment <em>targets</em> that you can choose from. Below is a list of examples, and resources that you can refer to.</p>\n<ul>\n<li><strong><a href="https://github.com/TheLarkInn/compare-webpack-target-bundles">compare-webpack-target-bundles</a></strong>: A great resource for testing and viewing different webpack <em>targets</em>. Also great for bug reporting.</li>\n<li><strong><a href="https://github.com/chentsulin/electron-react-boilerplate">Boilerplate of Electron-React Application</a></strong>: A good example of a build process for electron\'s main process and renderer process.</li>\n</ul>\n<blockquote class="todo">\n<p>Need to find up to date examples of these webpack targets being used in live code or boilerplates.</p>\n</blockquote>\n'}}]);