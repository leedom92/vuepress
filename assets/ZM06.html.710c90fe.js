import{_ as n,c as s}from"./app.d5a04d03.js";const a={},t=s(`<h1 id="\u5F39\u6846\u4E2D\u7684\u591A\u9009" tabindex="-1"><a class="header-anchor" href="#\u5F39\u6846\u4E2D\u7684\u591A\u9009" aria-hidden="true">#</a> \u5F39\u6846\u4E2D\u7684\u591A\u9009</h1><h2 id="layer\u5F39\u51FA\u6846" tabindex="-1"><a class="header-anchor" href="#layer\u5F39\u51FA\u6846" aria-hidden="true">#</a> layer\u5F39\u51FA\u6846</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo1-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5F39\u51FA\u591A\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;demo1-btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	layer<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u591A\u9009&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div id=&quot;demo1&quot; class=&quot;xm-select-demo-alert&quot;&gt;&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>
		<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">layero<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//\u8FD9\u91CC\u56E0\u4E3A\u5185\u5BB9\u8FC7\u5C11, \u4F1A\u88AB\u906E\u6321, \u6240\u4EE5\u7B80\u5355\u4FEE\u6539\u4E86\u4E0B\u6837\u5F0F</span>
			document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;layui-layer&#39;</span> <span class="token operator">+</span> index<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;layui-layer-content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">&#39;unset&#39;</span><span class="token punctuation">;</span>
			<span class="token comment">//\u6E32\u67D3\u591A\u9009</span>
			<span class="token keyword">var</span> demo1 <span class="token operator">=</span> xmSelect<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#demo1&#39;</span><span class="token punctuation">,</span> 
				<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u738B\u4E94&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,3);function p(e,o){return t}var l=n(a,[["render",p],["__file","ZM06.html.vue"]]);export{l as default};
