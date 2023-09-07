/**
 * @Author: qCode
 * @Date: 2023-09-07 11:20:59
 * @LastEditTime: 2023-09-07 11:21:35
 * @LastEditors: qCode
 * @Description: 图片处理
 * @FilePath: \my-tools\src\views\tools\data\img.data.js
 */

const getAssetsFile = (name) => {
  return new URL(`../../../assets/icons/${name}.png`, import.meta.url).href;
};

export default {
  id: 'img',
  name: '图片处理',
  collection: [
    {
      icon: 'https://tinypng.com/images/favicon.ico',
      name: '图片压缩',
      link: 'https://tinypng.com/'
    },
    {
      icon: 'https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png',
      name: '生成精灵图',
      link: 'https://www.toptal.com/developers/css/sprite-generator'
    },
    {
      icon: getAssetsFile('20'),
      name: '视频转GIF',
      link: 'https://www.tutieshi.com/'
    },
    {
      icon: getAssetsFile('21'),
      name: '在线SVG制作',
      link: 'https://51tools.info/svg/'
    },
    {
      icon: 'https://c.runoob.com/more/svgeditor/images/favicon.svg',
      name: 'SVG编辑器',
      link: 'https://c.runoob.com/more/svgeditor/'
    },
    {
      icon: getAssetsFile('1'),
      name: '趣作图',
      link: 'https://www.pickwant.com/home'
    },
    {
      icon: 'https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png',
      name: '图片背景消除',
      link: 'https://www.remove.bg/zh'
    },
    {
      icon: getAssetsFile('22'),
      name: '图片在线编辑',
      link: 'https://www.iloveimg.com/zh-cn'
    },
    {
      icon: getAssetsFile('23'),
      name: '在线PS',
      link: 'https://www.uupoop.com/#/'
    },
    {
      icon: getAssetsFile('24'),
      name: '图片加水印',
      link: 'https://www.onlinedo.cn/img-shuiyin'
    },
    {
      icon: getAssetsFile('25'),
      name: '图片去水印',
      link: 'https://www.apowersoft.cn/image-watermark-remover'
    },
    {
      icon: getAssetsFile('26'),
      name: '图片合并切割',
      link: 'http://www.zuohaotu.com/'
    },
    {
      icon: getAssetsFile('27'),
      name: '生成透明Icon',
      link: 'http://www.ico51.cn/'
    },
    {
      icon: getAssetsFile('28'),
      name: 'logo设计',
      link: 'https://www.designevo.com/cn/logo-maker/'
    },
    {
      icon: getAssetsFile('29'),
      name: '搞怪图片生成',
      link: 'https://c.tianhezulin.com/'
    },
    {
      icon: getAssetsFile('30'),
      name: '表情包',
      link: 'https://www.fabiaoqing.com/'
    },
    {
      icon: getAssetsFile('31'),
      name: '表情包制作器',
      link: 'https://www.wakatool.com/maker'
    },
    {
      icon: getAssetsFile('32'),
      name: '朋克图片生成器',
      link: 'https://photomosh.com/'
    },
    {
      icon: getAssetsFile('33'),
      name: 'Pexels图片素材',
      link: 'https://www.pexels.com/zh-cn/'
    },
    {
      icon: getAssetsFile('34'),
      name: 'Pixabay图片素材',
      link: 'https://pixabay.com/'
    },
    {
      icon: getAssetsFile('35'),
      name: 'Pxhere图片素材',
      link: 'https://pxhere.com/'
    },
    {
      icon: "https://www.3gbizhi.com/assets/mobile/images/favicon.ico",
      name: "3G壁纸",
      link: "https://www.3gbizhi.com/"
    },
    {
      icon: 'https://huatu.98youxi.com/favicon.ico',
      name: '流程图/思维导图',
      link: 'https://huatu.98youxi.com/home/myfile/'
    },
  ]
}