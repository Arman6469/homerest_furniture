import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./submenu.scss";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

export default function SideBar({ headerShop }) {
  const history = useHistory()
  const changeHistory = (category, type) => {
    history.push(`/shop/?category=${category}&type=${type}`);
  };

  return (
    <Menu className="sub_menu font_sub_title" mode={"inline"} theme={"light"}>
      {headerShop
        ? headerShop.map((category) => {
            return (
              <SubMenu
                key={`sub${category.id}`}
                title={category.title}
                className="font_sub_title"
              >
                <Menu.Item
                  className="bg-gray font_sub_text"
                  key={category.id}
                  onClick={() =>
                    history.push(`/shop/?category=${category.category}`)
                  }
                >
                  {category.all}
                </Menu.Item>
                {category.products.map((product, i) => {
                  return (
                    <Menu.Item
                      className="bg-gray font_sub_text"
                      key={product.id}
                      onClick={() =>
                        changeHistory(category.category, product.type)
                      }
                    >
                      {product.type}
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
