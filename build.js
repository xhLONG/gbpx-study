// build.js
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/main.js"],   // 入口文件
  bundle: true,                    // 打包依赖
  minify: true,                    // 压缩（可选）
  sourcemap: false,                // 不生成 source map（防止源码泄露）
  outfile: "dist/干部网络学院学习.js",       // 输出文件
  target: ["es2017"],              // 输出目标语法
  platform: "browser",             // 运行环境
  banner: {
    js:
`// ==UserScript==
// @name         干部学习
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  study now!
// @author       xhlong
// @updateURL
// @match        https://gbpx.gd.gov.cn/*
// @match        https://*.shawcoder.xyz/*
// @grant        unsafeWindow
// @grant        GM_openInTab
// @run-at       document-start
// ==/UserScript==`
  }
}).then(() => {
  console.log("✅ Build finished!");
}).catch(() => process.exit(1));
