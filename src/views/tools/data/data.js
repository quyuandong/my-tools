/**
 * @Author: qCode
 * @Date: 2023-09-07 11:27:24
 * @LastEditTime: 2023-09-07 11:27:30
 * @LastEditors: qCode
 * @Description: 暂时未分类数据
 * @FilePath: \my-tools\src\views\tools\data\data.js
 */
const getAssetsFile = (name) => {
  return new URL(`../../../assets/icons/${name}.png`, import.meta.url).href;
};

export default [
  {
    id: "UI灵感",
    name: "UI灵感",
    collection: [
      {
        icon: "https://whirl.netlify.app/favicon.ico",
        name: "whirl加载动效",
        link: "https://whirl.netlify.app/",
      },
      {
        icon: "https://uiverse.io/favicon-32x32.png",
        name: "uiverse按钮",
        link: "https://uiverse.io/buttons",
      },
      {
        icon: "https://www.handsome-css.com/favicon/favicon.ico",
        name: "AwA-UI小组件",
        link: "https://www.handsome-css.com/buttons",
      },
      {
        icon: getAssetsFile("37"),
        name: "css动画",
        link: "http://www.bootstrapmb.com/tag/cssdonghua",
      },
      {
        icon: getAssetsFile("2"),
        name: "CSS Tricks",
        link: "https://qishaoxuan.github.io/css_tricks/",
      },
      {
        icon: "https://csscoco.com/inspiration/logo2.png",
        name: "CSS Inspiration",
        link: "https://csscoco.com/inspiration/#/",
      },
      {
        icon: "https://shiroi.netlify.app/favicon.ico",
        name: "Shiro",
        link: "https://shiroi.netlify.app/",
      },
      {
        icon: "https://cssdesignawards.com/images/favicons/favicon.ico",
        name: "CssDesignAwards",
        link: "https://cssdesignawards.com/",
      },
      {
        icon: "https://webdesignclip.com/favicon.ico",
        name: "WebDesignClip",
        link: "https://webdesignclip.com/",
      },
    ],
  },
  {
    id: "icon",
    name: "图标",
    collection: [
      {
        icon: "https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico",
        name: "iconfont",
        link: "https://www.iconfont.cn/",
      },
      {
        icon: "https://unpkg.byted-static.com/byted/arco-config/1.0.9/assets/icon-box.ico",
        name: "iconBox",
        link: "https://arco.design/iconbox/libs",
      },
      {
        icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
        name: "iconPark",
        link: "https://iconpark.oceanengine.com/official",
      },
      {
        icon: "https://iconsvg.xyz/favicon-32.png",
        name: "自定义icon",
        link: "https://iconsvg.xyz/",
      },
      {
        icon: "	https://www.fonts.net.cn/favicon.ico",
        name: "字体天下",
        link: "https://www.fonts.net.cn/",
      },
      {
        icon: "	https://www.googlefonts.cn/Public/google/zh-cn/gstatic/google_fonts_lodp.ico",
        name: "字体下载",
        link: "https://www.emojiall.com/zh-hans",
      },
      {
        icon: "	https://www.emojiall.com/favicon.ico",
        name: "emojiall",
        link: "https://www.emojiall.com/zh-hans",
      },
      {
        icon: "https://www.webfx.com/wp-content/uploads/2023/05/icon-ux.svg",
        name: "md-emoji",
        link: "https://www.webfx.com/tools/emoji-cheat-sheet/",
      },
    ],
  },
  {
    id: "chatGPT",
    name: "chatGPT",
    collection: [
      {
        icon: "https://chat.plexpt.com/favicon.svg",
        name: "智能喵",
        link: "https://chat.plexpt.com/",
      },
      {
        icon: getAssetsFile("57"),
        name: "AIer",
        link: "https://ai.aging.run/",
      },
      {
        icon: "https://chat.ktoai.com/favicon.png",
        name: "糖果梦",
        link: "https://ai.tgmeng.com/",
      },
      {
        icon: "https://cdn.aidutu.cn/res/head/ai.png",
        name: "AiDuTu",
        link: "https://chat.aidutu.cn/",
      },
      {
        icon: getAssetsFile("53"),
        name: "AI EDU",
        link: "https://ai.aigcfun.com/",
      },
      {
        icon: getAssetsFile("54"),
        name: "chatbot",
        link: "https://chatbot.theb.ai/#/chat",
      },
    ],
  },
  {
    id: "chrome",
    name: "Chrome插件",
    collection: [
      {
        icon: getAssetsFile("38"),
        name: "OneTab标签管理",
        link: "https://chrome.google.com/webstore/category/extensions?hl=zh-CN",
      },
      {
        icon: getAssetsFile("39"),
        name: "前端助手插件",
        link: "http://www.itmind.net/1470.html",
      },
      {
        icon: getAssetsFile("40"),
        name: "Postman网页版",
        link: "http://www.itmind.net/1334.html",
      },
      {
        icon: "https://cdn.kjj8.com/images/2021/11/20211638043297-unnamed-6.png",
        name: "请求mock插件",
        link: "https://www.jianshu.com/p/9278207cdc62",
      },
      {
        icon: "https://addons.mozilla.org/user-media/addon_icons/1022/1022438-64.png?modified=533cac64",
        name: "跨域代理插件",
        link: "https://www.0z.gs/webDevelopment/1736.html",
      },
      {
        icon: getAssetsFile("41"),
        name: "GitHub加速插件",
        link: "http://www.itmind.net/217.html",
      },
      {
        icon: getAssetsFile("42"),
        name: "视频下载插件",
        link: "http://www.itmind.net/3092.html",
      },
      {
        icon: getAssetsFile("43"),
        name: "Vue.js devtools",
        link: "http://www.itmind.net/6438.html",
      },
      {
        icon: getAssetsFile("51"),
        name: "广告拦截器",
        link: "https://extfans.com/productivity/bgnkhhnnamicmpeenaelnjfhikgbkllg/",
      },
      {
        icon: getAssetsFile("52"),
        name: "密码管理",
        link: "https://extfans.com/productivity/hdokiejnpimakedhajhdlcegeplioahd/",
      },
    ],
  },
  {
    id: "vscode",
    name: "vscode插件",
    collection: [
      {
        icon: "https://techer.gallerycdn.vsassets.io/extensions/techer/open-in-browser/2.0.0/1534049617896/Microsoft.VisualStudio.Services.Icons.Default",
        name: "open in browser",
        link: "https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser",
      },
      {
        icon: getAssetsFile("44"),
        name: "Git Graph",
        link: "https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph",
      },
      {
        icon: getAssetsFile("45"),
        name: "GitLens",
        link: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
      },
      {
        icon: getAssetsFile("46"),
        name: "Git History",
        link: "https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory",
      },
      {
        icon: getAssetsFile("47"),
        name: "Git Blame",
        link: "https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame",
      },
      {
        icon: "https://kisstkondoros.gallerycdn.vsassets.io/extensions/kisstkondoros/vscode-gutter-preview/0.30.0/1644076638771/Microsoft.VisualStudio.Services.Icons.Default",
        name: "图片预览",
        link: "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview",
      },
      {
        icon: "https://cipchk.gallerycdn.vsassets.io/extensions/cipchk/cssrem/3.1.0/1677827217157/Microsoft.VisualStudio.Services.Icons.Default",
        name: "px to rem/rpx/vw",
        link: "https://marketplace.visualstudio.com/items?itemName=cipchk.cssrem",
      },
      {
        icon: "https://chendm.gallerycdn.vsassets.io/extensions/chendm/translate/0.1.0/1631010008171/Microsoft.VisualStudio.Services.Icons.Default",
        name: "生成英文变量名",
        link: "https://marketplace.visualstudio.com/items?itemName=chendm.translate",
      },
      {
        icon: "https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.14/1644313109985/Microsoft.VisualStudio.Services.Icons.Default",
        name: "自动闭合标签",
        link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",
      },
      {
        icon: getAssetsFile("48"),
        name: "代码美化",
        link: "https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify",
      },
      {
        icon: getAssetsFile("49"),
        name: "代码书签",
        link: "https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks",
      },
      {
        icon: getAssetsFile("50"),
        name: "FileSize",
        link: "https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks",
      },
      {
        icon: getAssetsFile("55"),
        name: "Markdown预览",
        link: "https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts",
      },
    ],
  },
  {
    id: "更多导航",
    name: "更多导航",
    collection: [
      {
        icon: "https://mp-b28966cb-26bc-43ae-b98b-aa286fad0729.cdn.bspapp.com/cloudstorage/31e91b77-d492-4f27-9ce1-d20ad54ad8e2.ico",
        name: "万能导航",
        link: "https://www.5cv.top/",
      },
      {
        icon: "https://static.runoob.com/images/c-runoob-logo.ico",
        name: "菜鸟工具",
        link: "https://c.runoob.com/",
      },
      {
        icon: "http://www.cxy521.com/static/img/favicon.ico",
        name: "程序员导航",
        link: "http://www.cxy521.com/",
      },
      {
        icon: "https://tool.lu/favicon.ico",
        name: "在线工具",
        link: "https://tool.lu/",
      },
    ],
  },
];
