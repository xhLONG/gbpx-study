var secondIframe = document.querySelector('#secondIframe');

var secondIframeDom = secondIframe.contentWindow.document;
var thirdIframe = secondIframeDom.querySelector('#thirdIframe');

var thirdIframeDom = thirdIframe.contentWindow.document;
var dataMainIframe = thirdIframeDom.querySelector('#dataMainIframe');

var dataMainIframeDom = dataMainIframe.contentWindow.document;

dataMainIframeDom.querySelectorAll('.listframe tr')[1].querySelector('.courseware-list-reed').click();
var num = 1;
var curPage = 1;
const pageSize = Number(dataMainIframeDom.querySelector('#lblPage').innerText);
console.log("共" + pageSize + "页")
var timer = setInterval(() => {
  const line = dataMainIframeDom.querySelectorAll('.listframe tr')[num];
  if (line) {
    line.querySelector('.courseware-list-reed').click();
    console.log("第" + curPage + "页，第" + num + "个视频");
    num++;
  } else {
    dataMainIframeDom.querySelector('#btnNextPage').click();
    curPage++;
    if (curPage >= pageSize) {
      clearInterval(timer)
      timer = null
      console.log("结束")
    }
    num = 1;
  }
}, 90 * 60 * 1000);

// $("#course_frame")[0].contentWindow.document.querySelector('#my-video_html5_api')
// $("#course_frame")[0].contentWindow.document.querySelector('.vjs-big-play-button').click()
// #my-video > button
