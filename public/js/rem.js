function remSize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  // 最大ipad pro 1024
  if (deviceWidth >= 1024) {
    deviceWidth = 1024
  }
  // 最小iphone se 320
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  // 个人本地开发习惯使用375*667 此处设置1rem = 50px 后续开发元素单位都使用rem
  document.documentElement.style.fontSize = deviceWidth / 7.5 + "px"
  document.querySelector("body").style.fontSize = 0.5 + "rem"
}

remSize()

window.onresize = function () {
  remSize()
}