安装脚本
在浏览器中直接访问：
https://raw.githubusercontent.com/xhLONG/gbpx-study/main/dist/main.user.js
Tampermonkey 会自动弹出安装提示。

更新逻辑
每次你在 GitHub 改了 gd-study.user.js 的内容，并把 @version 改高一点，比如 1.6。
Tampermonkey 会先请求 gd-study.meta.js，看到版本号变了 → 触发更新。
然后再从 @downloadURL 拉取新的 gd-study.user.js。
