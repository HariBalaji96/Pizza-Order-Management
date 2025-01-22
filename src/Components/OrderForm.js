import React from "react";

const OrderForm = ({ setType, setBase, setSize, handleFormData }) => {
  return (
    <div className="OrderForm">
      <form onSubmit={handleFormData} className="formClass">
        <div>
          <label htmlFor="type">Type:</label>
          <select
            className="dropdownField"
            name="type"
            id="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>

        <div>
          <label htmlFor="size">Size:</label>
          <select
            className="dropdownField"
            name="size"
            id="size"
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label htmlFor="base">Base:</label>
          <select
            className="dropdownField"
            name="base"
            id="base"
            onChange={(e) => setBase(e.target.value)}
          >
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
