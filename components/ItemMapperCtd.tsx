function ItemMapperCtd({ items }: any) {
  return (
    <div>
      {items.map((item: any) => (
        <div className="ctd-gridder">
          <div className="ctd-imagePart">
            <img
              className="ctd-itemImage"
              src={item.acf.imageUrl}
              alt="detail du spectacle"
            />
          </div>

          {item.acf.youtube ? (
            <div className="ctd-videoPart">
              <iframe
                src={`https://www.youtube.com/embed/${item.acf.youtube}`}
                title="YouTube video player"
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            </div>
          ) : null}

          {item.acf.vimeo ? (
            <div className="ctd-videoPart ctd-vimeo">
              <iframe
                src={`https://player.vimeo.com/video/${item.acf.vimeo}`}
                allow="autoplay; fullscreen; picture-in-picture"
                // @ts-ignore
                frameborder="0"
                allowfullscreen
              />
              <script src="https://player.vimeo.com/api/player.js"></script>
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
      ))}
    </div>
  );
}

export default ItemMapperCtd;
