import s from "./page.module.scss";

export default async function Home() {
  return (
    <div className="container">
      <main className={s.home}></main>
    </div>
  );
}
