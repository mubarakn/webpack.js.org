(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{433:function(n,s,a){"use strict";a.r(s),s.default='<p>This plugin will cause hashes to be based on the relative path of the module, generating a four character string as the module id. Suggested for use in production.</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HashedModuleIdsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// Options...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This plugin supports the following options:</p>\n<ul>\n<li><code>hashFunction</code>: The hashing algorithm to use, defaults to <code>\'md4\'</code>. All functions from Node.JS\' <a href="https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options"><code>crypto.createHash</code></a> are supported.</li>\n<li><code>hashDigest</code>: The encoding to use when generating the hash, defaults to <code>\'base64\'</code>. All encodings from Node.JS\' <a href="https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding"><code>hash.digest</code></a> are supported.</li>\n<li><code>hashDigestLength</code>: The prefix length of the hash digest to use, defaults to <code>4</code>. Note that some generated ids might be longer than specified here, to avoid module id collisions.</li>\n</ul>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Here\'s an example of how this plugin might be used:</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HashedModuleIdsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  hashFunction<span class="token punctuation">:</span> <span class="token string">\'sha256\'</span><span class="token punctuation">,</span>\n  hashDigest<span class="token punctuation">:</span> <span class="token string">\'hex\'</span><span class="token punctuation">,</span>\n  hashDigestLength<span class="token punctuation">:</span> <span class="token number">20</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n'}}]);