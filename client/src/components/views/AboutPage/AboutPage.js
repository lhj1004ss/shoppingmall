import React from "react";
import { Col, Row } from "antd";
import about from "../../../images/about.jpg";

function AboutPage() {
  return (
    <div>
      <Row
        gutter={[48, 48]}
        style={{ height: "65vh", maxWidth: "100%", margin: "0 auto" }}
      >
        <h1
          style={{ marginTop: "2rem", textAlign: "center", marginTop: "2rem" }}
        >
          About Us
        </h1>
        <hr />
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Col lg={12} md={12} xs={24}>
            <img style={{ width: "100%", height: "300px" }} src={about} />
          </Col>
          <Col>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            nostrum deleniti qui quam, quis nam necessitatibus dolorem corporis
            id cupiditate. Illum libero pariatur, soluta odit dolor assumenda
            iure accusantium expedita iusto! Earum dignissimos facilis neque
            aliquam, est aspernatur dolore illo aperiam similique odio. Quaerat
            cumque aut voluptatem similique rerum neque! Lorem ipsum dolor sit
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default AboutPage;
