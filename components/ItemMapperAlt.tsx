function ItemMapperAlt({ items }: any) {
  return (
    <div>
      {items.map((item: any) => (
        <div key={item.title.rendered} className="alt-gridder">
          <div className="alt-flexor">
            <div className="alt-imagePart">
              <img
                className="alt-itemImage"
                src={item.acf.imageUrl}
                alt="detail du spectacle"
              />

              {item.acf.youtube ? (
                <div className="alt-videoPart">
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
                <div className="alt-videoPart alt-vimeo">
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
                <div className="item-distribution">{item.acf.distribution}</div>
                <div className="item-label">{item.acf.label}</div>
              </div>
            </div>
          </div>

          <hr className="line" />
        </div>
      ))}
    </div>
  );
}

export default ItemMapperAlt;
