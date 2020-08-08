import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./submenu.scss";

const { SubMenu } = Menu;

export default function SideBar() {
  return (
    <Menu
      className="sub_menu"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode={"inline"}
      theme={"light"}
    >
      <SubMenu key="sub1" title="Kitchen">
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
      </SubMenu>
    </Menu>
  );
}
