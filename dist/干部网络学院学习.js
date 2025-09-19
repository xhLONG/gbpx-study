// ==UserScript==
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
// ==/UserScript==
(()=>{var s;unsafeWindow.alert=function(){return!1};window.alert=function(){return!1};Window.prototype.alert=function(){return!1};if(window.location.pathname=="/gdceportal/study/studyCenter.aspx"){let t="#aspnetForm > div:nth-child(13) > div.imgAndMessage";i(t,function(){document.querySelector(t).remove()});let e="#aspnetForm > div.signup_header2";i(e,function(){document.querySelector(e).remove()})}if(window.location.pathname=="/gdceportal/Study/LearningCourse.aspx"){let t=f(window);r=0,i("#lblTotal",function(){r=document.querySelector("#lblTotal").textContent,console.log(`\u68C0\u6D4B\u5230\u8BFE\u7A0B\u5217\u8868\uFF0C\u5171${r}\u9879\u8BFE\u7A0B`),u(`\u68C0\u6D4B\u5230\u8BFE\u7A0B\u5217\u8868\uFF0C\u5171${r}\u9879\u8BFE\u7A0B`,t)}),c="#gvList_ctl02_HyperLink2",i(c,function(){setTimeout(y(c),3e3)}),i("#gvList > tbody > tr:nth-child(2)",function(){let e=parseFloat(document.querySelector("#gvList > tbody > tr:nth-child(2) > td:nth-child(5) > div > div:nth-child(2)").textContent).toFixed(2)*.01,n=parseFloat(document.querySelector("#gvList > tbody > tr:nth-child(2) > td:nth-child(2)").textContent),o=document.querySelector(c).textContent,l=parseInt(n/60*45*60*60*(1-e))+1,m=600;console.log(`\u5F53\u524D\u64AD\u653E\u8BFE\u7A0B\uFF1A${o}\uFF0C\u8FDB\u5EA6\uFF1A${e*100}%\uFF0C\u5269\u4F59\uFF1A${l}s`),u(`\u5F53\u524D\u64AD\u653E\u8BFE\u7A0B\uFF1A${o}\uFF0C\u8FDB\u5EA6\uFF1A${e*100}%\uFF0C\u5269\u4F59\uFF1A${l}s`,t);let d=m,p=setInterval(function(){document.querySelector("#gvList_ctl02_HyperLink1").innerText="\u23F0 "+d+"s\u540E\u5237\u65B0",d+=-1,d<=0&&(s.close(),location.reload(!0),clearInterval(p))},1e3)})}var r,c;window.location.pathname=="/gdceportal/Study/CourseDetail.aspx"&&(a="#btnStudy",i(a,function(){document.querySelector(a).click()}));var a;window.location.host=="wcs1.shawcoder.xyz"&window.location.pathname=="/gdcecw/play_pc/playmp4_pc.html"&&(window.onload=function(){console.log("\u5F00\u59CB\u81EA\u52A8\u64AD\u653E\u89C6\u9891",new Date().toLocaleString());let t=!1,e=30,n=0;for(;!t&&n<e;){h(1e3),n=n+1,console.log(`\u7B2C${n}\u6B21\u5C1D\u8BD5\u64AD\u653E`);let o=document.querySelector("#my-video_html5_api");o&&(o.muted=!0,t=!0,o.addEventListener("pause",()=>{console.log("\u89C6\u9891\u5DF2\u7ECF\u6682\u505C\uFF0C\u89E6\u53D1\u7EE7\u7EED\u64AD\u653E"),o.ended||o.play().catch(l=>{console.log("\u89C6\u9891\u64AD\u653E\u5931\u8D25\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u64AD\u653E\uFF1A",l)})}))}i("#my-video > button",function(){setTimeout(function(){document.querySelector("#my-video_html5_api").play()},3e3)})});function y(t){let e=document.querySelector(t);document.querySelector("#gvList > tbody > tr:nth-child(2)").style.backgroundColor="yellow",document.querySelector("#gvList > tbody > tr:nth-child(2)").style.color="red";let n="https://gbpx.gd.gov.cn/gdceportal/Study/"+e.href.slice(14,67);s=GM_openInTab(n,"insert")}function h(t){return new Promise(e=>setTimeout(e,t))}function i(t,e){let n=!1;var l=setInterval(()=>{document.querySelector(t)&&(n=!0,e()),n&&clearInterval(l)},100)}function f(t){let e=t.document,n=e.createElement("div");return n.style=`
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
  `,e.body.appendChild(n),n}function u(t,e){let n=document.createElement("p");n.innerText=t,e.appendChild(n)}})();
