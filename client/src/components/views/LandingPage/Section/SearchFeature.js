import React, { useState } from "react";
import { Input } from "antd";
const { Search } = Input;
function SearchFeature(props) {
  const [SearchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.currentTarget.value);
    props.refreshFunction(e.currentTarget.value);
  };
  return (
    <div>
      <Search
        style={{ width: "100%", height: "3rem" }}
        placeholder="Search Clothing"
        onChange={searchHandler}
        value={SearchTerm}
      ></Search>
    </div>
  );
}

export default SearchFeature;
