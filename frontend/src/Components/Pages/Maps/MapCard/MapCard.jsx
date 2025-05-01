import MapImage from "@/Components/Shared/Images/MapImage/MapImage";
import SvgIcon from "@/Components/Shared/SvgIcon";
import Link from "next/link";
import AuthorAndRelease from "./AuthorAndRelease/AuthorAndRelease";
import s from "./MapCard.module.scss";

const MapCard = ({ mapData, mapsScroll, lastMapRef, index }) => {
  const {
    Author,
    Difficulty,
    Name,
    Types,
    Classifications,
    Rate,
    CompilationRate,
    Released,
    Videos,
  } = mapData;
  const ref = mapsScroll.length === index + 1 ? lastMapRef : null;
  const nameAndRatingStyles = {
    marginBottom: !Videos?.length > 0 ? "68px" : "",
  };

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
        <div className={s.nameAndRating} style={nameAndRatingStyles}>
          <Link href="/maps/map/details">{Name}</Link>

          <div className={s.rateWrapper}>
            <span className={s.star}>★</span>
            <span className={s.rate}>{Rate ? Rate : "?"}</span>
          </div>
        </div>

        {Videos?.length > 0 && (
          <Link
            href="/maps/map/details"
            className={s.videoIcon}
            title="Map has videos"
          >
            <SvgIcon name="youtube" />
          </Link>
        )}

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
