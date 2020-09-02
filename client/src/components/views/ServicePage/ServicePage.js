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
        detail: "Easy to buy",
      },

      {
        icon: <RiMoneyDollarCircleFill />,
        title: "Sell",
        detail: "Easy to sell",
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
      <div>
        <Row>
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>Services</h1>
          <hr />
          {this.state.service.map((item, index) => {
            return (
              <Col
                lg={6}
                md={12}
                xs={24}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div className="service">
                  <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </Col>
            );
          })}
          <br />
          <br />
          <p style={{ textAlign: "center" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eligendi ullam numquam ad assumenda neque aliquid laudantium commodi
            tenetur perferendis.
          </p>
        </Row>
      </div>
    );
  }
}
