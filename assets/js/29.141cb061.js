(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{418:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"第三方支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三方支持"}},[t._v("#")]),t._v(" 第三方支持")]),t._v(" "),e("p",[t._v("所有配置默认在 "),e("code",[t._v("source/_data/yun.yml")]),t._v(" 文件下进行。")]),t._v(" "),e("p",[t._v("与额外依赖库支持的区别，此处主要为使用第三方服务商提供的服务实现。")]),t._v(" "),e("h2",{attrs:{id:"评论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#评论"}},[t._v("#")]),t._v(" 评论")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("enable")]),t._v(": 默认开启（代表整体的评论区块，你开启任意类型评论系统都须保持其开启）")]),t._v(" "),e("li",[e("code",[t._v("tips")]),t._v(": 评论上方的提示，您可以使用数组的形式修改为任意的话（若不想显示，可以留空）")]),t._v(" "),e("li",[e("code",[t._v("candidates")]),t._v(": 候选评论系统，默认不启用。配置后可切换多个评论系统，默认第一位为默认显示的评论。（你须确保 "),e("code",[t._v("candidates")]),t._v(" 中的评论对应 "),e("code",[t._v("enable")]),t._v(" 已开启）")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("comment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tips")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 若您想及时得到回复提醒，建议跳转 GitHub Issues 评论。\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 若没有本文 Issue，您可以使用 Comment 模版新建。\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("candidates")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" valine\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" utterances\n")])])]),e("p",[t._v("关于评论系统我简单进行过一些对比，希望能起到一些参考。")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.yunyoujun.cn/share/third-party-comment-system/",target:"_blank",rel:"noopener noreferrer"}},[t._v("第三方评论系统之我见"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"github-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-issue"}},[t._v("#")]),t._v(" GitHub Issue")]),t._v(" "),e("p",[t._v("并内置实现跳转相关 Issue 的链接按钮与如何使用 GitHub Issue 进行评论的说明。\n可自行配置开启或关闭。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("filters")]),t._v(": 为 GitHub Issue 搜索规则，可参见 "),e("a",{attrs:{href:"https://help.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("searching-issues-and-pull-requests"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_issues")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" YunYouJun\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yunyoujun.github.io\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" is"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("issue\n")])])]),e("p",[t._v("在项目 "),e("code",[t._v("Settings -> Options -> Features -> Issues -> Set up templates")]),t._v(" 中为 GitHub Issues 设置 Comment 模版，第一个创建评论的人可以根据这个模版创建 Issue。")]),t._v(" "),e("p",[t._v("也可以参考我的 "),e("a",{attrs:{href:"https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/ISSUE_TEMPLATE/comment.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("comment.md"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"gitalk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitalk"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitalk"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Gitalk 是一个基于 GitHub Issue 的评论插件。")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("本主题不支持 Gitalk ，如果你真的想用，不妨自行添加或尝试一下 "),e("a",{attrs:{href:"https://utteranc.es/",target:"_blank",rel:"noopener noreferrer"}},[t._v("utterances"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("p",[t._v("基于以下理由，v0.9.7 将移除 Gitalk。")]),t._v(" "),e("ul",[e("li",[t._v("存在安全隐患，须授予公开项目读"),e("strong",[t._v("写")]),t._v("权限")]),t._v(" "),e("li",[t._v("CSS 无独立命名空间（甚至覆盖了主题的 markdown 样式）")]),t._v(" "),e("li",[t._v("无亮暗模式")]),t._v(" "),e("li",[t._v("部分 z-index 过高不合理，超过 sidebar")]),t._v(" "),e("li",[t._v("不支持重载以实现 pjax，"),e("a",{attrs:{href:"https://github.com/gitalk/gitalk/issues/205",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何支持 pjax"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("...")])]),t._v(" "),e("p",[t._v("最后我发现了 "),e("a",{attrs:{href:"https://utteranc.es/",target:"_blank",rel:"noopener noreferrer"}},[t._v("utterances"),e("OutboundLink")],1),t._v("，基本可以完美取代，所以决定彻底移除，今后大概也不会再加回来。")]),t._v(" "),e("h3",{attrs:{id:"utterances"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#utterances"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://utteranc.es/",target:"_blank",rel:"noopener noreferrer"}},[t._v("utterances"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("一个轻量的基于 GitHub Issue 的评论插件。请求更少的权限，使用起来更为方便。（如果你打算使用 Gitalk，不妨尝试一下 utterances。）")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("utterances")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" owner/repo\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("issue-term")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pathname\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# label: comment")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("theme")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("light\n")])])]),e("blockquote",[e("p",[t._v("记得配置成自己的仓库。")])]),t._v(" "),e("h3",{attrs:{id:"disqus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disqus"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://disqus.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disqus"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Disqus 可以说是全球最流行的第三方评论系统，但其在国内缺点也很明显，需要科学上网。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("shortname")]),t._v(": 修改为你的用户名")]),t._v(" "),e("li",[e("code",[t._v("count")]),t._v(": 是否开启评论数统计（将会显示在文章的评论数）")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disqus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shortname")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yunyoujun\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("count")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),e("h4",{attrs:{id:"disqusjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disqusjs"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/SukkaW/DisqusJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("DisqusJS"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("纯前端、超轻量级的「评论基础模式」实现：使用 Disqus API 渲染评论列表")])]),t._v(" "),e("p",[t._v("相比原生集成的 Disqus，解决的痛点就是在需要科学上网的地方，可以通过 Disqus API 渲染出一份基础的评论列表。\n让无法科学上网的用户可以直接看到评论。")]),t._v(" "),e("blockquote",[e("p",[t._v("当然，想要真正评论，你仍然需要科学上网。")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("apikey")]),t._v(": 必须，请参考 DisqusJS 文档 "),e("a",{attrs:{href:"https://github.com/SukkaW/DisqusJS#%E9%85%8D%E7%BD%AE-disqus-application",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置 Disqus Application"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("注释部分为非必须参数。")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disqusjs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shortname")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yunyoujun\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# siteName:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# identifier:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# url:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# title:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# api:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apikey:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nesting: 4")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nocomment:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# admin:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# adminLabel:")]),t._v("\n")])])]),e("h3",{attrs:{id:"valine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[t._v("#")]),t._v(" Valine")]),t._v(" "),e("p",[t._v("参见 "),e("a",{attrs:{href:"https://valine.js.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Valine"),e("OutboundLink")],1),t._v(" 官方文档进行配置。语言默认跟随 Hexo 的语言设置。")]),t._v(" "),e("p",[t._v("即 Hexo 根目录下的 "),e("code",[t._v("_config.yml")]),t._v("。（注意与主题的 "),e("code",[t._v("_config.yml")]),t._v(" 相区分）")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CN\n")])])]),e("p",[t._v("实际上，你只需要参考下方页面获取配置所需的 appId 和 appKey 即可。（不需要安装，主题默认使用 CDN。模版也已经内置。）")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速开始 - 获取 APP ID 和 APP Key"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("因为国内行情，建议直接使用 "),e("a",{attrs:{href:"https://leancloud.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanCloud 国际版"),e("OutboundLink")],1),t._v("。\n如果你打算使用国内版，你需要绑定你的自定义域名并配置下方 "),e("code",[t._v("serverURLs")]),t._v(" 字段。")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://leancloudblog.com/mandatory-domain-config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("请各位用户在 10 月 1 日前绑定自己的域名 | LeanCloud"),e("OutboundLink")],1)])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("visitor")]),t._v(": 文章阅读量统计（请最好不要与 "),e("a",{attrs:{href:"#busuanzi"}},[t._v("不蒜子")]),t._v(" 同时启用）")])]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://valine.js.org/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多配置项"),e("OutboundLink")],1),t._v(" 写在 "),e("code",[t._v("yun.yml")]),t._v(" 中。")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("appId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your leancloud application appid")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("appKey")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your leancloud application appkey")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("placeholder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Just go go "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# comment box placeholder")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("avatar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gravatar style")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" nick\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" mail\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" link\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pageSize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pagination size")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lang: zh-CN")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# visitor: false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# highlight: true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# recordIP: false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# serverURLs:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Emoji See: https://valine.js.org/emoji.html")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# emojiCDN: //i0.hdslb.com/bfs/emote/")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# emojiMaps:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   tv_doge: 6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   more...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enableQQ: false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# requiredFields:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   - nick")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   - mail")]),t._v("\n")])])]),e("p",[t._v("Valine 的扩展和增强功能可以参考 "),e("a",{attrs:{href:"https://github.com/DesertsP/Valine-Admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Valine-Admin"),e("OutboundLink")],1),t._v("，可以对具体的评论进行邮件提醒。")]),t._v(" "),e("blockquote",[e("p",[t._v("pjax: "),e("a",{attrs:{href:"https://github.com/xCss/Valine/issues/138",target:"_blank",rel:"noopener noreferrer"}},[t._v("请问如何在带有 pjax 的页面下使用 - Issue #138"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"minivaline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minivaline"}},[t._v("#")]),t._v(" MiniValine")]),t._v(" "),e("p",[t._v("简单且简约的评论系统。")]),t._v(" "),e("ul",[e("li",[t._v("GitHub: "),e("a",{attrs:{href:"https://github.com/MiniValine/MiniValine",target:"_blank",rel:"noopener noreferrer"}},[t._v("MiniValine"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Demo: "),e("a",{attrs:{href:"https://minivaline.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://minivaline.github.io/"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minivaline")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("md")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更多选项 https://minivaline.js.org/docs/cn/#/Options 按照yml格式继续填写即可 （除了 [el] 选项）")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# emoticonUrl 等列表选项 可参考 https://github.com/MiniValine/hexo-next-minivaline")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下面是一个例子：")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" waline\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serverURL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//waline.vercel.app\n")])])]),e("h3",{attrs:{id:"livere-来必力"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#livere-来必力"}},[t._v("#")]),t._v(" LiveRe 来必力")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://livere.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LiveRe 来必力"),e("OutboundLink")],1),t._v("是一家来自韩国的评论系统，支持多种 SNS 账号连接（QQ、微信、GitHub、百度、微博、豆瓣、Twitter 等等）。\n好处是"),e("strong",[t._v("不")]),t._v("需要科学上网。（不知为何，始终不温不火。）")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：我反复尝试后，发现其无法兼容 PJAX，虽然的确可以在不同文章里显示不同的评论，但不知为何，后台通知里的文章链接仍旧来自于同一篇文章。")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("uid")]),t._v(": 安装代码中 "),e("code",[t._v("data-uid")]),t._v(" 字段")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("livere")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),e("h3",{attrs:{id:"twikoo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#twikoo"}},[t._v("#")]),t._v(" Twikoo")]),t._v(" "),e("p",[t._v("一个简洁、安全、免费的静态网站评论系统，基于"),e("a",{attrs:{href:"https://curl.qcloud.com/KnnJtUom",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云开发"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("后端部署请参见"),e("a",{attrs:{href:"https://twikoo.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("。\n"),e("a",{attrs:{href:"https://twikoo.js.org/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速上手"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("twikoo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("envId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxxxxxxxxxxxxx "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 腾讯云环境id")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("region")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数")]),t._v("\n")])])]),t._v(" "),e("h2",{attrs:{id:"搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[t._v("#")]),t._v(" 搜索")]),t._v(" "),e("h3",{attrs:{id:"引擎搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引擎搜索"}},[t._v("#")]),t._v(" 引擎搜索")]),t._v(" "),e("p",[t._v("跳转搜索引擎搜索你的网站内容")]),t._v(" "),e("p",[t._v("可通过 "),e("code",[t._v("site:yunyoujun.cn 想要搜索的内容")]),t._v(" 进行搜索")]),t._v(" "),e("p",[t._v("🌰："),e("a",{attrs:{href:"https://www.google.com/search?q=site:yunyoujun.cn%20%E4%BA%91%E6%B8%B8%E5%90%9B",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.google.com/search?q=site:yunyoujun.cn 云游君"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[e("code",[t._v("enable")]),t._v(": 开启搜索引擎（因为另外两种搜索都需要额外配置，所以默认开启引擎搜索）科学上网，谷歌最佳")]),t._v(" "),e("li",[e("code",[t._v("href")]),t._v(": 搜索引擎前缀")]),t._v(" "),e("li",[e("code",[t._v("domain")]),t._v(": 你网站的域名")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("engine_search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.google.com/search?q=site:"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# href: "https://www.baidu.com/s?wd=site:"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# href: "https://www.bing.com/search?q=site:"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("domain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yunyoujun.cn\n")])])]),e("h3",{attrs:{id:"本地搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地搜索"}},[t._v("#")]),t._v(" 本地搜索")]),t._v(" "),e("p",[t._v("您需要先安装 "),e("a",{attrs:{href:"https://github.com/wzpan/hexo-generator-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-generator-search"),e("OutboundLink")],1),t._v("，并参考配置文档。")]),t._v(" "),e("p",[t._v("本主题使用原生 JavaScript 实现，无 jQuery 依赖。")]),t._v(" "),e("blockquote",[e("p",[t._v("格式只支持 XML")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("启用它之前，记得先关闭默认的引擎搜索。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("engine_search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# search")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://github.com/wzpan/hexo-generator-search")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /js/search/local"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("search.js\n")])])]),e("blockquote",[e("p",[t._v("如果你发现本地正常，部署后点击搜索按钮却会跳转至页面底部，可能单纯只是缓存问题。")])]),t._v(" "),e("h3",{attrs:{id:"algolia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#algolia"}},[t._v("#")]),t._v(" Algolia")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Algolia"),e("OutboundLink")],1),t._v(" 是一家第三方搜索服务商。（更多信息请自行查看官网，或拜托搜索引擎。）")]),t._v(" "),e("p",[t._v("您需要先安装 "),e("a",{attrs:{href:"https://github.com/oncletom/hexo-algolia",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-algolia"),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"https://github.com/LouisBarranqueiro/hexo-algoliasearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-algoliasearch"),e("OutboundLink")],1),t._v("，并根据它们的说明文档进行相应的配置。")]),t._v(" "),e("p",[t._v("再开启它。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("algolia_search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /js/search/algolia"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("search.js\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hits")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("per_page")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the number of search results per page")]),t._v("\n")])])]),e("h2",{attrs:{id:"分析统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分析统计"}},[t._v("#")]),t._v(" 分析统计")]),t._v(" "),e("h3",{attrs:{id:"谷歌分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#谷歌分析"}},[t._v("#")]),t._v(" 谷歌分析")]),t._v(" "),e("p",[t._v("前往"),e("a",{attrs:{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("谷歌分析"),e("OutboundLink")],1),t._v(" 获取您的 ID。（科学上网）")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("enable")]),t._v(": 是否开启")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google_analytics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("XXXXXXXXX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("X\n  // 注意：最近新建的谷歌分析账号ID已经修改，格式如：G"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("XXXXXXXXXX，可以直接填入id一项，功能正常。\n  // 站点配置文件`_config.yml`中的站点部署的 url 应与 CNAME 中的域名（或xxxxx.github.io）一致\n")])])]),e("h3",{attrs:{id:"busuanzi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#busuanzi"}},[t._v("#")]),t._v(" busuanzi")]),t._v(" "),e("p",[t._v("不蒜子是一款轻量极简的网站计数器。")]),t._v(" "),e("p",[t._v("前往"),e("a",{attrs:{href:"https://busuanzi.ibruce.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("不蒜子"),e("OutboundLink")],1),t._v(" 查看相关信息。")]),t._v(" "),e("p",[t._v("使用说明："),e("a",{attrs:{href:"https://ibruce.info/2015/04/04/busuanzi",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ibruce.info/2015/04/04/busuanzi"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("请最后不要与 "),e("a",{attrs:{href:"#valine"}},[t._v("Valine")]),t._v(" 的 "),e("code",[t._v("visitor")]),t._v(" 同时启用。")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("site_uv")]),t._v(": 是否显示站点用户访问量 Unique Visitor（_icon 为对应图标，以下同理）")]),t._v(" "),e("li",[e("code",[t._v("site_pv")]),t._v(": 是否显示站点页面访问量 Page View")]),t._v(" "),e("li",[e("code",[t._v("page_pv")]),t._v(": 是否显示文章页面访问量 Page View")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("busuanzi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site_uv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site_uv_icon")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("line\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site_pv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site_pv_icon")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eye"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("line\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("page_pv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("page_pv_icon")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eye"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("line\n")])])]),e("h2",{attrs:{id:"广告"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#广告"}},[t._v("#")]),t._v(" 广告")]),t._v(" "),e("h3",{attrs:{id:"谷歌广告"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#谷歌广告"}},[t._v("#")]),t._v(" 谷歌广告")]),t._v(" "),e("p",[t._v("前往"),e("a",{attrs:{href:"https://www.google.com/adsense",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Adsense"),e("OutboundLink")],1),t._v(" 获取您的 client id。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google_adsense")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ca"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pub"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2245427233262012")]),t._v("\n")])])]),e("h2",{attrs:{id:"seo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seo"}},[t._v("#")]),t._v(" SEO")]),t._v(" "),e("h3",{attrs:{id:"google-search-console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#google-search-console"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://search.google.com/search-console/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Search Console"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("本主题并没有像 next 等其他主题为验证站点添加了配置选项。")]),t._v(" "),e("p",[t._v("原因如下：")]),t._v(" "),e("p",[t._v("谷歌为用户提供了五种验证方法。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("域名提供商")]),t._v("：添加 DNS 的 TXT 解析。（这个可能算是最麻烦（其实也不麻烦），但也是对站点本身影响最小的一个。）也是我此前使用的方式。")]),t._v(" "),e("li",[e("strong",[t._v("文件验证")]),t._v("：将 HTML 文件上传至您的网站。（您只需下载并将其拷贝至 Hexo 工作目录的 "),e("code",[t._v("source")]),t._v(" 文件夹下。并设置 "),e("code",[t._v("skip_render")]),t._v("，见下文。）也是推荐的方式之一。")]),t._v(" "),e("li",[e("strong",[t._v("HTML 标记")]),t._v("：向您网站的首页添加元标记。这也是大部分主题通过配置实现站点验证的方法，但我并不推荐这种做法，所以并没有将其内置。\n"),e("ul",[e("li",[t._v("我之所以没有添加这种方式，是因为这个 meta 部分信息，只对验证 google 站点有用，对于用户来说完全是多余的。")]),t._v(" "),e("li",[t._v("而 Hexo 是静态站点生成器，通过这一方法来验证，就意味着整个站点所有静态文件头部都会带上这一信息。")]),t._v(" "),e("li",[t._v("譬如一百多篇文章加分页加标签页等等，就相当于凭空增加了上百行代码，尽管它的影响微乎其微，但这不管对用户还是站长来说都完全没有必要。")])])]),t._v(" "),e("li",[e("strong",[t._v("Google Analytics（分析）")]),t._v("：如果你已申请并使用了谷歌分析，你只需点击一个验证按钮即可。（"),e("strong",[t._v("最佳方式")]),t._v("）")]),t._v(" "),e("li",[e("strong",[t._v("Google Tag Manager")]),t._v("：使用您的 Google 跟踪代码管理器帐号")])]),t._v(" "),e("p",[t._v("如果您未使用谷歌分析，相比之下，直接使用 "),e("code",[t._v("域名提供商")]),t._v(" 或者 "),e("code",[t._v("文件验证")]),t._v(" 的方式或许更好，它不需要对主题进行侵入式修改，也不会过于增加生成后的静态文件大小。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("注意，Google 现在提供的文件为 "),e("code",[t._v("html")]),t._v(" 文件，直接放在 "),e("code",[t._v("source")]),t._v(" 文件夹下，会被 Hexo 编译。\n因此你还需要找到站点配置文件 "),e("code",[t._v("_config.yml")]),t._v(" 中的 "),e("code",[t._v("skip_render")]),t._v(" 选型，并为其添加跳过渲染的文件。")]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" README.md\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" googlexxxxxxxxxxxxxxx.html\n")])])])]),t._v(" "),e("h3",{attrs:{id:"百度搜索资源平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#百度搜索资源平台"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://ziyuan.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度搜索资源平台"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("理由如上，更推荐使用 DNS 或文件验证方式。")]),t._v(" "),e("h4",{attrs:{id:"自动推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动推送"}},[t._v("#")]),t._v(" 自动推送")]),t._v(" "),e("p",[t._v("将其设置为 "),e("code",[t._v("true")]),t._v("，以开启百度自动推送。")]),t._v(" "),e("blockquote",[e("p",[t._v("即每次页面被访问时，将自动向百度提交该页面链接。（有利于百度的 SEO）")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baidu_push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("注意：当国外用户访问时，百度推送可能无法正常工作会导致 "),e("code",[t._v("http")]),t._v(" 与 "),e("code",[t._v("https")]),t._v(" 混合，从而致使 "),e("code",[t._v("https")]),t._v(" 在浏览器中的小锁消失。")])]),t._v(" "),e("h2",{attrs:{id:"tag-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag-manager"}},[t._v("#")]),t._v(" Tag Manager")]),t._v(" "),e("h3",{attrs:{id:"google-跟踪代码管理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#google-跟踪代码管理器"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://tagmanager.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google 跟踪代码管理器"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("Google 跟踪代码管理器是一个跟踪代码管理系统 (TMS)，可以帮助您快速轻松地更新网站或移动应用上的跟踪代码及相关代码段（统称为“代码”）。将一小段跟踪代码管理器代码添加到项目后，您可以通过网页界面安全轻松地部署 Google Analytics（分析）和衡量代码配置。")])]),t._v(" "),e("p",[t._v("如果你真的需要用到它，那么自然会明白它是干什么的。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google_tagmanager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GTM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("XXXXXXX\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);