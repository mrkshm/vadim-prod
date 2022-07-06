import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

function Agenda({ spectacle, keyer }: any) {
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
    <div key={keyer} ref={ref}>
      <motion.div animate={animation} className="agendaItem">
        <div className="affiche">
          {spectacle.acf.imageUrl ? (
            <div className="imagePart">
              <img
                className="spec-image"
                alt="spectacle"
                src={spectacle.acf.imageUrl}
              />
            </div>
          ) : null}
        </div>

        <div className="textPart">
          {/* Title */}
          {spectacle.acf.lien_spectacle ? (
            <Link href={spectacle.acf.lien_spectacle}>
              <a>
                <h3 className="spec-title">{spectacle.title.rendered}</h3>
              </a>
            </Link>
          ) : (
            <h3
              className="spec-title"
              dangerouslySetInnerHTML={{
                __html: spectacle.title.rendered,
              }}
            ></h3>
          )}

          {/* Description */}
          {spectacle.content.rendered ? (
            <div
              dangerouslySetInnerHTML={{
                __html: spectacle.content.rendered,
              }}
              className="description"
            ></div>
          ) : null}

          {/* Date and time */}
          {/* {spectacle.acf.heure ? (
            <div className="spec-date">
              {spectacle.acf.date}, {spectacle.acf.heure}
            </div>
          ) : (
            <div className="spec-date">{spectacle.acf.date}</div>
          )} */}

          {/* Place */}
          {/* {spectacle.acf.lien_theatre ? (
            <div className="spec-place">
              <a href={spectacle.acf.lien_theatre}>
                {spectacle.acf.salle_ville}
              </a>
            </div>
          ) : (
            <div className="spec-place">{spectacle.acf.salle_ville}</div>
          )} */}

          {/* Video, if any */}
          <div className="spec-video">
            {spectacle.acf.video ? (
              <VideoPlayer url={spectacle.acf.video} />
            ) : null}
          </div>
        </div>
      </motion.div>
      <hr className="line" />
    </div>
  );
}

export default Agenda;
