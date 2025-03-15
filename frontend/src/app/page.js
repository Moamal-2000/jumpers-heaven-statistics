import Header from "@/Components/Header/Header";
import s from "./page.module.scss";

export default async function Home() {
  return (
    <main className={s.home}>
      <Header />
    </main>
  );
}
