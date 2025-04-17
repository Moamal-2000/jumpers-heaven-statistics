import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./MapsVideos.module.scss";

const MapsVideos = ({ videos }) => {
  function visitVideo() {
    window.open(videos[0].videoUrl, "_blank");
  }

  return (
    <div className={s.videos}>
      {!videos?.length && <p>This map has no videos.</p>}

      {videos?.map(({ type, icon, id }) => (
        <button
          type="button"
          className={s.video}
          key={id}
          onClick={visitVideo}
          data-icon={icon}
        >
          <SvgIcon name={icon} />
          <span className={s.type}>{type}</span>
        </button>
      ))}
    </div>
  );
};

export default MapsVideos;
