import SvgIcon from "@/Components/Shared/SvgIcon";
import { openVideo } from "@/Functions/utils";
import s from "./MapsVideos.module.scss";

const MapsVideos = ({ videos }) => {
  return (
    <div className={s.videos}>
      {!videos?.length && <p>This map has no videos.</p>}

      {videos?.map(({ type, icon, id }, index) => (
        <button
          type="button"
          className={s.video}
          key={id}
          onClick={() => openVideo(videos, index)}
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
