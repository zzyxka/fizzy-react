// src/layout/Index.tsx
import React, { useEffect } from "react";
import {
  Outlet,
  useNavigation,
  useLocation,
  useMatches,
} from "react-router-dom";
import PageLoading from "@/components/PageLoading";
import style from "./layout.css";
import Nav from "./Nav";

export default function Index(): React.ReactElement<any, any> {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const location = useLocation();
  const matches = useMatches();

  useEffect(() => {
    console.log("location", location);
    console.log("matches", matches);
  }, [location]);

  return (
    <div className={style.appContainer}>
      <Nav />
      <div className={style.outletContainer}>
        {isLoading && <PageLoading />}
        <Outlet />
      </div>
    </div>
  );
}
