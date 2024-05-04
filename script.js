if (Hls.isSupported()) {
  let video = document.getElementById("video");
  let videoLink = "http://localhost:8080/hls/test.m3u8";
  let hls = new Hls();
  hls.loadSource(videoLink);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
}