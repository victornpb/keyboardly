import{_ as s,c as a,o as e,d as n}from"./app.625df749.js";const u=JSON.parse('{"title":"Hotkeys","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"How to use","slug":"how-to-use"},{"level":2,"title":"Add bidings to your Interface","slug":"add-bidings-to-your-interface"},{"level":2,"title":"Multiple key bidings","slug":"multiple-key-bidings"},{"level":2,"title":"Disable actions","slug":"disable-actions"},{"level":3,"title":"Disable the input","slug":"disable-the-input"},{"level":3,"title":"Remove the element","slug":"remove-the-element"},{"level":3,"title":"Remove the binding attribute","slug":"remove-the-binding-attribute"}],"relativePath":"hotkeys/index.md","lastUpdated":1677637674000}'),o={name:"hotkeys/index.md"},l=n(`<h1 id="hotkeys" tabindex="-1">Hotkeys <a class="header-anchor" href="#hotkeys" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>Hotkeys are a concept in Keyboardly, for any keyboard interaction that can be triggered inconditionally or globally on the App.</p><p>Usage examples:</p><ul><li><kbd>Space</kbd> to Play / Pause on a video player</li><li><kbd>CTRL</kbd>+<kbd>S</kbd> to Save document on a editor</li><li><kbd>CTRL</kbd>+<kbd>N</kbd> to Compose new email on a webmail</li></ul><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a></h2><p>Initialize Hotkeys on your App entrypoint</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> kbdl </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keyboardly</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keyboardly/style.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hotkeys </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> kbdl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Hotkeys</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>You only need to this once on your SPA!</p><h2 id="add-bidings-to-your-interface" tabindex="-1">Add bidings to your Interface <a class="header-anchor" href="#add-bidings-to-your-interface" aria-hidden="true">#</a></h2><p>You just need to add a <code>data-hotkey</code> attribute to any element that already has some action</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-hotkey</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ctrl-N</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">New</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-hotkey</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ctrl-S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Save</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="multiple-key-bidings" tabindex="-1">Multiple key bidings <a class="header-anchor" href="#multiple-key-bidings" aria-hidden="true">#</a></h2><p>You can add alternative bindings to any element using the <code>|</code> syntax</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-hotkey</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Space|B|Shift-X</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Jump</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="disable-actions" tabindex="-1">Disable actions <a class="header-anchor" href="#disable-actions" aria-hidden="true">#</a></h2><p>There are multiple ways of disabling an action</p><h3 id="disable-the-input" tabindex="-1">Disable the input <a class="header-anchor" href="#disable-the-input" aria-hidden="true">#</a></h3><p>If an action is disabled for mouse interactions it will automatically be also disabled for keyboard interactions</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- will not respond to mouse and keyboard --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-hotkey</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ctrl-N</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">New</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="remove-the-element" tabindex="-1">Remove the element <a class="header-anchor" href="#remove-the-element" aria-hidden="true">#</a></h3><p>Since keyboardly uses event delegation, when a button is removed from the DOM, the keyboard binding also becomes unreachable. No leaky events!</p><h3 id="remove-the-binding-attribute" tabindex="-1">Remove the binding attribute <a class="header-anchor" href="#remove-the-binding-attribute" aria-hidden="true">#</a></h3><p>You can just update or remove the <code>data-hotkey</code> attribute</p><p>Vue example:</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!isModified</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-hotkey</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ctrl-S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#A6ACCD;">Save</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> or</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">canSave</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-hotkey</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ctrl-S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#A6ACCD;">Save</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,26),t=[l];function p(r,c,i,y,d,D){return e(),a("div",null,t)}var h=s(o,[["render",p]]);export{u as __pageData,h as default};