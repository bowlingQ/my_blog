(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{171:function(_,t,v){"use strict";v.r(t);var s=v(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"_001-能不能说一说-tcp-和-udp-的区别？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_001-能不能说一说-tcp-和-udp-的区别？","aria-hidden":"true"}},[_._v("#")]),_._v(" 001. 能不能说一说 TCP 和 UDP 的区别？")]),_._v(" "),v("p",[_._v("首先概括一下基本的区别:")]),_._v(" "),v("p",[v("strong",[_._v("TCP是一个面向连接的、可靠的、基于字节流的传输层协议。")])]),_._v(" "),v("p",[_._v("而"),v("strong",[_._v("UDP是一个面向无连接的传输层协议。")]),_._v("(就这么简单，其它TCP的特性也就没有了)。")]),_._v(" "),v("p",[_._v("具体来分析，和 "),v("code",[_._v("UDP")]),_._v(" 相比，"),v("code",[_._v("TCP")]),_._v(" 有三大核心特性:")]),_._v(" "),v("ol",[v("li",[v("p",[v("strong",[_._v("面向连接")]),_._v("。所谓的连接，指的是客户端和服务器的连接，在双方互相通信之前，TCP 需要三次握手建立连接，而 UDP 没有相应建立连接的过程。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("可靠性")]),_._v("。TCP 花了非常多的功夫保证连接的可靠，这个可靠性体现在哪些方面呢？一个是有状态，另一个是可控制。")])])]),_._v(" "),v("p",[_._v("TCP 会精准记录哪些数据发送了，哪些数据被对方接收了，哪些没有被接收到，而且保证数据包按序到达，不允许半点差错。这是"),v("strong",[_._v("有状态")]),_._v("。")]),_._v(" "),v("p",[_._v("当意识到丢包了或者网络环境不佳，TCP 会根据具体情况调整自己的行为，控制自己的发送速度或者重发。这是"),v("strong",[_._v("可控制")]),_._v("。")]),_._v(" "),v("p",[_._v("相应的，UDP 就是"),v("code",[_._v("无状态")]),_._v(", "),v("code",[_._v("不可控")]),_._v("的。")]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("strong",[_._v("面向字节流")]),_._v("。UDP 的数据传输是基于数据报的，这是因为仅仅只是继承了 IP 层的特性，而 TCP 为了维护状态，将一个个 IP 包变成了字节流。")])])])}],!1,null,null,null);t.default=e.exports}}]);