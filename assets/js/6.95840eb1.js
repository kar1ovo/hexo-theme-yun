(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{348:function(t,n,i){},384:function(t,n,i){var s=i(2),o=i(4),c=i(75),e=[].slice,a=function(t){return function(n,i){var s=arguments.length>2,o=s?e.call(arguments,2):void 0;return t(s?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,i)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(c)},{setTimeout:a(o.setTimeout),setInterval:a(o.setInterval)})},385:function(t,n,i){"use strict";i(348)},398:function(t,n,i){"use strict";i.r(n);i(384);var s={props:{icon:{type:String,default:""}},methods:{copyIcon:function(){navigator.clipboard.writeText(this.icon),console.log(toast),toast.classList.add("show"),setTimeout((function(){toast.classList.remove("show")}),3e3)}}},o=(i(385),i(27)),c=Object(o.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"icon-box",on:{click:this.copyIcon}},[n("div",{staticClass:"icon-body"},[n("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-"+this.icon}})])]),this._v(" "),n("h6",{staticClass:"icon-name"},[this._v(this._s(this.icon))])])}),[],!1,null,null,null);n.default=c.exports}}]);