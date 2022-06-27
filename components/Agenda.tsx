import VideoPlayer from "./VideoPlayer";

function Agenda({ spectacle }: any) {
  return (
    <div>
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
            <h3 className="spec-title">
              <a href={spectacle.acf.lien_spectacle}>
                {spectacle.title.rendered}
              </a>
            </h3>
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
          {spectacle.acf.heure ? (
            <div className="spec-date">
              {spectacle.acf.date}, {spectacle.acf.heure}
            </div>
          ) : (
            <div className="spec-date">{spectacle.acf.date}</div>
          )}

          {/* Place */}
          {spectacle.acf.lien_theatre ? (
            <div className="spec-place">
              <a href={spectacle.acf.lien_theatre}>
                {spectacle.acf.salle_ville}
              </a>
            </div>
          ) : (
            <div className="spec-place">{spectacle.acf.salle_ville}</div>
          )}

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
