// build.js
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/main.js"],   // 入口文件
  bundle: true,                    // 打包依赖
  minify: true,                    // 压缩（可选）
  sourcemap: false,                // 不生成 source map（防止源码泄露）
  outfile: "dist/main.js",       // 输出文件
  target: ["es2017"],              // 输出目标语法
  platform: "browser",             // 运行环境
  banner: {
    js:
`// @name        干部学习
// @namespace     http://tampermonkey.net/
// @version      1.6
// @description    study now!
// @author       xhlong
// @match        https://gbpx.gd.gov.cn/*
// @match        https://*.shawcoder.xyz/*
// @grant        unsafeWindow
// @grant        GM_openInTab
// @run-at       document-start

// 更新机制
// @updateURL    https://raw.githubusercontent.com/xhLONG/gbpx-study/main/dist/meta.js
// @downloadURL   https://raw.githubusercontent.com/xhLONG/gbpx-study/main/dist/main.js
// ==/UserScript==`
  }
}).then(() => {
  console.log("✅ Build finished!");
}).catch(() => process.exit(1));
