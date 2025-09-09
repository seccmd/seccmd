import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/pydeep/",

  lang: "zh-CN",
  title: "土豆哥 Python 进阶之路",
  description: "这是一份通俗易懂、轻松愉快的Python学习指南，内容涵盖Python基础、Python并发编程、Python企业级开发、Python面试等核心知识点。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
