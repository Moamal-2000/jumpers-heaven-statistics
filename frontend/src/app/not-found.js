"use client";

import { updateGlobalState } from "@/Redux/slices/globalSlice";
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

  return <main className={s.notFoundPage}></main>;
};

export default NotFoundPage;
