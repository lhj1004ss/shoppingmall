import React from "react";
import { Row, Col } from "antd";

function Footer() {
  return (
    <Row>
      <Col lg={24} md={24} xs={24}>
        <div
          style={{
            textAlign: "center",
            background: "lightgray",
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            color: "darkgreen",
          }}
        >
          <br />
          <a style={{ color: "darkgreen" }}>HYOJE LEE </a> <br />
          <a style={{ color: "darkgreen" }}>hyojelee100ss@gmail.com </a>
          <br />
          <a style={{ color: "darkgreen" }}>Computer Engineering Techonology</a>
          <br />
          <a style={{ color: "darkgreen" }}>Humber College</a> <br />
          <a style={{ color: "darkgreen" }}>Toronto, Ontario, Canada</a> <br />
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
