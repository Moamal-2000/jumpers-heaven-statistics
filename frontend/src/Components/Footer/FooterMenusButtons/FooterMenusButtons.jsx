import s from "./FooterMenusButtons.module.scss";

const FooterMenusButtons = () => {
  return (
    <div className={s.menus}>
      <button type="button" className={s.serversButton}>
        Servers Online
      </button>
    </div>
  );
};

export default FooterMenusButtons;
