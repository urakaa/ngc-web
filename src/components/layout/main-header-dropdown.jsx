import React from "react";
import { FaCaretDown } from "react-icons/fa";

export default function HeaderDropdown({ children, title }) {
  return (
    <div className="relative nav-dropdown">
      <button className="flex items-center nav-item">
        {title} <FaCaretDown className="ml-1" />
      </button>

      <div className="nav-dropdown-menu">{children}</div>
    </div>
  );
}
