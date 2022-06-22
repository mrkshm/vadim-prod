function Agenda({ spectacles }: any) {
  return (
    <div>
      <div className="agendaItems">
        {spectacles.map((spectacle: any) => (
          <div>
            <div className="agendaItem">
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
              </div>

              {/* Images */}
              {spectacle.acf.imageUrl ? (
                <div className="imagePart">
                  <img
                    className="spec-image"
                    alt="spectacle"
                    src={spectacle.acf.imageUrl}
                  />
                </div>
              ) : null}

              {/* Video */}
              {spectacle.acf.youtube || spectacle.acf.vimeo ? (
                <div className="videoPart">
                  {spectacle.acf.vimeo ? (
                    <div className="vimeo">
                      <iframe
                        src="https://player.vimeo.com/video/716393806?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture"
                        // @ts-ignore
                        frameborder="0"
                        allowfullscreen
                        title="L&amp;#039;installation de la peur - Teaser"
                        class="player"
                      />
                      <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="youtube"></div>
              )}
            </div>
            <hr className="line" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agenda;
