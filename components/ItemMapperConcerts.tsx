import { motion } from "framer-motion";

import { itemVariants } from "../src/utils/helpers";

function ItemMapperConcerts({ items }: any) {
  return (
    <div>
      {items.map((item: any, index: number) => (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={(index + 1) * 0.2}
          key={item.title.rendered}
          className="ctd-gridder"
        >
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
                width="160"
                height="160"
                src={`https://www.youtube.com/embed/${item.acf.youtube}`}
                title="YouTube video player"
                // @ts-ignore
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            </div>
          ) : null}

          <div className="ctd-textPart">
            <h3>{item.title.rendered}</h3>
            <div className="ctd-distribution">{item.acf.distribution}</div>
            <div
              className="ctd-description"
              dangerouslySetInnerHTML={{
                __html: item.content.rendered,
              }}
            ></div>
          </div>
          <hr className="line" />
        </motion.div>
      ))}
    </div>
  );
}

export default ItemMapperConcerts;
