import Link from "next/link";
import React, { useState } from "react";
import { OnClickOutside } from "../../lib/utils/on-click-outside";
export default function MyDropdown({ name, children }) {
  const [open, setOpen] = useState(false);

  const modalRef = React.useRef < HTMLInputElement > null;

  OnClickOutside(modalRef, () => setOpen(false), true);
  return (
    <>
      <div ref={modalRef}>
        <p
          onClick={() => setOpen(!open)}
          className="text-[14px] text-white cursor-pointer link-underline "
        >
          {name}
        </p>

        {open ? (
          <ul className="header-menu">
            <li className="menu-item">{children}</li>
          </ul>
        ) : null}
      </div>
    </>
  );
}
