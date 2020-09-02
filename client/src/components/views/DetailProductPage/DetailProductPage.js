import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProductInfo from "./Section/ProductInfo";
import ProductImage from "./Section/ProductImage";
import { Row, Col } from "antd";

function DetailProductPage(props) {
  const productId = props.match.params.productId;

  const [Product, setProduct] = useState({});

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "green" }}>{Product.title}</h1>
      </div>
      <br />

      <Row gutter={[16, 16]}>
        {/* product image */}
        <Col lg={12} sm={24}>
          <ProductImage detail={Product} />
        </Col>
        {/* product info */}
        <Col lg={12} sm={24}>
          <ProductInfo detail={Product} />
        </Col>
      </Row>
    </div>
  );
}

export default DetailProductPage;
