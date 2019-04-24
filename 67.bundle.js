(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{350:function(e,n,s){"use strict";s.r(n),n.default='<blockquote class="tip">\n<p>This guide extends on code examples found in the <a href="/guides/output-management">Output Management</a> guide.</p>\n</blockquote>\n<p>If you\'ve been following the guides, you should have a solid understanding of some of the webpack basics. Before we continue, let\'s look into setting up a development environment to make our lives a little easier.</p>\n<blockquote class="warning">\n<p>The tools in this guide are <strong>only meant for development</strong>, please <strong>avoid</strong> using them in production!</p>\n</blockquote>\n<p>Before proceeding lets first set <a href="/configuration/mode/#mode-development"><code>mode</code> to <code>\'development\'</code></a>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n  const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n  const CleanWebpackPlugin = require(\'clean-webpack-plugin\');\n\n  module.exports = {\n<span class="token inserted">+   mode: \'development\',</span>\n    entry: {\n      app: \'./src/index.js\',\n      print: \'./src/print.js\'\n    },\n    plugins: [\n      // new CleanWebpackPlugin([\'dist/*\']) for &#x3C; v2 versions of CleanWebpackPlugin\n      new CleanWebpackPlugin(),\n      new HtmlWebpackPlugin({\n        title: \'Development\'\n      })\n    ],\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<h2 id="using-source-maps">Using source maps<a href="#using-source-maps" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (<code>a.js</code>, <code>b.js</code>, and <code>c.js</code>) into one bundle (<code>bundle.js</code>) and one of the source files contains an error, the stack trace will simply point to <code>bundle.js</code>. This isn\'t always helpful as you probably want to know exactly which source file the error came from.</p>\n<p>In order to make it easier to track down errors and warnings, JavaScript offers <a href="http://blog.teamtreehouse.com/introduction-source-maps">source maps</a>, which maps your compiled code back to your original source code. If an error originates from <code>b.js</code>, the source map will tell you exactly that.</p>\n<p>There are a lot of <a href="/configuration/devtool">different options</a> available when it comes to source maps. Be sure to check them out so you can configure them to your needs.</p>\n<p>For this guide, let\'s use the <code>inline-source-map</code> option, which is good for illustrative purposes (though not for production):</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n  const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n  const CleanWebpackPlugin = require(\'clean-webpack-plugin\');\n\n  module.exports = {\n    mode: \'development\',\n    entry: {\n      app: \'./src/index.js\',\n      print: \'./src/print.js\'\n    },\n<span class="token inserted">+   devtool: \'inline-source-map\',</span>\n    plugins: [\n      new CleanWebpackPlugin(),\n      new HtmlWebpackPlugin({\n        title: \'Development\'\n      })\n    ],\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<p>Now let\'s make sure we have something to debug, so let\'s create an error in our <code>print.js</code> file:</p>\n<p><strong>src/print.js</strong></p>\n<pre><code class="hljs language-diff">  export default function printMe() {\n<span class="token deleted">-   console.log(\'I get called from print.js!\');</span>\n<span class="token inserted">+   cosnole.log(\'I get called from print.js!\');</span>\n  }</code></pre>\n<p>Run an <code>npm run build</code>, it should compile to something like this:</p>\n<pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n          Asset       Size  Chunks                    Chunk Names\n  app.bundle.js    1.44 MB    0, 1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  <span class="token punctuation">[</span>big<span class="token punctuation">]</span>  app\nprint.bundle.js    6.43 kB       1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>         print\n     index.html  248 bytes          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\n<span class="token punctuation">..</span>.</code></pre>\n<p>Now open the resulting <code>index.html</code> file in your browser. Click the button and look in your console where the error is displayed. The error should say something like this:</p>\n<pre><code class="hljs language-bash">Uncaught ReferenceError: cosnole is not defined\n   at HTMLButtonElement.printMe <span class="token punctuation">(</span>print.js:2<span class="token punctuation">)</span></code></pre>\n<p>We can see that the error also contains a reference to the file (<code>print.js</code>) and line number (2) where the error occurred. This is great because now we know exactly where to look in order to fix the issue.</p>\n<h2 id="choosing-a-development-tool">Choosing a Development Tool<a href="#choosing-a-development-tool" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<blockquote class="warning">\n<p>Some text editors have a "safe write" function that might interfere with some of the following tools. Read <a href="#adjusting-your-text-editor">Adjusting Your text Editor</a> for a solution to these issues.</p>\n</blockquote>\n<p>It quickly becomes a hassle to manually run <code>npm run build</code> every time you want to compile your code.</p>\n<p>There are a couple of different options available in webpack that help you automatically compile your code whenever it changes:</p>\n<ol>\n<li>webpack\'s Watch Mode</li>\n<li>webpack-dev-server</li>\n<li>webpack-dev-middleware</li>\n</ol>\n<p>In most cases, you probably would want to use <code>webpack-dev-server</code>, but let\'s explore all of the above options.</p>\n<h3 id="using-watch-mode">Using Watch Mode<a href="#using-watch-mode" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>You can instruct webpack to "watch" all files within your dependency graph for changes. If one of these files is updated, the code will be recompiled so you don\'t have to run the full build manually.</p>\n<p>Let\'s add an npm script that will start webpack\'s Watch Mode:</p>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-diff">  {\n    "name": "development",\n    "version": "1.0.0",\n    "description": "",\n    "main": "webpack.config.js",\n    "scripts": {\n      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1",\n<span class="token inserted">+     "watch": "webpack --watch",</span>\n      "build": "webpack"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n      "clean-webpack-plugin": "^2.0.0",\n      "css-loader": "^0.28.4",\n      "csv-loader": "^2.1.1",\n      "file-loader": "^0.11.2",\n      "html-webpack-plugin": "^2.29.0",\n      "style-loader": "^0.18.2",\n      "webpack": "^3.0.0",\n      "xml-loader": "^1.2.1"\n    }\n  }</code></pre>\n<p>Now run <code>npm run watch</code> from the command line and see how webpack compiles your code.\nYou can see that it doesn\'t exit the command line because the script is currently watching your files.</p>\n<p>Now, while webpack is watching your files, let\'s remove the error we introduced earlier:</p>\n<p><strong>src/print.js</strong></p>\n<pre><code class="hljs language-diff">  export default function printMe() {\n<span class="token deleted">-   cosnole.log(\'I get called from print.js!\');</span>\n<span class="token inserted">+   console.log(\'I get called from print.js!\');</span>\n  }</code></pre>\n<p>Now save your file and check the terminal window. You should see that webpack automatically recompiles the changed module!</p>\n<p>The only downside is that you have to refresh your browser in order to see the changes. It would be much nicer if that would happen automatically as well, so let\'s try <code>webpack-dev-server</code> which will do exactly that.</p>\n<h3 id="using-webpack-dev-server">Using webpack-dev-server<a href="#using-webpack-dev-server" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The <code>webpack-dev-server</code> provides you with a simple web server and the ability to use live reloading. Let\'s set it up:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-dev-server</code></pre>\n<p>Change your config file to tell the dev server where to look for files:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n  const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n  const CleanWebpackPlugin = require(\'clean-webpack-plugin\');\n\n  module.exports = {\n    mode: \'development\',\n    entry: {\n      app: \'./src/index.js\',\n      print: \'./src/print.js\'\n    },\n    devtool: \'inline-source-map\',\n<span class="token inserted">+   devServer: {</span>\n<span class="token inserted">+     contentBase: \'./dist\'</span>\n<span class="token inserted">+   },</span>\n    plugins: [\n      // new CleanWebpackPlugin([\'dist/*\']) for &#x3C; v2 versions of CleanWebpackPlugin\n      new CleanWebpackPlugin(),\n      new HtmlWebpackPlugin({\n        title: \'Development\'\n      })\n    ],\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<p>This tells <code>webpack-dev-server</code> to serve the files from the <code>dist</code> directory on <code>localhost:8080</code>.</p>\n<blockquote class="warning">\n<p>webpack-dev-server doesn\'t write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server\'s root path. If your page expects to find the bundle files in different path, you can change this with the <a href="/configuration/dev-server/#devserver-publicpath-"><code>publicPath</code></a> option in the dev server\'s configuration.</p>\n</blockquote>\n<p>Let\'s add a script to easily run the dev server as well:</p>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-diff">  {\n    "name": "development",\n    "version": "1.0.0",\n    "description": "",\n    "main": "webpack.config.js",\n    "scripts": {\n      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1",\n      "watch": "webpack --watch",\n<span class="token inserted">+     "start": "webpack-dev-server --open",</span>\n      "build": "webpack"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n      "clean-webpack-plugin": "^2.0.0",\n      "css-loader": "^0.28.4",\n      "csv-loader": "^2.1.1",\n      "file-loader": "^0.11.2",\n      "html-webpack-plugin": "^2.29.0",\n      "style-loader": "^0.18.2",\n      "webpack": "^3.0.0",\n      "xml-loader": "^1.2.1"\n    }\n  }</code></pre>\n<p>Now we can run <code>npm start</code> from the command line and we will see our browser automatically loading up our page. If you now change any of the source files and save them, the web server will automatically reload after the code has been compiled. Give it a try!</p>\n<p>The <code>webpack-dev-server</code> comes with many configurable options. Head over to the <a href="/configuration/dev-server">documentation</a> to learn more.</p>\n<blockquote class="tip">\n<p>Now that your server is working, you might want to give <a href="/guides/hot-module-replacement">Hot Module Replacement</a> a try!</p>\n</blockquote>\n<h3 id="using-webpack-dev-middleware">Using webpack-dev-middleware<a href="#using-webpack-dev-middleware" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>webpack-dev-middleware</code> is a wrapper that will emit files processed by webpack to a server. This is used in <code>webpack-dev-server</code> internally, however it\'s available as a separate package to allow more custom setups if desired. We\'ll take a look at an example that combines webpack-dev-middleware with an express server.</p>\n<p>Let\'s install <code>express</code> and <code>webpack-dev-middleware</code> so we can get started:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev express webpack-dev-middleware</code></pre>\n<p>Now we need to make some adjustments to our webpack configuration file in order to make sure the middleware will function correctly:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n  const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n  const CleanWebpackPlugin = require(\'clean-webpack-plugin\');\n\n  module.exports = {\n    mode: \'development\',\n    entry: {\n      app: \'./src/index.js\',\n      print: \'./src/print.js\'\n    },\n    devtool: \'inline-source-map\',\n    devServer: {\n      contentBase: \'./dist\'\n    },\n    plugins: [\n      new CleanWebpackPlugin(),\n      new HtmlWebpackPlugin({\n        title: \'Output Management\'\n      })\n    ],\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\'),\n<span class="token inserted">+     publicPath: \'/\'</span>\n    }\n  };</code></pre>\n<p>The <code>publicPath</code> will be used within our server script as well in order to make sure files are served correctly on <code>http://localhost:3000</code>. We\'ll specify the port number later. The next step is setting up our custom <code>express</code> server:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n  |- webpack.config.js\n<span class="token inserted">+ |- server.js</span>\n  |- /dist\n  |- /src\n    |- index.js\n    |- print.js\n  |- /node_modules</code></pre>\n<p><strong>server.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'express\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> webpackDevMiddleware <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack-dev-middleware\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./webpack.config.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Tell express to use the webpack-dev-middleware and use the webpack.config.js</span>\n<span class="token comment">// configuration file as a base.</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">webpackDevMiddleware</span><span class="token punctuation">(</span>compiler<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  publicPath<span class="token punctuation">:</span> config<span class="token punctuation">.</span>output<span class="token punctuation">.</span>publicPath\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Serve the files on port 3000.</span>\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Example app listening on port 3000!\\n\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Now add an npm script to make it a little easier to run the server:</p>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-diff">  {\n    "name": "development",\n    "version": "1.0.0",\n    "description": "",\n    "main": "webpack.config.js",\n    "scripts": {\n      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1",\n      "watch": "webpack --watch",\n      "start": "webpack-dev-server --open",\n<span class="token inserted">+     "server": "node server.js",</span>\n      "build": "webpack"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n      "clean-webpack-plugin": "^2.0.0",\n      "css-loader": "^0.28.4",\n      "csv-loader": "^2.1.1",\n      "express": "^4.15.3",\n      "file-loader": "^0.11.2",\n      "html-webpack-plugin": "^2.29.0",\n      "style-loader": "^0.18.2",\n      "webpack": "^3.0.0",\n      "webpack-dev-middleware": "^1.12.0",\n      "xml-loader": "^1.2.1"\n    }\n  }</code></pre>\n<p>Now in your terminal run <code>npm run server</code>, it should give you an output similar to this:</p>\n<pre><code class="hljs language-bash">Example app listening on port 3000<span class="token operator">!</span>\n<span class="token punctuation">..</span>.\n          Asset       Size  Chunks                    Chunk Names\n  app.bundle.js    1.44 MB    0, 1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  <span class="token punctuation">[</span>big<span class="token punctuation">]</span>  app\nprint.bundle.js    6.57 kB       1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>         print\n     index.html  306 bytes          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\n<span class="token punctuation">..</span>.\nwebpack: Compiled successfully.</code></pre>\n<p>Now fire up your browser and go to <code>http://localhost:3000</code>. You should see your webpack app running and functioning!</p>\n<blockquote class="tip">\n<p>If you would like to know more about how Hot Module Replacement works, we recommend you read the <a href="/guides/hot-module-replacement/">Hot Module Replacement</a> guide.</p>\n</blockquote>\n<h2 id="adjusting-your-text-editor">Adjusting Your Text Editor<a href="#adjusting-your-text-editor" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When using automatic compilation of your code, you could run into issues when saving your files. Some editors have a "safe write" feature that can potentially interfere with recompilation.</p>\n<p>To disable this feature in some common editors, see the list below:</p>\n<ul>\n<li><strong>Sublime Text 3</strong>: Add <code>atomic_save: \'false\'</code> to your user preferences.</li>\n<li><strong>JetBrains IDEs (e.g. WebStorm)</strong>: Uncheck "Use safe write" in <code>Preferences > Appearance &#x26; Behavior > System Settings</code>.</li>\n<li><strong>Vim</strong>: Add <code>:set backupcopy=yes</code> to your settings.</li>\n</ul>\n<h2 id="conclusion">Conclusion<a href="#conclusion" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Now that you\'ve learned how to automatically compile your code and run a simple development server, you can check out the next guide, which will cover <a href="/guides/hot-module-replacement">Hot Module Replacement</a>.</p>\n'}}]);