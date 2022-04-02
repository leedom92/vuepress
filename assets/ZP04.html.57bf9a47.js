import{_ as n,c as s}from"./app.d5a04d03.js";const a={},p=s(`<h1 id="\u4E0B\u62C9\u6298\u53E0\u9762\u677F" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u62C9\u6298\u53E0\u9762\u677F" aria-hidden="true">#</a> \u4E0B\u62C9\u6298\u53E0\u9762\u677F</h1><h2 id="layui\u6298\u53E0\u9762\u677F" tabindex="-1"><a class="header-anchor" href="#layui\u6298\u53E0\u9762\u677F" aria-hidden="true">#</a> layui\u6298\u53E0\u9762\u677F</h2><div class="language-sass ext-sass line-numbers-mode"><pre class="language-sass"><code><span class="token comment">//css\u8C03\u6574\u90E8\u5206</span>
<span class="token selector">xm-select .scroll-body{</span>
<span class="token property-line">	<span class="token property">margin-top</span><span class="token punctuation">:</span> -5px;</span>
<span class="token selector">}</span>
<span class="token selector">xm-select .xm-body{</span>
<span class="token property-line">	<span class="token property">padding</span><span class="token punctuation">:</span> 0;</span>
<span class="token property-line">	<span class="token property">border</span><span class="token punctuation">:</span> none;</span>
<span class="token property-line">	<span class="token property">background-color</span><span class="token punctuation">:</span> usnet;</span>
<span class="token property-line">	<span class="token property">box-shadow</span><span class="token punctuation">:</span> none;</span>
<span class="token selector">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo1<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u675C\u752B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u675C\u752B\u7684\u601D\u60F3\u6838\u5FC3\u662F\u5112\u5BB6\u7684\u4EC1\u653F\u601D\u60F3\uFF0C\u4ED6\u6709\u201C\u81F4\u541B\u5C27\u821C\u4E0A\uFF0C\u518D\u4F7F\u98CE\u4FD7\u6DF3\u201D\u7684\u5B8F\u4F1F\u62B1\u8D1F\u3002\u675C\u752B\u867D\u7136\u5728\u4E16\u65F6\u540D\u58F0\u5E76\u4E0D\u663E\u8D6B\uFF0C\u4F46\u540E\u6765\u58F0\u540D\u8FDC\u64AD\uFF0C\u5BF9\u4E2D\u56FD\u6587\u5B66\u548C\u65E5\u672C\u6587\u5B66\u90FD\u4EA7\u751F\u4E86\u6DF1\u8FDC\u7684\u5F71\u54CD\u3002\u675C\u752B\u5171\u6709\u7EA61500\u9996\u8BD7\u6B4C\u88AB\u4FDD\u7559\u4E86\u4E0B\u6765\uFF0C\u5927\u591A\u96C6\u4E8E\u300A\u675C\u5DE5\u90E8\u96C6\u300B\u3002&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u674E\u6E05\u7167&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u674E\u6E05\u7167\u51FA\u751F\u4E8E\u4E66\u9999\u95E8\u7B2C\uFF0C\u65E9\u671F\u751F\u6D3B\u4F18\u88D5\uFF0C\u5176\u7236\u674E\u683C\u975E\u85CF\u4E66\u751A\u5BCC\uFF0C\u5979\u5C0F\u65F6\u5019\u5C31\u5728\u826F\u597D\u7684\u5BB6\u5EAD\u73AF\u5883\u4E2D\u6253\u4E0B\u6587\u5B66\u57FA\u7840\u3002\u51FA\u5AC1\u540E\u4E0E\u592B\u8D75\u660E\u8BDA\u5171\u540C\u81F4\u529B\u4E8E\u4E66\u753B\u91D1\u77F3\u7684\u641C\u96C6\u6574\u7406\u3002\u91D1\u5175\u5165\u636E\u4E2D\u539F\u65F6\uFF0C\u6D41\u5BD3\u5357\u65B9\uFF0C\u5883\u9047\u5B64\u82E6\u3002\u6240\u4F5C\u8BCD\uFF0C\u524D\u671F\u591A\u5199\u5176\u60A0\u95F2\u751F\u6D3B\uFF0C\u540E\u671F\u591A\u60B2\u53F9\u8EAB\u4E16\uFF0C\u60C5\u8C03\u611F\u4F24\u3002\u5F62\u5F0F\u4E0A\u5584\u7528\u767D\u63CF\u624B\u6CD5\uFF0C\u81EA\u8F9F\u9014\u5F84\uFF0C\u8BED\u8A00\u6E05\u4E3D\u3002&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9C81\u8FC5&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u9C81\u8FC5\u4E00\u751F\u5728\u6587\u5B66\u521B\u4F5C\u3001\u6587\u5B66\u6279\u8BC4\u3001\u601D\u60F3\u7814\u7A76\u3001\u6587\u5B66\u53F2\u7814\u7A76\u3001\u7FFB\u8BD1\u3001\u7F8E\u672F\u7406\u8BBA\u5F15\u8FDB\u3001\u57FA\u7840\u79D1\u5B66\u4ECB\u7ECD\u548C\u53E4\u7C4D\u6821\u52D8\u4E0E\u7814\u7A76\u7B49\u591A\u4E2A\u9886\u57DF\u5177\u6709\u91CD\u5927\u8D21\u732E\u3002\u4ED6\u5BF9\u4E8E\u4E94\u56DB\u8FD0\u52A8\u4EE5\u540E\u7684\u4E2D\u56FD\u793E\u4F1A\u601D\u60F3\u6587\u5316\u53D1\u5C55\u5177\u6709\u91CD\u5927\u5F71\u54CD\uFF0C\u871A\u58F0\u4E16\u754C\u6587\u575B\uFF0C\u5C24\u5176\u5728\u97E9\u56FD\u3001\u65E5\u672C\u601D\u60F3\u6587\u5316\u9886\u57DF\u6709\u6781\u5176\u91CD\u8981\u7684\u5730\u4F4D\u548C\u5F71\u54CD\uFF0C\u88AB\u8A89\u4E3A\u201C\u4E8C\u5341\u4E16\u7EAA\u4E1C\u4E9A\u6587\u5316\u5730\u56FE\u4E0A\u5360\u6700\u5927\u9886\u571F\u7684\u4F5C\u5BB6\u201D\u3002&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">var</span> html <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		&lt;div class=&quot;layui-colla-item&quot;&gt;
			&lt;h2 class=&quot;layui-colla-title&quot; value=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> item<span class="token punctuation">.</span>name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h2&gt;
			&lt;div class=&quot;layui-colla-content </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> item<span class="token punctuation">.</span>selected <span class="token operator">&amp;&amp;</span> <span class="token string">&#39;layui-show&#39;</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> item<span class="token punctuation">.</span>content <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;
		&lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> demo1 <span class="token operator">=</span> xmSelect<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#demo1&#39;</span><span class="token punctuation">,</span> 
	<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		&lt;div class=&quot;layui-collapse&quot; lay-filter=&quot;collapse&quot;&gt;
			</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> html <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
		&lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">autoRow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> list<span class="token punctuation">,</span>
	<span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">on</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>isAdd<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">var</span> item <span class="token operator">=</span> data<span class="token punctuation">.</span>change<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#demo1 .layui-collapse .layui-colla-title[value=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>nextElementSibling<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;layui-show&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

layui<span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

layui<span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;collapse(collapse)&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">let</span> value <span class="token operator">=</span> data<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>show<span class="token punctuation">)</span><span class="token punctuation">{</span>
		demo1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">[</span> value <span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		demo1<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">[</span> value <span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u8FD9\u91CC\u4EC5\u4EC5\u63D0\u4F9B\u4E00\u4E2A\u6F14\u793A, \u66F4\u591A\u7684\u60F3\u6CD5\u7531\u4F60\u81EA\u5DF1\u6765\u521B\u9020</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>`,4);function t(e,o){return p}var c=n(a,[["render",t],["__file","ZP04.html.vue"]]);export{c as default};