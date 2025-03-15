import { jhApis } from "@/Api/jumpersHeaven";
import s from "./page.module.scss";

export default async function Home() {
  const testRequest = await fetch(jhApis({ fps: 125, limit: 100 }).allMaps);
  const data = testRequest.json();

  console.log(await data);

  return <main className={s.home}></main>;
}
