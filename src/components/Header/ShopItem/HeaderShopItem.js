import React from "react";
import "./headershopitem.scss";
import { Link } from "react-router-dom";

export default function HeaderShopItem({ item, scrolled }) {
  return (
    <div className="header_shop_item">
      <img src={item.icon} alt={item.title} width="100%" />
      <p
        className={
          !scrolled
            ? "font-red font-medium upper mt_3"
            : "font-whitesmoke font-medium upper mt_3"
        }
      >
        {item.title}
      </p>
    </div>
  );
}
