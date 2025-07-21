import { useRef, useState } from "react";
import { Button } from "antd";
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const player = useRef<HTMLVideoElement | null>(null);

  const handleClick = () => {
    setIsPlaying(prev => !prev)
    if (isPlaying) {
      player.current?.pause();
    } else {
      player.current?.play();
    }
  }
  return (
    <>
      <Button type="primary" danger onClick={handleClick}>
        {isPlaying ? '暂停' : '播放'}
      </Button>
      <video ref={player} width="250" controls={true} >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
};

export default VideoPlayer;
