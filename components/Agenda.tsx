import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

function Agenda({ spectacle, key }: any) {
  return (
    <div key={key}>
      <div className="agendaItem">
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
      </div>
      <hr className="line" />
    </div>
  );
}

export default Agenda;
