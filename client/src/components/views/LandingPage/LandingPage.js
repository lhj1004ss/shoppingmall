import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Icon, Col, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";

function LandingPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    let variables = {};
    axios.post("/api/product/products").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setProducts(response.data.productInfo);
      } else {
        alert("failed to get products");
      }
    });
  }, []);

  const renderCard = Products.map((product, index) => {
    console.log(product);

    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          cover={
            <ImageSlider images={product.images} />
            // <img
            //   style={{ width: "100%", maxHeight: "150px" }}
            //   src={`http://localhost:5000/${product.images[0]}`}
            // />
          }
        >
          <Meta
            title={product.title}
            //   description={product.description}
            description={`$${product.price}`}
          />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Be yourself</h2>

        {/* filer */}

        {/* search */}

        {/* card */}
        <Row gutter={(16, 16)}> {renderCard}</Row>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
