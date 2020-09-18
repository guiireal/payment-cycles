import React from "react";

export default ({ icon, label, children }) => (
  <li className="treeview">
    <a href="">
      <i className={`fa fa-${icon}`}></i> {label}
      <i className="fa fa-angle-left pull-right"></i>
    </a>
    <ul className="treeview-menu">{children}</ul>
  </li>
);
