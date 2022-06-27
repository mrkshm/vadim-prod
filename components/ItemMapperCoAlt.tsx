import { itemVariants } from "../src/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ModalImg from "./ModalImg";

function ItemMapperCoAlt({ items }: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      {items.map((item: any, index: number) => (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={(index + 1) * 0.2}
          key={item.title.rendered}
          className="alt-gridder"
        >
          {item.acf.youtube || item.acf.vimeo ? (
            <div className="co-alt-flexor">
              {item.acf.youtube ? (
                <div className="co-alt-videoPart">
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
                <div className="co-alt-videoPart alt-vimeo">
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

              <div className="alt-textPart">
                <div className="">
                  <div className="concert-title-flex">
                    <h3 className="alt-textTitle">{item.title.rendered}</h3>
                    <img
                      className="musards-logo"
                      src="/musards_logo.jpg"
                      alt="Musards Logo"
                    />
                  </div>
                  <div
                    className="alt-description"
                    dangerouslySetInnerHTML={{
                      __html: item.content.rendered,
                    }}
                  ></div>
                  <AnimatePresence
                    initial={false}
                    // @ts-ignore
                    exitBeforEnter={true}
                    onExitComplete={() => null}
                  >
                    {modalOpen && (
                      <ModalImg
                        modalOpen={modalOpen}
                        handleClose={close}
                        imageUrl={item.acf.imageUrl}
                      />
                    )}
                  </AnimatePresence>
                </div>
                {item.acf.imageUrl ? (
                  <div className="alt-imagePart">
                    <img
                      onClick={() => (modalOpen ? close() : open())}
                      className="thumbImage"
                      src={item.acf.imageUrl}
                      alt="detail du spectacle"
                    />
                  </div>
                ) : null}

                <div className="item-info">
                  <div className="item-distribution">
                    {item.acf.distribution}
                  </div>
                  <div className="item-label">{item.acf.label}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="co-alt-flexor">
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
                <div className="item-info">
                  <div className="item-distribution">
                    {item.acf.distribution}
                  </div>
                  <div className="item-label">{item.acf.label}</div>
                </div>
              </div>
            </div>
          )}

          <hr className="line" />
        </motion.div>
      ))}
    </div>
  );
}

export default ItemMapperCoAlt;
