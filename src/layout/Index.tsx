// src/layout/Index.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import style from "./layout.css";
import Nav from "./Nav";

export default function Index(): React.ReactElement<any, any> {
  return (
    <div className={style.appContainer}>
      <Nav />
      <div className={style.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}
