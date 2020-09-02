/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Icon, Badge, Menu } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div>
        <Menu mode={props.mode}>
          <Menu.Item key="buy-sell">
            <a style={{ color: "darkgreen" }} href="/landingpage">
              Buy & Sell
            </a>
          </Menu.Item>
          <Menu.Item key="mail">
            <a style={{ color: "darkgreen" }} href="/login">
              Login
            </a>
          </Menu.Item>
          <Menu.Item key="app">
            <a style={{ color: "darkgreen" }} href="/register">
              Register
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="cart">
          <Badge
          // count={5}
          >
            <a
              href="/user/cart"
              style={{ marginRight: -25 }}
              style={{ color: "green" }}
            >
              <Icon type="shopping-cart" style={{ fontSize: "2rem" }} />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="buy-sell">
          <a style={{ color: "green" }} href="/landingpage">
            Buy & Sell
          </a>
        </Menu.Item>
        <Menu.Item key="upload">
          <a style={{ color: "green" }} href="/product/upload">
            Upload
          </a>
        </Menu.Item>

        <Menu.Item key="logout">
          <a style={{ color: "green" }} onClick={logoutHandler}>
            Logout
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
