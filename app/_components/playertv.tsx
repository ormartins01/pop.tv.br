import React, { useState } from "react";
import ReactHlsPlayer from "react-hls-player";

export default function PlayerHls() {
  const [hlsUrl] = useState(
    "http://srv26513565.ultasrv.com:8080/hls/test.m3u8"
  );

  return (
    <div className="">
      <ReactHlsPlayer
        playerRef={React.createRef<HTMLVideoElement>()}
        src={hlsUrl}
        autoPlay={true}
        controls={true}
        width="960px"
        height="auto"
      />
    </div>
  );
}
