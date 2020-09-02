import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Icon, Col, Card, Row, Button } from "antd";
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Section/CheckBox";
import { kinds, price } from "./Section/Datas";
import RadioBox from "./Section/RadioBox";
import SearchFeature from "./Section/SearchFeature";

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({ kinds: [], price: [] });
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let variables = { skip: Skip, limit: Limit };
    getProducts(variables);
  }, []);

  const renderCard = Products.map((product, index) => {
    console.log(product);

    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          style={{ marginBottom: "1rem" }}
          cover={
            <a href={`/product/${product._id}`}>
              <ImageSlider images={product.images} />
            </a>
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
  const handlePrice = (value) => {
    const data = price;
    let array = [];
    // key first, second index ...to last index
    for (let key in data) {
      // value is 1,2,3...to last number in filters
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;
    // console.log(filters);

    if (category === "price") {
      let priceValue = handlePrice(filters);
      newFilters[category] = priceValue;
    }
    showFilterResults(newFilters);
    setFilters(newFilters);
  };
  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);

    let variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };
    setSkip(0);
    setSearchTerm(newSearchTerm);
    getProducts(variables);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "green" }}>Save your money</h1>
        <h1 style={{ color: "green" }}> Spend Less , Get More</h1>
        {/* search */}
        <div style={{ margin: "1rem auto" }}>
          <SearchFeature refreshFunction={updateSearchTerm} />
        </div>
        {/* filter */}
        {/* checkbox */}
        <Row gutter={[16, 16]}>
          <Col lg={12} xs={24}>
            <CheckBox
              list={kinds}
              handleFilters={(filters) => handleFilters(filters, "kinds")}
            />
            {/* radio box */}
          </Col>
          <Col lg={12} xs={24}>
            <RadioBox
              list={price}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </Col>
        </Row>

        {/* card */}
        <Row gutter={(16, 16)}> {renderCard}</Row>
      </div>

      {PostSize >= Limit && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Button
            style={{
              color: "white",
              background: "green",
              fontWeight: "bold",
            }}
            onClick={loadMoreHandler}
          >
            More Products
          </Button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
