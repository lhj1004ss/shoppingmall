import React from "react";
import { Button, Descriptions } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";
function ProductInfo(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    // send necessary info to cart page
    dispatch(addToCart(props.detail._id));
  };
  console.log(props.detail);
  return (
    <div style={{ textAlign: "center" }}>
      <Descriptions
        title="Product Information"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Title">
          {props.detail.title}
        </Descriptions.Item>

        <Descriptions.Item label="Price">
          {props.detail.price}
        </Descriptions.Item>

        <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
        {/* <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
        <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item> */}
        <Descriptions.Item label="Description">
          {props.detail.description}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />

      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ marginRight: "1rem" }}
          size="large"
          shape="round"
          type="danger"
          onClick={clickHandler}
        >
          Add to Cart
        </Button>
        <Button size="large" shape="round" type="danger">
          <a href="/user/cart"> View Cart</a>
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
