import React from "react";
import "./UserCardBlock.css";
import { Button } from "antd";

function UserCardBlock(props) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product) => (
      <tr
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid black",
        }}
      >
        <td>
          <img
            style={{ width: "70px", height: "70px" }}
            alt="productImage"
            src={renderCartImage(product.images)}
          />
        </td>
        <td>{product.quantity} EA</td>
        <td>$ {product.price}</td>
        <td>
          <Button danger="true">Remove</Button>
        </td>
      </tr>
    ));

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      <table style={{ textAlign: "center" }}>
        <thead style={{ textAlign: "center" }}>
          <th> Image</th>
          <th> Quantity</th>
          <th> Price</th>
          <th>Remove from Cart</th>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
