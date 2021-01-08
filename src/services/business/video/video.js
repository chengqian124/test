const Address = ''
export default {
  name: 'TakePhotos',
  data () {
    return {}
  },
  methods: {
    opening () {
      let convas = document.querySelector('#canvas') //
      let video = document.querySelector('#video')
      let audio = document.querySelector('audio')
      let img = document.querySelector('#img')
      let btn = document.querySelector('button')
      let context = canvas.getContext('2d')
      let width = 320 // 视频和canvas的宽度
      let height = 0 //
      let streaming = false // 是否开始捕获媒体
      // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
      if (navigator.mediaDevices == undefined) {
        navigator.mediaDevices = {}
      }
      // 获取用户媒体,包含视频和音频
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          video.srcObject = stream // 将捕获的视频流传递给video  放弃window.URL.createObjectURL(stream)的使用
          video.play() //  播放视频
          audio.srcObject = stream
          audio.play()
        })
    },
    tackcapture () {
      // 需要判断媒体流是否就绪
      let convas = document.querySelector('#canvas') //
      let video = document.querySelector('#video')
      let audio = document.querySelector('audio')
      let img = document.querySelector('#img')
      let btn = document.querySelector('button')
      let context = canvas.getContext('2d')
      let width = 320 // 视频和canvas的宽度
      let height = 0 //
      let streaming = true // 是否开始捕获媒体
      if (streaming) {
        context.drawImage(video, 0, 0, 350, 200) // 将视频画面捕捉后绘制到canvas里面
        img.src = canvas.toDataURL('image/png') // 将canvas的数据传送到img里
        alert(img.src) // 这边的值可以传入后端
      }
 
      // 监听视频流就位事件,即视频可以播放了
      video.addEventListener(
        'canplay',
        function (ev) {
          if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width)
 
            video.setAttribute('width', width)
            video.setAttribute('height', height)
            canvas.setAttribute('width', width)
            canvas.setAttribute('height', height)
            streaming = true
          }
        },
        false
      )
    }
  }
}
