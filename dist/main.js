// @name        干部学习
// @namespace     http://tampermonkey.net/
// @version      1.5
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
// ==/UserScript==
(()=>{var p;unsafeWindow.alert=function(){return!1};window.alert=function(){return!1};Window.prototype.alert=function(){return!1};if(window.location.pathname=="/gdceportal/study/studyCenter.aspx"){let o="#aspnetForm > div:nth-child(13) > div.imgAndMessage";c(o,function(){document.querySelector(o).remove()});let e="#aspnetForm > div.signup_header2";c(e,function(){document.querySelector(e).remove()})}if(window.location.pathname=="/gdceportal/Study/LearningCourse.aspx"){let o=h(window);i=0,c("#lblTotal",function(){i=document.querySelector("#lblTotal").textContent,console.log(`\u68C0\u6D4B\u5230\u8BFE\u7A0B\u5217\u8868\uFF0C\u5171${i}\u9879\u8BFE\u7A0B`),u(`\u68C0\u6D4B\u5230\u8BFE\u7A0B\u5217\u8868\uFF0C\u5171${i}\u9879\u8BFE\u7A0B`,o)}),r="#gvList_ctl02_HyperLink2",c(r,function(){setTimeout(y(r),3e3)}),c("#gvList > tbody > tr:nth-child(2)",function(){let e=parseFloat(document.querySelector("#gvList > tbody > tr:nth-child(2) > td:nth-child(5) > div > div:nth-child(2)").textContent).toFixed(2)*.01,t=parseFloat(document.querySelector("#gvList > tbody > tr:nth-child(2) > td:nth-child(2)").textContent),n=document.querySelector(r).textContent,l=parseInt(t/60*45*60*60*(1-e))+1,d=600;console.log(`\u5F53\u524D\u64AD\u653E\u8BFE\u7A0B\uFF1A${n}\uFF0C\u8FDB\u5EA6\uFF1A${e*100}%\uFF0C\u5269\u4F59\uFF1A${l}s`),u(`\u5F53\u524D\u64AD\u653E\u8BFE\u7A0B\uFF1A${n}\uFF0C\u8FDB\u5EA6\uFF1A${e*100}%\uFF0C\u5269\u4F59\uFF1A${l}s`,o);let a=d,m=setInterval(function(){document.querySelector("#gvList_ctl02_HyperLink1").innerText="\u23F0 "+a+"s\u540E\u5237\u65B0",a+=-1,a<=0&&(p.close(),location.reload(!0),clearInterval(m))},1e3)})}var i,r;window.location.pathname=="/gdceportal/Study/CourseDetail.aspx"&&(s="#btnStudy",c(s,function(){document.querySelector(s).click()}));var s;window.location.host=="wcs1.shawcoder.xyz"&window.location.pathname=="/gdcecw/play_pc/playmp4_pc.html"&&(window.onload=function(){console.log("\u5F00\u59CB\u81EA\u52A8\u64AD\u653E\u89C6\u9891");let o=!1,e=30,t=0;c("#my-video_html5_api",function(){let n=document.querySelector("#my-video_html5_api");for(n.muted=!0;t<e;){g(1e3),++t,console.log(`\u7B2C${t}\u6B21\u5C1D\u8BD5\u64AD\u653E`);let l=document.querySelector("#my-video > button");if(l?(console.log("\u70B9\u51FB\u6309\u94AE\u64AD\u653E ",new Date().toLocaleString()),l.click()):(console.log("\u8C03\u7528play()\u64AD\u653E ",new Date().toLocaleString()),n.play().catch(d=>{console.log("\u89C6\u9891\u64AD\u653E\u5931\u8D25\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u64AD\u653E\uFF1A",d)})),!n.paused){console.log("\u89C6\u9891\u64AD\u653E\u6210\u529F ",new Date().toLocaleString());break}}n.addEventListener("pause",()=>{console.log("\u89C6\u9891\u5DF2\u7ECF\u6682\u505C\uFF0C\u89E6\u53D1\u7EE7\u7EED\u64AD\u653E"),n.ended||n.play().catch(l=>{console.log("\u89C6\u9891\u64AD\u653E\u5931\u8D25\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u64AD\u653E\uFF1A",l)})})})});function y(o){let e=document.querySelector(o);document.querySelector("#gvList > tbody > tr:nth-child(2)").style.backgroundColor="yellow",document.querySelector("#gvList > tbody > tr:nth-child(2)").style.color="red";let t="https://gbpx.gd.gov.cn/gdceportal/Study/"+e.href.slice(14,67);p=GM_openInTab(t,"insert")}function g(o){return new Promise(e=>setTimeout(e,o))}function c(o,e){let t=!1;var l=setInterval(()=>{document.querySelector(o)&&(t=!0,e()),t&&clearInterval(l)},100)}function h(o){let e=o.document,t=e.createElement("div");return t.style=`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    padding: 10px;
    border: 1px solid;
    width: 300px;
    color: rgb(245, 245, 67);
    background: rgba(0, 0, 0, 0.3);
  `,e.body.appendChild(t),t}function u(o,e){let t=document.createElement("p");t.innerText=o,e.appendChild(t)}})();
