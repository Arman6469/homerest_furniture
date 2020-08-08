import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./submenu.scss";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

export default function SideBar({ headerShop }) {
  const history = useHistory();
  const changeHistory = (category, type) => {
    history.push(`/shop/?category=${category}&type=${type}`);
  };
  return (
    <Menu
      className="sub_menu font_sub_title"
      mode={"inline"}
      theme={"light"}
    >
      {headerShop
        ? headerShop.map((category, index) => {
            return (
              <SubMenu
                key={`sub${index}`}
                title={category.title}
                className="font_sub_title"
              >
                <Menu.Item
                  className="bg-gray font_sub_text"
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
      {/* <SubMenu key="sub1" title="Kitchen">
        <Menu.Item key="3" className="bg-gray">
          Chair
        </Menu.Item>
        <Menu.Item key="4" className="bg-gray">
          Table
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title="Navigation Three">
        <Menu.Item key="7" className="bg-gray">
          Option 7
        </Menu.Item>
        <Menu.Item key="8" className="bg-gray">
          Option 8
        </Menu.Item>
        <Menu.Item key="9" className="bg-gray">
          Option 9
        </Menu.Item>
        <Menu.Item key="10" className="bg-gray">
          Option 10
        </Menu.Item>
      </SubMenu> */}
    </Menu>
  );
}
