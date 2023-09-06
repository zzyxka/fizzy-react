// src/layout/Index.tsx
import React, { useEffect } from "react";
import {
  Outlet,
  NavLink,
  useNavigation,
  useLocation,
  useMatches,
} from "react-router-dom";
import PageLoading from "@/components/PageLoading";
import style from "./layout.css";

function Nav(): React.ReactElement<any, any> {
  const isActiveClassName = ({ isActive }) =>
    isActive ? `${style.navItem} ${style.active}` : style.navItem;
  return (
    <div className={style.layoutNav}>
      <h2>Nav</h2>
      <ul>
        <li>
          <NavLink to="/" className={isActiveClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="demo-list" className={isActiveClassName}>
            List
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

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