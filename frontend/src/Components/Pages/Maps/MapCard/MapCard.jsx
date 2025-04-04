import Image from "next/image";
import s from "./MapCard.module.scss";

const MapCard = ({
  mapData: {
    name,
    types,
    classification,
    img,
    rate,
    description,
    info,
    compilationRate,
    author,
    isOnline,
    release,
  },
}) => {
  return (
    <div className={s.mapCard}>
      <div className={s.imgHolder}>
        <Image src={img} alt={name} fill={true} />

        <div className={s.layer}>
          <span className={s.classification}>{classification}</span>
          <div className={s.types}>
            {types?.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>

        <section className={s.content}>
          <div className={s.nameAndRating}>
            <h2>{name}</h2>
            <div className={s.rateWrapper}>
              <span className={s.star}>★</span>
              <span className={s.rate}>{rate}</span>
            </div>
          </div>

          <p className={s.description}>{description}</p>

          <div className={s.infoCards}>
            {info?.map(({ text, result, icon, id }) => (
              <div className={s.card} key={id}>
                <div className={s.titleWrapper}>
                  <span className={s.iconHolder}>{icon}</span>
                  <h3>{text}</h3>
                </div>

                <span className={s.result}>{result}</span>
              </div>
            ))}
          </div>

          <div className={s.completionRate}>
            <div className={s.textWrapper}>
              <span className={s.text}>Completion Rate</span>
              <span className={s.rate}>{compilationRate}</span>
            </div>

            <div className={s.rateLine}></div>
          </div>

          <div className={s.authorAndRelease}>
            <div className={s.authorWrapper}>
              <span className={s.ShortName}>JM</span>
              <span className={s.authorName}>{author}</span>
            </div>

            <div className={s.releaseBox}>
              <div className={s.title}>Released</div>
              <span className={s.date}>{release}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MapCard;
