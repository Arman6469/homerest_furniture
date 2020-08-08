import React, { useState, useEffect } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import HeaderShopItem from "./ShopItem/HeaderShopItem";
import { NavLink } from "react-router-dom";

export default function Header({ headerShop }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  });

  return (
    <div className="header">
      <div className={scrolled ? "header_main_div bg-red" : "header_main_div"}>
        <div className="logo">
          <img src={logo} alt="patker" width="100%" />
        </div>
        <div className="header_navigation">
          <ul>
            <NavLink to="/">
              <li
                className={
                  scrolled
                    ? "font-whitesmoke font-medium weight-6 "
                    : "font-red font-medium weight-6 "
                }
              >
                Home
              </li>
            </NavLink>
            <NavLink to="/shop">
              <li
                className={
                  scrolled
                    ? "font-whitesmoke font-medium weight-6 "
                    : "font-red font-medium weight-6 "
                }
              >
                Shop
                <div className="rotating_triangle">
                  <FontAwesomeIcon icon={faSortDown} rotation={180} />
                </div>
                <div
                  className={
                    scrolled
                      ? "shop_dropdown bg-red"
                      : "shop_dropdown bg-whitesmoke"
                  }
                >
                  {headerShop
                    ? headerShop.map((item) => {
                        return (
                          <HeaderShopItem
                            key={item.id}
                            item={item}
                            scrolled={scrolled}
                          />
                        );
                      })
                    : null}
                </div>
              </li>
            </NavLink>
            <NavLink to="/about">
              <li
                className={
                  scrolled
                    ? "font-whitesmoke font-medium weight-6 "
                    : "font-red font-medium weight-6 "
                }
              >
                About
              </li>
            </NavLink>

            <li
              className={
                scrolled
                  ? "font-whitesmoke font-medium weight-6 "
                  : "font-red font-medium weight-6 "
              }
            >
              Contact
            </li>
            <div
              className={
                scrolled ? "moving_line bg-whitesmoke" : "moving_line bg-red"
              }
            ></div>
          </ul>
        </div>
      </div>
    </div>
  );
}
