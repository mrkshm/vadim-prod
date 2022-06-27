import { itemVariants } from "../src/utils/helpers";
import { motion } from "framer-motion";

function ItemMapperCtdAlt({ items }: any) {
  return (
    <div>
      {items.map((item: any, index: number) => (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={(index + 1) * 0.2}
          key={item.title.rendered}
        >
          {item.acf.youtube || item.acf.vimeo ? (
            <div className="ctd-alt-gridder">
              {item.acf.youtube ? (
                <div className="ctd-alt-videoPart">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.acf.youtube}`}
                    title="YouTube video player"
                    // @ts-ignore
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  ></iframe>
                </div>
              ) : null}

              {item.acf.vimeo ? (
                <div className="ctd-alt-videoPart">
                  <iframe
                    src={`https://player.vimeo.com/video/${item.acf.vimeo}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    // @ts-ignore
                    frameBorder="0"
                    allowFullScreen
                  />
                  <script src="https://player.vimeo.com/api/player.js" defer />
                </div>
              ) : null}

              <div className="ctd-textPart">
                <h3>{item.title.rendered}</h3>
                <div
                  className="ctd-description"
                  dangerouslySetInnerHTML={{
                    __html: item.content.rendered,
                  }}
                ></div>
              </div>
              <hr className="line" />
            </div>
          ) : (
            <div className="ctd-gridder">
              <div className="ctd-imagePart">
                <img
                  className="ctd-itemImage"
                  src={item.acf.imageUrl}
                  alt="detail du spectacle"
                />
              </div>

              <div className="ctd-textPart">
                <h3>{item.title.rendered}</h3>
                <div
                  className="ctd-description"
                  dangerouslySetInnerHTML={{
                    __html: item.content.rendered,
                  }}
                ></div>
              </div>
              <hr className="line" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default ItemMapperCtdAlt;
