import MapImage from "@/Components/Shared/MapImage";
import SvgIcon from "@/Components/Shared/SvgIcon";
import { formateReleaseDate } from "@/Functions/utils";
import s from "./MapCard.module.scss";

const MapCard = ({ mapData, lastMapRef }) => {
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
    CountryCode,
    CountryName,
  } = mapData;

  return (
    <div className={s.mapCard} ref={lastMapRef}>
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
          <h2>{Name}</h2>
          <div className={s.rateWrapper}>
            <span className={s.star}>★</span>
            <span className={s.rate}>{Rate ? Rate : "?"}</span>
          </div>
        </div>

        <div className={s.videos}>
          {Videos?.map(({ type, icon, id }) => (
            <button type="button" className={s.video} key={id}>
              <SvgIcon name={icon} />
              <span className={s.type}>{type}</span>
            </button>
          ))}
        </div>

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

        <div className={s.authorAndRelease}>
          <div className={s.authorWrapper}>
            <div className={s.countryFlag}>
              {/* <CountryImage
                countryCode={CountryCode}
                countryName={CountryName}
                size={64}
              /> */}
            </div>
            <span className={s.authorName}>{Author}</span>
          </div>

          <div className={s.releaseBox}>
            <div className={s.title}>Released</div>
            <p className={s.date}>{formateReleaseDate(Released)}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapCard;
