import Introduction from "@/Components/Pages/Home/Introduction/Introduction";
import s from "./page.module.scss";

export default async function Home() {
  return (
    <div className="container">
      <main className={s.home}>
        <Introduction />
      </main>
    </div>
  );
}
