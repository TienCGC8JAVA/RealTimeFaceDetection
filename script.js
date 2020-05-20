const video = document.getElementById('video')

function startVideo() {
  if (navigator.getUserMedia) {
    navigator.getUserMedia(
      { video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
    )
  }
}

startVideo()
