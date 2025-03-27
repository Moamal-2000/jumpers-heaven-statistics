"use client";

import { updateGlobalState } from "@/Redux/slices/globalSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateGlobalState({ key: "isNotFoundPage", value: true }));

    return () =>
      dispatch(updateGlobalState({ key: "isNotFoundPage", value: false }));
  }, [dispatch]);

  return (
    <main className={s.notFoundPage}>
      <h1 className={s.errorCode}>404</h1>
      <h2 className={s.title}>Page Not Found</h2>
      <p className={s.description}>
        {`It looks like the page you're searching for doesn’t exist or may have been moved.`}
      </p>

      <ul className={s.list}>
        <li>Double-check the URL for any typos.</li>
        <li>Use the navigation menu to find what you need.</li>
        <li>
          Return to the{" "}
          <Link href="/" className={s.link}>
            homepage
          </Link>{" "}
          and start fresh.
        </li>
      </ul>

      <Link href="/" className={s.returnHomeBtn}>
        Return to Home page
      </Link>
    </main>
  );
};

export default NotFoundPage;
