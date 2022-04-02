import{_ as n,c as s}from"./app.d5a04d03.js";const a={},p=s(`<h1 id="\u4E0B\u62C9\u65E5\u671F\u591A\u9009" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u62C9\u65E5\u671F\u591A\u9009" aria-hidden="true">#</a> \u4E0B\u62C9\u65E5\u671F\u591A\u9009</h1><h2 id="laydate" tabindex="-1"><a class="header-anchor" href="#laydate" aria-hidden="true">#</a> laydate</h2><div class="language-sass ext-sass line-numbers-mode"><pre class="language-sass"><code><span class="token comment">//css\u8C03\u6574\u90E8\u5206</span>
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo1<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 274px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">var</span> demo1 <span class="token operator">=</span> xmSelect<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#demo1&#39;</span><span class="token punctuation">,</span> 
	<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div id=&quot;laydate&quot; /&gt;&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">autoRow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token function-variable function">on</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>isAdd<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">dateSelect</span><span class="token punctuation">(</span>demo1<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

layui<span class="token punctuation">.</span>laydate<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">elem</span><span class="token operator">:</span> <span class="token string">&#39;#laydate&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">showBottom</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;yyyy-M-dd&#39;</span><span class="token punctuation">,</span>
	<span class="token function-variable function">change</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">dateSelect</span><span class="token punctuation">(</span>demo1<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">done</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
		<span class="token keyword">var</span> values <span class="token operator">=</span> demo1<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> index <span class="token operator">=</span> values<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> val <span class="token operator">===</span> value
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			values<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			values<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token function">dateSelect</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		demo1<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span> values<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span> val<span class="token punctuation">,</span>
					<span class="token literal-property property">value</span><span class="token operator">:</span> val<span class="token punctuation">,</span>
					<span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">ready</span><span class="token operator">:</span> removeAll<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;#laydate td[lay-ymd].layui-this&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dom</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		dom<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;layui-this&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">dateSelect</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	values<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#laydate td[lay-ymd=&quot;&#39;</span><span class="token operator">+</span>val<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-0([1-9])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;-$1&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		dom <span class="token operator">&amp;&amp;</span> dom<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;layui-this&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8FD9\u91CC\u4EC5\u4EC5\u63D0\u4F9B\u4E00\u4E2A\u6F14\u793A, \u66F4\u591A\u7684\u60F3\u6CD5\u7531\u4F60\u81EA\u5DF1\u6765\u521B\u9020</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,4);function t(e,o){return p}var l=n(a,[["render",t],["__file","ZP03.html.vue"]]);export{l as default};