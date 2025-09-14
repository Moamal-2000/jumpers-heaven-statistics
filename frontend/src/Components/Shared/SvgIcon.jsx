import { iconsData } from "@/Data/iconsData";

const SvgIcon = ({ name }) => {
  const iconData = iconsData.find((iconData) => iconData.name === name);
  if (!iconData) {
    console.warn(`SvgIcon: Icon "${name}" not found`);
    return null;
  }
  return iconData.icon;
};

export default SvgIcon;
