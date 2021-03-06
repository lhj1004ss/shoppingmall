import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleCheckBox = (value) => {
    //find pressed checkbox
    const currentIndex = Checked.indexOf(value);

    //if there is checked one in state already
    //-1 means there is no value in index
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      // put it into state
      newChecked.push(value);
    } else {
      // remove it

      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    // send setcheck to parent component
    props.handleFilters(newChecked);
  };

  const renderCheckBoxList = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleCheckBox(value._id)}
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span style={{ marginRight: "1rem" }}>{value.name}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse style={{ color: "white" }} defaultActiveKey={[""]}>
        <Panel style={{ background: "green" }} header="Types" key="1">
          {renderCheckBoxList()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
