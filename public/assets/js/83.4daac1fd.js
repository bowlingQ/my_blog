(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{564:function(v,a,e){"use strict";e.r(a);var _=e(4),t=Object(_.a)({},(function(){var v=this,a=v.$createElement,e=v._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("关于"),e("code",[v._v("强缓存")]),v._v("和"),e("code",[v._v("协商缓存")]),v._v("的内容，我已经在"),e("RouterLink",{attrs:{to:"/perform/001.html"}},[v._v("能不能说一说浏览器缓存")]),v._v("做了详细分析，小结如下:")],1),v._v(" "),e("p",[v._v("首先通过 "),e("code",[v._v("Cache-Control")]),v._v(" 验证强缓存是否可用")]),v._v(" "),e("ul",[e("li",[v._v("如果强缓存可用，直接使用")]),v._v(" "),e("li",[v._v("否则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的"),e("code",[v._v("If-Modified-Since")]),v._v("或者"),e("code",[v._v("If-None-Match")]),v._v("这些"),e("strong",[v._v("条件请求")]),v._v("字段检查资源是否更新\n"),e("ul",[e("li",[v._v("若资源更新，返回资源和200状态码")]),v._v(" "),e("li",[v._v("否则，返回304，告诉浏览器直接从缓存获取资源")])])])]),v._v(" "),e("p",[v._v("这一节我们主要来说说另外一种缓存方式: "),e("strong",[v._v("代理缓存")]),v._v("。")]),v._v(" "),e("h2",{attrs:{id:"为什么产生代理缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么产生代理缓存"}},[v._v("#")]),v._v(" 为什么产生代理缓存？")]),v._v(" "),e("p",[v._v("对于源服务器来说，它也是有缓存的，比如"),e("strong",[v._v("Redis, Memcache")]),v._v("，但对于 HTTP 缓存来说，如果每次客户端缓存失效都要到源服务器获取，那给源服务器的压力是很大的。")]),v._v(" "),e("p",[v._v("由此引入了"),e("strong",[v._v("缓存代理")]),v._v("的机制。让"),e("code",[v._v("代理服务器")]),v._v("接管一部分的服务端HTTP缓存，客户端缓存过期后"),e("strong",[v._v("就近")]),v._v("到代理缓存中获取，代理缓存过期了才请求源服务器，这样流量巨大的时候能明显降低源服务器的压力。")]),v._v(" "),e("p",[v._v("那缓存代理究竟是如何做到的呢？")]),v._v(" "),e("p",[v._v("总的来说，缓存代理的控制分为两部分，一部分是"),e("strong",[v._v("源服务器")]),v._v("端的控制，一部分是"),e("strong",[v._v("客户端")]),v._v("的控制。")]),v._v(" "),e("h2",{attrs:{id:"源服务器的缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源服务器的缓存控制"}},[v._v("#")]),v._v(" 源服务器的缓存控制")]),v._v(" "),e("h3",{attrs:{id:"private-和-public"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-和-public"}},[v._v("#")]),v._v(" private 和 public")]),v._v(" "),e("p",[v._v("在源服务器的响应头中，会加上"),e("code",[v._v("Cache-Control")]),v._v("这个字段进行缓存控制字段，那么它的值当中可以加入"),e("code",[v._v("private")]),v._v("或者"),e("code",[v._v("public")]),v._v("表示是否允许代理服务器缓存，前者禁止，后者为允许。")]),v._v(" "),e("p",[v._v("比如对于一些非常私密的数据，如果缓存到代理服务器，别人直接访问代理就可以拿到这些数据，是非常危险的，因此对于这些数据一般是不会允许代理服务器进行缓存的，将响应头部的"),e("code",[v._v("Cache-Control")]),v._v("设为"),e("code",[v._v("private")]),v._v("，而不是"),e("code",[v._v("public")]),v._v("。")]),v._v(" "),e("h3",{attrs:{id:"proxy-revalidate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proxy-revalidate"}},[v._v("#")]),v._v(" proxy-revalidate")]),v._v(" "),e("p",[e("code",[v._v("must-revalidate")]),v._v("的意思是"),e("strong",[v._v("客户端")]),v._v("缓存过期就去源服务器获取，而"),e("code",[v._v("proxy-revalidate")]),v._v("则表示"),e("strong",[v._v("代理服务器")]),v._v("的缓存过期后到源服务器获取。")]),v._v(" "),e("h3",{attrs:{id:"s-maxage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s-maxage"}},[v._v("#")]),v._v(" s-maxage")]),v._v(" "),e("p",[e("code",[v._v("s")]),v._v("是"),e("code",[v._v("share")]),v._v("的意思，限定了缓存在代理服务器中可以存放多久，和限制客户端缓存时间的"),e("code",[v._v("max-age")]),v._v("并不冲突。")]),v._v(" "),e("p",[v._v("讲了这几个字段，我们不妨来举个小例子，源服务器在响应头中加入这样一个字段:")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("Cache-Control: public, max-age=1000, s-maxage=2000\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("相当于源服务器说: 我这个响应是允许代理服务器缓存的，客户端缓存过期了到代理中拿，并且在客户端的缓存时间为 1000 秒，在代理服务器中的缓存时间为 2000 s。")]),v._v(" "),e("h2",{attrs:{id:"客户端的缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端的缓存控制"}},[v._v("#")]),v._v(" 客户端的缓存控制")]),v._v(" "),e("h3",{attrs:{id:"max-stale-和-min-fresh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max-stale-和-min-fresh"}},[v._v("#")]),v._v(" max-stale 和 min-fresh")]),v._v(" "),e("p",[v._v("在客户端的请求头中，可以加入这两个字段，来对代理服务器上的缓存进行"),e("strong",[v._v("宽容")]),v._v("和"),e("strong",[v._v("限制")]),v._v("操作。比如：")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("max-stale: 5\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("表示客户端到代理服务器上拿缓存的时候，即使代理缓存过期了也不要紧，只要过期时间在"),e("strong",[v._v("5秒之内")]),v._v("，还是可以从代理中获取的。")]),v._v(" "),e("p",[v._v("又比如:")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("min-fresh: 5\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("表示代理缓存需要一定的新鲜度，不要等到缓存刚好到期再拿，一定要在"),e("strong",[v._v("到期前 5 秒")]),v._v("之前的时间拿，否则拿不到。")]),v._v(" "),e("h3",{attrs:{id:"only-if-cached"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#only-if-cached"}},[v._v("#")]),v._v(" only-if-cached")]),v._v(" "),e("p",[v._v("这个字段加上后表示客户端只会接受代理缓存，而不会接受源服务器的响应。如果代理缓存无效，则直接返回"),e("code",[v._v("504（Gateway Timeout）")]),v._v("。")]),v._v(" "),e("p",[v._v("以上便是缓存代理的内容，涉及的字段比较多，希望能好好回顾一下，加深理解。")])])}),[],!1,null,null,null);a.default=t.exports}}]);