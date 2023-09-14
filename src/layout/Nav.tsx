// src/layout/Index.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./layout.css";

export default function Nav(): React.ReactElement<any, any> {
  const isActiveClassName = ({ isActive }: { isActive: boolean }): string =>
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
