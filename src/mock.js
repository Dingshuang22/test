/**
 * mockjs
 * cnpm install mockjs --save-dev
 * 
 */

import Mock from "mockjs"; // 引入mockjs
const Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据
let data = []; // 用于接受生成数据的数组
for (let i = 0; i < 10; i++) {
  // 可自定义生成的个数
  let template = {
    name: Random.name(), // 生成地址,
    string: Random.string(2, 10), // 生成2到10个字符之间的字符串
    date: Random.date() // 生成一个随机日期,可加参数定义日期格式
  };
  data.push(template);
}
Mock.mock("/data/index", "get", data); // 根据数据模板生成模拟数据
