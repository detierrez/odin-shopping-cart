import c from "./Dropdown.module.css";
import { useState } from "react";

export default function Dropdown({ label = "", children = [] }) {
  const [isDropped, setIsDropped] = useState(false);

  const dropped = isDropped ? " " + c.dropped : "";

  return (
    <div className={c.menu + dropped} onClick={() => setIsDropped((s) => !s)}>
      <div className={c.label}>
        {label}{" "}
        <svg
          className={c.marker + dropped}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>
      <div className={c.content + dropped}>{children}</div>
    </div>
  );
}
