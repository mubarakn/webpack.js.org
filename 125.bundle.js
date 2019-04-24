(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{408:function(e,a,o){"use strict";o.r(a),a.default='<p>webpack enables use of <a href="/concepts/loaders">loaders</a> to preprocess files. This allows you to bundle any static resource way beyond JavaScript. You can easily write your own loaders using Node.js.</p>\n<p>Loaders are activated by using <code>loadername!</code> prefixes in <code>require()</code> statements, or are automatically applied via regex from your webpack configuration – see <a href="/concepts/loaders#configuration">configuration</a>.</p>\n<h2 id="files">Files<a href="#files" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/loaders/raw-loader"><code>raw-loader</code></a> Loads raw content of a file (utf-8)</li>\n<li><a href="/loaders/val-loader"><code>val-loader</code></a> Executes code as module and consider exports as JS code</li>\n<li><a href="/loaders/url-loader"><code>url-loader</code></a> Works like the file loader, but can return a <a href="https://tools.ietf.org/html/rfc2397">data URL</a> if the file is smaller than a limit</li>\n<li><a href="/loaders/file-loader"><code>file-loader</code></a> Emits the file into the output folder and returns the (relative) URL</li>\n<li><a href="https://www.npmjs.com/package/ref-loader"><code>ref-loader</code></a> Create dependencies between any files manually</li>\n</ul>\n<h2 id="json">JSON<a href="#json" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/loaders/json-loader"><code>json-loader</code></a> Loads a <a href="http://json.org/">JSON</a> file (included by default)</li>\n<li><a href="/loaders/json5-loader"><code>json5-loader</code></a> Loads and transpiles a <a href="https://json5.org/">JSON 5</a> file</li>\n<li><a href="https://github.com/awnist/cson-loader"><code>cson-loader</code></a> Loads and transpiles a <a href="https://github.com/bevry/cson#what-is-cson">CSON</a> file</li>\n</ul>\n<h2 id="transpiling">Transpiling<a href="#transpiling" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/loaders/script-loader"><code>script-loader</code></a> Executes a JavaScript file once in global context (like in script tag), requires are not parsed</li>\n<li><a href="/loaders/babel-loader"><code>babel-loader</code></a> Loads ES2015+ code and transpiles to ES5 using <a href="https://babeljs.io/">Babel</a></li>\n<li><a href="https://github.com/sairion/buble-loader"><code>buble-loader</code></a> Loads ES2015+ code and transpiles to ES5 using <a href="https://buble.surge.sh/guide/">Bublé</a></li>\n<li><a href="https://github.com/jupl/traceur-loader"><code>traceur-loader</code></a> Loads ES2015+ code and transpiles to ES5 using <a href="https://github.com/google/traceur-compiler#readme">Traceur</a></li>\n<li><a href="https://github.com/TypeStrong/ts-loader"><code>ts-loader</code></a> or <a href="https://github.com/s-panferov/awesome-typescript-loader"><code>awesome-typescript-loader</code></a> Loads <a href="https://www.typescriptlang.org/">TypeScript</a> 2.0+ like JavaScript</li>\n<li><a href="/loaders/coffee-loader"><code>coffee-loader</code></a> Loads <a href="http://coffeescript.org/">CoffeeScript</a> like JavaScript</li>\n<li><a href="https://github.com/fengari-lua/fengari-loader/"><code>fengari-loader</code></a> Loads Lua code using <a href="https://fengari.io/">fengari</a></li>\n</ul>\n<h2 id="templating">Templating<a href="#templating" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/loaders/html-loader"><code>html-loader</code></a> Exports HTML as string, require references to static resources</li>\n<li><a href="https://github.com/pugjs/pug-loader"><code>pug-loader</code></a> Loads Pug and Jade templates and returns a function</li>\n<li><a href="https://github.com/peerigon/markdown-loader"><code>markdown-loader</code></a> Compiles Markdown to HTML</li>\n<li><a href="https://github.com/javiercf/react-markdown-loader"><code>react-markdown-loader</code></a> Compiles Markdown to a React Component using the markdown-parse parser</li>\n<li><a href="https://github.com/posthtml/posthtml-loader"><code>posthtml-loader</code></a> Loads and transforms a HTML file using <a href="https://github.com/posthtml/posthtml">PostHTML</a></li>\n<li><a href="https://github.com/pcardune/handlebars-loader"><code>handlebars-loader</code></a> Compiles Handlebars to HTML</li>\n<li><a href="https://github.com/asnowwolf/markup-inline-loader"><code>markup-inline-loader</code></a> Inline SVG/MathML files to HTML. It’s useful when applying icon font or applying CSS animation to SVG.</li>\n<li><a href="https://github.com/zimmo-be/twig-loader"><code>twig-loader</code></a> Compiles Twig templates and returns a function</li>\n</ul>\n<h2 id="styling">Styling<a href="#styling" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/loaders/style-loader"><code>style-loader</code></a> Add exports of a module as style to DOM</li>\n<li><a href="/loaders/css-loader"><code>css-loader</code></a> Loads CSS file with resolved imports and returns CSS code</li>\n<li><a href="/loaders/less-loader"><code>less-loader</code></a> Loads and compiles a LESS file</li>\n<li><a href="/loaders/sass-loader"><code>sass-loader</code></a> Loads and compiles a SASS/SCSS file</li>\n<li><a href="/loaders/postcss-loader"><code>postcss-loader</code></a> Loads and transforms a CSS/SSS file using <a href="http://postcss.org">PostCSS</a></li>\n<li><a href="https://github.com/shama/stylus-loader"><code>stylus-loader</code></a> Loads and compiles a Stylus file</li>\n</ul>\n<h2 id="linting--testing">Linting &#x26;&#x26; Testing<a href="#linting--testing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="/loaders/mocha-loader"><code>mocha-loader</code></a> Tests with <a href="https://mochajs.org/">mocha</a> (Browser/NodeJS)</li>\n<li><a href="https://github.com/webpack-contrib/eslint-loader"><code>eslint-loader</code></a> PreLoader for linting code using <a href="https://eslint.org/">ESLint</a></li>\n<li><a href="/loaders/jshint-loader"><code>jshint-loader</code></a> PreLoader for linting code using <a href="http://jshint.com/about/">JSHint</a></li>\n<li><a href="https://github.com/unindented/jscs-loader"><code>jscs-loader</code></a> PreLoader for code style checking using <a href="http://jscs.info/">JSCS</a></li>\n<li><a href="/loaders/coverjs-loader"><code>coverjs-loader</code></a> PreLoader to determine the testing coverage using <a href="https://github.com/arian/CoverJS">CoverJS</a></li>\n</ul>\n<h2 id="frameworks">Frameworks<a href="#frameworks" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="https://github.com/vuejs/vue-loader"><code>vue-loader</code></a> Loads and compiles <a href="https://vuejs.org/v2/guide/components.html">Vue Components</a></li>\n<li><a href="https://github.com/webpack-contrib/polymer-webpack-loader"><code>polymer-loader</code></a> Process HTML &#x26; CSS with preprocessor of choice and <code>require()</code> Web Components like first-class modules</li>\n<li><a href="https://github.com/TheLarkInn/angular2-template-loader"><code>angular2-template-loader</code></a> Loads and compiles <a href="https://angular.io/">Angular</a> Components</li>\n</ul>\n<h2 id="awesome">Awesome<a href="#awesome" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>For more third-party loaders, see the list from <a href="https://github.com/webpack-contrib/awesome-webpack#loaders">awesome-webpack</a>.</p>\n'}}]);