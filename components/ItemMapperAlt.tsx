import { itemVariants } from "../src/utils/helpers";
import { useStore } from "../src/stores/playStore";
import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

function ItemMapperAlt({ item, key, albumIndex }: any) {
  // @ts-ignore
  let tracks = useStore((state) => state.tracks);

  // @ts-ignore
  const setActive = useStore((state) => state.setActive);
  const setActiveTrack = (arg: number) => setActive(arg);

  const findSongIndex = (arg: any) => {
    return tracks.findIndex((track: any) => track.url === arg);
  };

  return (
    <div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={(albumIndex + 1) * 0.2}
        key={item.title.rendered}
        className="alt-gridder"
      >
        <div className="alt-flexor">
          <div className="alt-imagePart">
            <img
              className="alt-itemImage"
              src={item.acf.imageUrl}
              alt="detail du spectacle"
            />
          </div>

          <div className="alt-textPart">
            <div className="">
              <h3 className="alt-textTitle">{item.title.rendered}</h3>
              <div
                className="alt-description"
                dangerouslySetInnerHTML={{
                  __html: item.content.rendered,
                }}
              ></div>
            </div>
          </div>
          <div className="item-info">
            <div className="item-distribution">{item.acf.distribution}</div>
            <div className="item-label">{item.acf.label}</div>
          </div>
          {item.acf.video ? (
            <div className="alt-videoPart">
              <VideoPlayer url={item.acf.video} />
            </div>
          ) : null}
          {item.acf.mp3 ? (
            <div onClick={() => setActiveTrack(findSongIndex(item.acf.mp3))}>
              <audio src={item.acf.mp3} controls></audio>
              <div>
                <button
                  onClick={() => setActiveTrack(findSongIndex(item.acf.mp3))}
                >
                  CLICK
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <hr className="line" />
      </motion.div>
    </div>
  );
}

export default ItemMapperAlt;
