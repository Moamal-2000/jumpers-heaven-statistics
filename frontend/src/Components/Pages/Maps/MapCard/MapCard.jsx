import MapImage from "@/Components/Shared/Images/MapImage/MapImage";
import Link from "next/link";
import AuthorAndRelease from "./AuthorAndRelease/AuthorAndRelease";
import s from "./MapCard.module.scss";
import MapsVideos from "./MapsVideos/MapsVideos";

const MapCard = ({ mapData, mapsScroll, lastMapRef, index }) => {
  const {
    Author,
    Difficulty,
    Name,
    Types,
    Classifications,
    Rate,
    Info,
    CompilationRate,
    Released,
    Videos,
  } = mapData;
  const ref = mapsScroll.length === index + 1 ? lastMapRef : null;

  return (
    <div className={s.mapCard} ref={ref}>
      <div className={s.imgHolder}>
        <MapImage mapName={Name} />

        <div className={s.layer}>
          <div className={s.classifications}>
            {Classifications?.map(({ text, id }) => (
              <span className={s.classification} key={id}>
                {text}
              </span>
            ))}
          </div>

          <div className={s.types}>
            {Types?.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>
      </div>

      <section className={s.content}>
        <div className={s.nameAndRating}>
          <Link href="/maps/map/details">{Name}</Link>

          <div className={s.rateWrapper}>
            <span className={s.star}>★</span>
            <span className={s.rate}>{Rate ? Rate : "?"}</span>
          </div>
        </div>

        <MapsVideos videos={Videos} />

        <div className={s.infoCards}>
          {Info?.map(({ title, result, icon, id }) => (
            <div className={s.card} key={id}>
              <div className={s.titleWrapper}>
                <span className={s.iconHolder}>{icon}</span>
                <span className={s.title}>{title}</span>
              </div>

              <p className={s.result}>{result}</p>
            </div>
          ))}
        </div>

        <div className={s.completionRate}>
          <div className={s.textWrapper}>
            <span className={s.text}>Completion Rate</span>
            <span className={s.rate}>{CompilationRate || 0 + "%"}</span>
          </div>

          <div className={s.progressBar}>
            <div
              className={s.progressLine}
              style={{ width: CompilationRate || 0 + "%" }}
            />
          </div>
        </div>

        <AuthorAndRelease author={Author} release={Released} />
      </section>
    </div>
  );
};

export default MapCard;
