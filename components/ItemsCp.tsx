import { useState, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import VideoPlayer from "./VideoPlayer";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ImageComponent from "./ImageComponent";

function ItemsCp({ item, key }: any) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "-100vw", opacity: 0 });
    }
  }, [inView, ref]);

  return (
    <div key={key} className="oddOrEven" ref={ref}>
      <motion.div animate={animation}>
        {item.acf.video ? (
          <div className="item-line">
            <div className="video-part">
              <VideoPlayer url={item.acf.video} />
            </div>
            <div className="text-part">
              <div className="item-titleFlex">
                <h3 className="item-title">{item.title.rendered}</h3>
                {item.acf.lien_musards ? (
                  <Link href={item.acf.lien_musards}>
                    <a>
                      <img
                        className="musards-logo"
                        src="/musards_logo.jpg"
                        alt="Musards Logo"
                      />
                    </a>
                  </Link>
                ) : null}
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: item.content.rendered,
                }}
                className="item-description"
              ></div>

              <div className="imageRow">
                {item.acf.imageUrl ? (
                  <ImageComponent img={item.acf.imageUrl} />
                ) : null}
                {item.acf.imageUrl2 ? (
                  <ImageComponent img={item.acf.imageUrl2} />
                ) : null}
                {item.acf.imageUrl3 ? (
                  <ImageComponent img={item.acf.imageUrl3} />
                ) : null}
                {item.acf.imageUrl4 ? (
                  <ImageComponent img={item.acf.imageUrl4} />
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="item-line">
            <div className="video-part">
              <img
                className="item-image-main"
                src={item.acf.imageUrl}
                alt="spectacle"
              />
            </div>
            <div className="text-part">
              <div className="item-titleFlex">
                <h3 className="item-title">{item.title.rendered}</h3>
                {item.acf.lien_musards ? (
                  <Link href={item.acf.lien_musards}>
                    <a>
                      <img
                        className="musards-logo"
                        src="/musards_logo.jpg"
                        alt="Musards Logo"
                      />
                    </a>
                  </Link>
                ) : null}
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: item.content.rendered,
                }}
                className="item-description"
              ></div>
            </div>
          </div>
        )}
        <hr className="line" />
      </motion.div>
    </div>
  );
}

export default ItemsCp;
