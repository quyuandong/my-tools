/*
 * 数据源总入口
 */

// 常用工具
import toolsData from "./data/tools.data";
// 图片处理
import imgData from "./data/img.data";
// css处理
import cssData from "./data/css.data";
// 图表相关的
import iconData from "./data/icon.data";

// 未分类的数据
import data from "./data/data";

/* 数据源入口 */
export default [toolsData, imgData, cssData,iconData, ...data];
