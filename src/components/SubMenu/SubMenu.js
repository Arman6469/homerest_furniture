import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./submenu.scss";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

export default function SideBar({ headerItems }) {
  const history = useHistory();
  const changeHistory = (category, type) => {
    history.push(`/shop/?category=${category}&type=${type}`);
  };

  return (
    <Menu className="sub_menu font_sub_title" mode={"inline"} theme={"light"}>
      {headerItems
        ? headerItems.map((category) => {
            return (
              <SubMenu
                key={`sub${category._id}`}
                title={category.title}
                className="font_sub_title"
              >
                <Menu.Item
                  className="bg-gray font_sub_text"
                  key={category._id}
                  onClick={() =>
                    history.push(`/shop/?category=${category.category}`)
                  }
                >
                  {category.all}
                </Menu.Item>
                {category.products.map((product) => {
                  return (
                    <Menu.Item
                      className="bg-gray font_sub_text"
                      key={product._id}
                      onClick={() =>
                        changeHistory(category.category, product.furtype)
                      }
                    >
                      {product.furtype}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })
        : null}
    </Menu>
  );
}
