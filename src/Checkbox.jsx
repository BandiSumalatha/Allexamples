import React, { useState } from "react";
// import DropdownItem from "react-bootstrap/DropdownItem";

const CheckBox = () => {
  const array = ["banana", "apple", "grape", "sapota"];
  const [options, setOptions] = useState(array);
  const [checkval, setCheckval] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setChecked(true);
    let arr = [...checkval];
    if (checked) {
      arr = [...checkval, value];
    } else {
      arr = arr.splice(checkval.indexOf(value), 1);
    }
    setCheckval(arr);
  };
  const handleClick = (i) => {
    let newArr = options;
    let filteredarr = newArr.filter((item, index) => {
      return index !== i;
    });
    setOptions(filteredarr);
  };

  return (
    <div>
      <ul>
        {options.map((item, index) => {
          return (
            <div>
              <li key={index}>
                <input
                  type="checkbox"
                  name={item}
                  value={item}
                  onChange={handleChange}
                />
                {item}
                {checked && <button onClick={()=>handleClick(index)}>delete</button>}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckBox;
