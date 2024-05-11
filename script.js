if (Hls.isSupported()) {
  let video = document.getElementById("video-so");
  let videoLink = "http://localhost:8080/hls/test.m3u8";
  let hls = new Hls();
  hls.loadSource(videoLink);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
}
if (Hls.isSupported()) {
  let video = document.getElementById("video-pa");
  let videoLink = "http://localhost:8081/hls/test.m3u8";
  let hls = new Hls();
  hls.loadSource(videoLink);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
}
