import React from "react";
import { useState } from "react";
const OrderForm = ({ addOrder }) => {
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [base, setBase] = useState("");

  function handleFormData(event) {
    event.preventDefault();
    if (type && size && base) {
      if (size == "Small") {
        var time = 180;
        addOrder({ type, size, base, time });
      } else if (size == "Medium") {
        var time = 240;
        addOrder({ type, size, base, time });
      } else {
        var time = 300;
        addOrder({ type, size, base, time });
      }
      setType("");
      setSize("");
      setBase("");
    } else {
      alert("Please select all fields");
    }
  }

  return (
    <div className="OrderForm">
      <form onSubmit={handleFormData} className="formClass">
        <div>
          <label htmlFor="type">Type:</label>
          <select
            value={type}
            className="dropdownField"
            name="type"
            id="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>

        <div>
          <label htmlFor="size">Size:</label>
          <select
            value={size}
            className="dropdownField"
            name="size"
            id="size"
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label htmlFor="base">Base:</label>
          <select
            value={base}
            className="dropdownField"
            name="base"
            id="base"
            onChange={(e) => setBase(e.target.value)}
          >
            <option value="">Select Base</option>
            <option value="Thick">Thick</option>
            <option value="Thin">Thin</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            name="orderButton"
            id="orderButton"
            value="Place Order"
          />
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
