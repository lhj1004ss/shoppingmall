import React, { Component } from "react";
import { Col, Card, Row } from "antd";
import {
  RiLuggageCartLine,
  RiMoneyDollarCircleFill,
  RiRecycleFill,
} from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";

export default class ServicePage extends Component {
  state = {
    service: [
      {
        icon: <RiLuggageCartLine />,
        title: "Buy",
        detail: "Spend Less, Get More",
      },

      {
        icon: <RiMoneyDollarCircleFill />,
        title: "Sell",
        detail: "Easy to Sell",
      },
      {
        icon: <RiRecycleFill />,
        title: "Recycle",
        detail: "Save Energy",
      },
      {
        icon: <BiHappyAlt />,
        title: "Happy",
        detail: "Be More Happy",
      },
    ],
  };

  render() {
    return (
      <div
        id="service"
        style={{
          height: "40vh",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
          background: "lightgray",
        }}
      >
        <Row style={{ background: "lightgray" }}>
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>Services</h1>
          <hr />
          {this.state.service.map((item, index) => {
            return (
              <div>
                <Col
                  lg={6}
                  md={12}
                  xs={24}
                  style={{
                    background: "",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "darkgreen" }}>
                    <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </Col>
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}
