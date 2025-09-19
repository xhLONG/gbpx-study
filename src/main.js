// ==UserScript==
// @name        干部学习
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
// ==/UserScript==

// 30分钟
const AUTO_REFRESH_TIME = 10*60;
var new_window;

'use strict';

//取消alert弹窗 1
//测试无效。学习页面的alert弹窗为页面自带，无法通过脚本跳过
unsafeWindow.alert = function(){return false};
window.alert = function () { return false };
Window.prototype.alert = function () { return false };


//列表页一级页面
if (window.location.pathname == '/gdceportal/study/studyCenter.aspx') {

  let selector_imgAndMessage = "#aspnetForm > div:nth-child(13) > div.imgAndMessage"
  wait_element(selector_imgAndMessage, function () {
    document.querySelector(selector_imgAndMessage).remove()
  })

  let selector_header = "#aspnetForm > div.signup_header2"
  wait_element(selector_header, function () {
    document.querySelector(selector_header).remove()
  })

}

//课程列表页面
if (window.location.pathname == '/gdceportal/Study/LearningCourse.aspx') {
  const $panel = addLogPanel(window)

  var lblTotal = 0
  wait_element("#lblTotal", function () {
    lblTotal = document.querySelector('#lblTotal').textContent
    console.log(`检测到课程列表，共${lblTotal}项课程`)
    logToPanel(`检测到课程列表，共${lblTotal}项课程`, $panel)
  })

  var selector_course = '#gvList_ctl02_HyperLink2'      //第一个课程的标题
  wait_element(selector_course, function () {
    setTimeout(do_study(selector_course), 3000)
  })


  //处理主页面等待刷新时间
  wait_element("#gvList > tbody > tr:nth-child(2)", function () {
    let course_percent = parseFloat(document.querySelector("#gvList > tbody > tr:nth-child(2) > td:nth-child(5) > div > div:nth-child(2)").textContent).toFixed(2) * 0.01
    let study_time_hour = parseFloat(document.querySelector("#gvList > tbody > tr:nth-child(2) > td:nth-child(2)").textContent)
    let selector_course_txt = document.querySelector(selector_course).textContent

    //一个学时对应大概42-45min
    let study_time_second = parseInt(study_time_hour / 60 * 45 * 60 * 60 * (1 - course_percent)) + 1
    let refresh_time_second = AUTO_REFRESH_TIME

    console.log(`当前播放课程：${selector_course_txt}，进度：${course_percent * 100}%，剩余：${study_time_second}s`)
    logToPanel(`当前播放课程：${selector_course_txt}，进度：${course_percent * 100}%，剩余：${study_time_second}s`, $panel)


    //页面显示刷新倒计时
    let last_time = refresh_time_second
    const refresh_timer = setInterval(function () {
      document.querySelector("#gvList_ctl02_HyperLink1").innerText = '⏰ ' + last_time + 's' + "后刷新";
      last_time += -1;
      if (last_time <= 0) {
        new_window.close();
        location.reload(true);
        clearInterval(refresh_timer)
      }
    }, 1000);
  })

}

//打开后课程页面
if (window.location.pathname == '/gdceportal/Study/CourseDetail.aspx') {
  //console.log('准备播放视频...')
  var selector_start_button = '#btnStudy'
  wait_element(selector_start_button, function () {
    document.querySelector(selector_start_button).click()
  })
}


//视频播放页面
if (window.location.host == 'wcs1.shawcoder.xyz' & window.location.pathname == '/gdcecw/play_pc/playmp4_pc.html') {
  window.onload = function () {
    console.log('开始自动播放视频')
    let is_muted = false;
    const k = 30;
    let j = 0;

    wait_element("#my-video_html5_api", function () {
      let $video = document.querySelector('#my-video_html5_api');
      $video.muted = true;

      while (j < k) {
        sleep(1000)
        ++j
        console.log(`第${j}次尝试播放`)
        let $pauseBtn = document.querySelector('#my-video > button')
        if ($pauseBtn) {
          console.log('点击按钮播放 ', new Date().toLocaleString())
          $pauseBtn.click()
        } else {
          console.log('调用play()播放 ', new Date().toLocaleString())
          $video.play().catch(err => {
            console.log("视频播放失败，无法继续播放：", err);
          });
        }
        if (!$video.paused) {
          console.log('视频播放成功 ', new Date().toLocaleString())
          break
        }
      }

      $video.addEventListener("pause", () => {
        // 判断视频未播放结束，才继续播放
        console.log("视频已经暂停，触发继续播放");
        if (!$video.ended) {
          $video.play().catch(err => {
            console.log("视频播放失败，无法继续播放：", err);
          });
        }
      });
    });
  }
}

function do_study(selector) {

  let course_link = document.querySelector(selector)
  //第一个课程变色
  document.querySelector("#gvList > tbody > tr:nth-child(2)").style.backgroundColor = "yellow"
  document.querySelector("#gvList > tbody > tr:nth-child(2)").style.color = "red"
  //document.querySelector("#gvList_ctl02_HyperLink1").innerText = '**学习中**'

  //拼接课程视频页面url

  let course_url = 'https://gbpx.gd.gov.cn/gdceportal/Study/' + course_link.href.slice(14, 67)
  //console.log('已打开页面-> '+course_url)

  //拼接跳转后的地址
  //let cid = course_link.href.slice(14+21,67)
  //let course_url = 'https://wcs1.shawcoder.xyz/gdcecw/play_pc/playverif_pc.html?t=2f4fd72bdf4a421f8e83d72060c414f5&courseLabel=wlxy&courseId='+cid

  /*
  //方式1：嵌入iframe
  var body = document.getElementsByTagName("body");
  var div = document.createElement("div");
  div.innerHTML = '<iframe id="auto_gbpx" name="auto_gbpx" src="'+course_url+'" height = "0" width = "0" frameborder="0" scrolling="auto" style = "display:none;visibility:hidden" ></iframe>';
  document.body.appendChild(div);
  */

  //方式2：GM自带方法打开新页面，不被浏览器alert阻塞，可通过close关闭页面
  new_window = GM_openInTab(course_url, 'insert')


}


function sleep(time_ms) {
  return new Promise((resolve) => setTimeout(resolve, time_ms));
}

/*
    功能:等待dom加载后执行函数
    dom_selector :选择器参数  待加载的dom = document.querySelector(dom_selector)
    func:待执行函数体，用匿名函数传参
    */
function wait_element(dom_selector, func) {
  let is_DomExist = false;
  let interval = 100;//时间间隔
  var int_checkDom = setInterval(() => {
    if (document.querySelector(dom_selector)) {
      is_DomExist = true;
      func();
    };
    if (is_DomExist) {
      clearInterval(int_checkDom);
    }
  }, interval);
};


function addLogPanel($win) {
  const document = $win.document
  const $panel = document.createElement('div')
  $panel.style = `
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
  `
  document.body.appendChild($panel)
  return $panel
}

function logToPanel(txt, $panel) {
  const $p = document.createElement('p')
  $p.innerText = txt
  $panel.appendChild($p)
}
