import{_ as p,r as i,o as d,a as r,b as n,w as a,F as l,c,d as s,e as o}from"./app.d5a04d03.js";const u={},h=c(`<h1 id="\u8D26\u53F7\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u8D26\u53F7\u5207\u6362" aria-hidden="true">#</a> \u8D26\u53F7\u5207\u6362</h1><p><strong>\u5206\u522B\u4ECB\u7ECD\u5728macOS\u548CWindows\u7684\u5B9E\u73B0\u65B9\u6CD5</strong></p><blockquote><p>\u5047\u8BBE\u6709\u4E24\u4E2AGithub\u8D26\u53F7\uFF0C\u5DF2\u7ECF\u6DFB\u52A0\u597Dssh key\u516C\u94A5\u81F3\u5BF9\u5E94\u8D26\u53F7<br> \u{1F468}\u200D\u2695\uFE0F \u4E2A\u4EBA\uFF1A <code>mine.pub</code><br> \u{1F3E2} \u516C\u53F8\uFF1A <code>company.pub</code></p></blockquote><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h2><h3 id="\u4E2A\u4EBA\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u4E2A\u4EBA\u8D26\u53F7" aria-hidden="true">#</a> \u4E2A\u4EBA\u8D26\u53F7</h3><p>\u521B\u5EFAsh\u547D\u4EE4\u6587\u4EF6 <code>github_mine.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> -Rf ~/.ssh/mine ~/.ssh/id_ed25519
<span class="token function">cp</span> -Rf ~/.ssh/mine.pub ~/.ssh/id_ed25519.pub
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="\u516C\u53F8\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u516C\u53F8\u8D26\u53F7" aria-hidden="true">#</a> \u516C\u53F8\u8D26\u53F7</h3><p>\u521B\u5EFAsh\u547D\u4EE4\u6587\u4EF6 <code>github_company.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> -Rf ~/.ssh/company ~/.ssh/id_ed25519
<span class="token function">cp</span> -Rf ~/.ssh/company.pub ~/.ssh/id_ed25519.pub
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="\u5207\u6362\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u64CD\u4F5C" aria-hidden="true">#</a> \u5207\u6362\u64CD\u4F5C</h3><p>\u6839\u636E\u9700\u8981\u4F7F\u7528\u7684\u8D26\u53F7\uFF0C\u5728 <code>~</code> \u6216 <code>.ssh</code> \u76EE\u5F55\u4E0B\uFF0C\u6267\u884C\u4E0A\u8FF0\u521B\u5EFA\u597D\u7684\u547D\u4EE4</p>`,14),b=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sh"),o(` github_mine.sh
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),m=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sh"),o(` github_company.sh
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),g=c(`<p>\u67E5\u770B <code>id_ed25519.pub</code> \u516C\u94A5\u662F\u5426\u662F\u5BF9\u5E94\u521A\u6267\u884C\u7684sh\u547D\u4EE4\u6240\u5C5E\u516C\u94A5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_ed25519.pub
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9A8C\u8BC1\u8D26\u53F7\u662F\u5426\u5207\u6362\u6210\u529F\uFF0C\u5728\u7EC8\u7AEF\uFF08Terminal\uFF09\u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com
<span class="token comment"># Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u82E5\u663E\u793A <code>Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</code> \uFF0C\u4E14 <code>ur_name</code> \u4E3A\u6267\u884C\u547D\u4EE4\u5BF9\u5E94\u7684\u8D26\u53F7\u7528\u6237\u540D\uFF0C\u5219\u8868\u793A\u5207\u6362\u6210\u529F\uFF0C\u60A8\u53EF\u4EE5\u5BF9\u8BE5\u8D26\u53F7\u4ED3\u5E93\u8FDB\u884C\u64CD\u4F5C\u4E86\u{1F38A}\u3002</p><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h2><h3 id="\u4E2A\u4EBA\u8D26\u53F7-1" tabindex="-1"><a class="header-anchor" href="#\u4E2A\u4EBA\u8D26\u53F7-1" aria-hidden="true">#</a> \u4E2A\u4EBA\u8D26\u53F7</h3><p>\u521B\u5EFAbat\u6279\u5904\u7406\u6587\u4EF6 <code>github_mine.bat</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>copy C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>mine C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>id_ed25519 /Y
copy C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>mine.pub C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>id_ed25519.pub /Y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="\u516C\u53F8\u8D26\u53F7-1" tabindex="-1"><a class="header-anchor" href="#\u516C\u53F8\u8D26\u53F7-1" aria-hidden="true">#</a> \u516C\u53F8\u8D26\u53F7</h3><p>\u521B\u5EFAbat\u6279\u5904\u7406\u6587\u4EF6 <code>github_company.bat</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>copy C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>company C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>id_ed25519 /Y
copy C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>company.pub C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>id_ed25519.pub /Y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h3><p>\u6DFB\u52A0 <code>C:\\Users\\Administrator\\.ssh</code> \u81F3\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CFPath</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4E0D\u8981\u5FD8\u8BB0\u70B9\u51FB\u4FDD\u5B58\uFF01</p></div><p><strong>\u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7bat\u6587\u4EF6\u5207\u6362\u516C\u94A5</strong></p><hr><h3 id="\u5207\u6362\u64CD\u4F5C-1" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u64CD\u4F5C-1" aria-hidden="true">#</a> \u5207\u6362\u64CD\u4F5C</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>Win + R</code>\uFF0C\u8F93\u5165<code>cmd</code>\u6253\u5F00\u547D\u4EE4\u63D0\u793A\u7B26</p></div><p>\u6839\u636E\u9700\u8981\u4F7F\u7528\u7684\u8D26\u53F7\uFF0C\u6267\u884C\u4E0A\u8FF0\u521B\u5EFA\u597D\u7684\u811A\u672C</p>`,22),_=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,`github_mine
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),v=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,`github_company
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),k=c(`<p>\u67E5\u770B <code>id_ed25519.pub</code> \u516C\u94A5\u662F\u5426\u662F\u5BF9\u5E94\u521A\u6267\u884C\u7684sh\u547D\u4EE4\u6240\u5C5E\u516C\u94A5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_ed25519.pub
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9A8C\u8BC1\u8D26\u53F7\u662F\u5426\u5207\u6362\u6210\u529F\uFF0C\u5728\u7EC8\u7AEF\uFF08Terminal\uFF09\u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com
<span class="token comment"># Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u82E5\u663E\u793A <code>Hi ur_name! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</code> \uFF0C\u4E14 <code>ur_name</code> \u4E3A\u6267\u884C\u547D\u4EE4\u5BF9\u5E94\u7684\u8D26\u53F7\u7528\u6237\u540D\uFF0C\u5219\u8868\u793A\u5207\u6362\u6210\u529F\uFF0C\u60A8\u53EF\u4EE5\u5BF9\u8BE5\u8D26\u53F7\u4ED3\u5E93\u8FDB\u884C\u64CD\u4F5C\u4E86\u{1F38A}\u3002</p><hr><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u9047\u5230\u4EE5\u4E0B <code>\u65E0\u6743\u9650</code>\u7684\u95EE\u9898\uFF0C\u53EF\u901A\u8FC7ssh-add\u547D\u4EE4\u5C06\u4E13\u7528\u5BC6\u94A5\u6DFB\u52A0\u5230ssh-agent\u7684\u9AD8\u901F\u7F13\u5B58\u4E2D\u6765\u89E3\u51B3</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># fatal: Could not read from remote repository.</span>

<span class="token comment"># Please make sure you have the correct access rights</span>
<span class="token comment"># and the repository exists.</span>

ssh-add ~/.ssh/id_ed25519
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,8);function f(x,y){const e=i("CodeGroupItem"),t=i("CodeGroup");return d(),r(l,null,[h,n(t,null,{default:a(()=>[n(e,{title:"\u4E2A\u4EBA"},{default:a(()=>[b]),_:1}),n(e,{title:"\u516C\u53F8"},{default:a(()=>[m]),_:1})]),_:1}),g,n(t,null,{default:a(()=>[n(e,{title:"\u4E2A\u4EBA"},{default:a(()=>[_]),_:1}),n(e,{title:"\u516C\u53F8"},{default:a(()=>[v]),_:1})]),_:1}),k],64)}var w=p(u,[["render",f],["__file","change.html.vue"]]);export{w as default};