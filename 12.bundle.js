(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{290:function(e,a,n){"use strict";n.r(a),a.default='<p>A variety of interfaces are available to customize the compilation process.\nSome features overlap between interfaces, e.g. a configuration option may be\navailable via a CLI flag, while others exist only through a single interface.\nThe following high-level information should get you started.</p>\n<h2 id="cli">CLI<a href="#cli" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The Command Line Interface (CLI) to configure and interact with your build. It\nis especially useful in the case of early prototyping and profiling. For the\nmost part, the CLI is simply used to kick off the process using a configuration\nfile and a few flags (e.g. <code>--env</code>).</p>\n<p><a href="/api/cli">Learn more about the CLI!</a></p>\n<h2 id="module">Module<a href="#module" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When processing modules with webpack, it is important to understand the\ndifferent module syntaxes -- specifically the <a href="/api/module-methods">methods</a>\nand <a href="/api/module-variables">variables</a> -- that are supported.</p>\n<p><a href="/api/module-methods">Learn more about modules!</a></p>\n<h2 id="node">Node<a href="#node" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>While most users can get away with just using the CLI along with a\nconfiguration file, more fine-grained control of the compilation can be\nachieved via the Node interface. This includes passing multiple configurations,\nprogrammatically running or watching, and collecting stats.</p>\n<p><a href="/api/node">Learn more about the Node API!</a></p>\n<h2 id="loaders">Loaders<a href="#loaders" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Loaders are transformations that are applied to the source code of a module.\nThey are written as functions that accept source code as a parameter and return\na new version of that code with transformations applied.</p>\n<p><a href="/api/loaders">Learn more about loaders!</a></p>\n<h2 id="plugins">Plugins<a href="#plugins" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The plugin interface allows users to tap directly into the compilation process.\nPlugins can register handlers on lifecycle hooks that run at different points\nthroughout a compilation. When each hook is executed, the plugin will have full\naccess to the current state of the compilation.</p>\n<p><a href="/api/plugins">Learn more about plugins!</a></p>\n'}}]);