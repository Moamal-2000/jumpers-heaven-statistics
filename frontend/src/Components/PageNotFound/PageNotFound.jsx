import { useEffect } from "react";
import { Link } from "react-router-dom";
import img404 from "src/Assets/404.webp";
import s from "./PageNotFound.module.scss";

const PageNotFound = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main className={s.pageNotFound}>
      <img src={img404} alt="Error 404 not found" />
      <h1>This page doesn’t exist</h1>
      <p>Please check your URL or return to the home page.</p>
      <Link to="/">Return to Home page</Link>
    </main>
  );
};
export default PageNotFound;
