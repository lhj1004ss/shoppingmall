import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Title } = Typography;
const { textarea } = Input;

const Kinds = [
  { key: 1, value: "Casual" },
  { key: 2, value: "Sports" },
  { key: 3, value: "Suit" },
  { key: 4, value: "Belt" },
  { key: 5, value: "Cap" },
  { key: 6, value: "Socks" },
  { key: 7, value: "Underwear" },
];

function UploadProductPage() {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState(0);
  const [Price, setPrice] = useState(0);
  const [Kind, setKind] = useState(1);

  const [Images, setImages] = useState([]);

  const nameChangeHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.currentTarget.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.currentTarget.value);
  };

  const kindChangeHandler = (e) => {
    setKind(e.currentTarget.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={1}> Travel Product Upload</Title>
      </div>
      <Form>
        {/* upload*/}
        <br />
        <br />
        <label>Product Name</label>
        <Input onChange={nameChangeHandler} value={Name} />
        <br />
        <br />
        <label>Description</label>
        <TextArea
          onChange={descriptionChangeHandler}
          value={Description}
        ></TextArea>
        <br />
        <br />
        <label>Price</label>
        <Input type="number" onChange={priceChangeHandler} value={Price} />
        <br />
        <br />
        <select onChange={kindChangeHandler} value={Kind}>
          {Kinds.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
