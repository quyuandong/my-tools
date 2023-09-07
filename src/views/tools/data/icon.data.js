/**
 * @Author: qCode
 * @Date: 2023-09-07 15:40:16
 * @LastEditTime: 2023-09-07 15:53:56
 * @LastEditors: qCode
 * @Description: 图标相关的集合
 * @FilePath: \my-tools\src\views\tools\data\icon.data.js
 */
const getAssetsFile = (name) => {
  return new URL(`../../../assets/icons/${name}.png`, import.meta.url).href;
};

export default {
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
      link: "https://www.googlefonts.cn/chinese",
    },
    {
      icon: "	https://www.emojiall.com/favicon.ico",
      name: "emojiall",
      link: "https://www.emojiall.com/zh-hans",
    },
    {
      icon: "https://www.webfx.com/wp-content/uploads/2023/05/icon-ux.svg",
      name: "Emoji 图标大全",
      link: "https://www.webfx.com/tools/emoji-cheat-sheet/",
    },
    {
      icon: "https://fontawesome.com.cn/favicon.ico",
      name: "Font Awesome",
      link: "https://fontawesome.com.cn/",
    },
    {
      icon: "https://lordicon.com/assets/svg/main/lordicon-mobile.svg",
      name: "动态图标",
      link: "https://lordicon.com/icons",
    },
    {
      icon: "https://simpleicons.p2hp.com/favicon.ico",
      name: "品牌SVG图标",
      link: "https://simpleicons.p2hp.com/",
    },
  ],
};
