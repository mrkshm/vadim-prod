// import ReactPlayer from "react-player";
import _ReactPlayer, { ReactPlayerProps } from "react-player";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

interface VPlayerProps {
  url: string;
}
function VideoPlayer({ url }: VPlayerProps) {
  const ref = (player: any) => {
    player = player;
  };
  return (
    <div className="playerWrapper">
      <ReactPlayer
        ref={ref}
        className="react-player"
        controls={true}
        width="100%"
        height="100%"
        url={url}
      />
    </div>
  );
}

export default VideoPlayer;
