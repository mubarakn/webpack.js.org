(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{432:function(n,e,a){"use strict";a.r(e),e.default='<p>This plugin enables more fine grained control of source map generation. It is also enabled automatically by certain settings of the <a href="/configuration/devtool/"><code>devtool</code></a> configuration option.</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>EvalSourceMapDevToolPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following options are supported:</p>\n<ul>\n<li><code>test</code> (<code>string|regex|array</code>): Include source maps for modules based on their extension (defaults to <code>.js</code> and <code>.css</code>).</li>\n<li><code>include</code> (<code>string|regex|array</code>): Include source maps for module paths that match the given value.</li>\n<li><code>exclude</code> (<code>string|regex|array</code>): Exclude modules that match the given value from source map generation.</li>\n<li><code>filename</code> (<code>string</code>): Defines the output filename of the SourceMap (will be inlined if no value is provided).</li>\n<li><code>append</code> (<code>string</code>): Appends the given value to the original asset. Usually the <code>#sourceMappingURL</code> comment. <code>[url]</code> is replaced with a URL to the source map file. <code>false</code> disables the appending.</li>\n<li><code>moduleFilenameTemplate</code> (<code>string</code>): See <a href="/configuration/output/#output-devtoolmodulefilenametemplate"><code>output.devtoolModuleFilenameTemplate</code></a>.</li>\n<li><code>sourceURLTemplate</code>: Define the sourceURL default: <code>webpack-internal:///${module.identifier}</code></li>\n<li><code>module</code> (<code>boolean</code>): Indicates whether loaders should generate source maps (defaults to <code>true</code>).</li>\n<li><code>columns</code> (<code>boolean</code>): Indicates whether column mappings should be used (defaults to <code>true</code>).</li>\n<li><code>protocol</code> (<code>string</code>): Allows user to override default protocol (<code>webpack-internal://</code>)</li>\n</ul>\n<blockquote class="tip">\n<p>Setting <code>module</code> and/or <code>columns</code> to <code>false</code> will yield less accurate source maps but will also improve compilation performance significantly.</p>\n</blockquote>\n<blockquote class="tip">\n<p>If you want to use a custom configuration for this plugin in <a href="/configuration/mode/#mode-development">development mode</a>, make sure to disable the default one. I.e. set <code>devtool: false</code>.</p>\n</blockquote>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following examples demonstrate some common use cases for this plugin.</p>\n<h3 id="basic-use-case">Basic Use Case<a href="#basic-use-case" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>You can use the following code to replace the configuration option <code>devtool: eval-source-map</code> with an equivalent custom plugin configuration:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  devtool<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>EvalSourceMapDevToolPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="exclude-vendor-maps">Exclude Vendor Maps<a href="#exclude-vendor-maps" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The following code would exclude source maps for any modules in the <code>vendor.js</code> bundle:</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>EvalSourceMapDevToolPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  filename<span class="token punctuation">:</span> <span class="token string">\'[name].js.map\'</span><span class="token punctuation">,</span>\n  exclude<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'vendor.js\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="setting-sourceurl">Setting sourceURL<a href="#setting-sourceurl" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Set a URL for source maps. Useful for avoiding cross-origin issues such as:</p>\n<pre><code class="hljs language-bash">A cross-origin error was thrown. React doesn\'t have access to the actual error object <span class="token keyword">in</span> development. See https://fb.me/react-crossorigin-error <span class="token keyword">for</span> <span class="token function">more</span> information.</code></pre>\n<p>The option can be set to a function:</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>EvalSourceMapDevToolPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  sourceURLTemplate<span class="token punctuation">:</span> module <span class="token operator">=></span> <span class="token template-string"><span class="token string">`/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>identifier<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Or a substitution string:</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>EvalSourceMapDevToolPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  sourceURLTemplate<span class="token punctuation">:</span> <span class="token string">\'[all-loaders][resource]\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n'}}]);