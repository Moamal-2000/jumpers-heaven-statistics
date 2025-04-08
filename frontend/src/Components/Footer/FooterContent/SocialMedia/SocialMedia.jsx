import SvgIcon from "@/Components/Shared/SvgIcon";
import { SOCIAL_MEDIA_DATA } from "@/Data/staticData";
import s from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <nav className={s.socialMediaNav}>
      <ul>
        {SOCIAL_MEDIA_DATA.map(({ iconName, link, id }) => (
          <li className={s.media} key={id}>
            <a href={link} target="_blank" title={iconName}>
              <SvgIcon name={iconName} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMedia;
