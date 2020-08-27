import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Icon, Col, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Section/CheckBox";
import { kinds } from "./Section/Datas";

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({ kinds: [], price: [] });

  useEffect(() => {
    let variables = { skip: Skip, limit: Limit };
    getProducts(variables);
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
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const getProducts = (variables) => {
    axios.post("/api/product/products", variables).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.productInfo]);
        } else {
          setProducts(response.data.productInfo);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("failed to get products");
      }
    });
  };
  const loadMoreHandler = () => {
    console.log("clicked");
    //          0+8
    let skip = Skip + Limit;
    let variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };

    getProducts(variables);
    setSkip(skip);
  };

  const showFilterResults = (filters) => {
    let variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;

    showFilterResults(newFilters);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Back to School Deal</h1>
        <h1>Be yourself</h1>

        {/* filter */}

        {/* checkbox */}
        <CheckBox
          list={kinds}
          handleFilters={(filters) => handleFilters(filters, "kinds")}
        />
        {/* radio box */}

        {/* search */}

        {/* card */}
        <Row gutter={(16, 16)}> {renderCard}</Row>
      </div>

      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
