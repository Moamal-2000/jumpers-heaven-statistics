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
      <h1 className={s.text404}>404</h1>
      <h2 className={s.title}>Page Not Found</h2>
      <p className={s.description}>
        {`The page you're looking for doesn't exist or has been moved. Don't
        worry, we'll help you get back to the main site or find what you need.`}
      </p>
      <Link href="/" className={s.returnHomeBtn}>Return to Home page</Link>
    </main>
  );
};

export default NotFoundPage;
