import React from "react";

const DisplaySection = ({ placedOrders, sec }) => {
  return (
    <div className="displaySection">
      <div>
        <h2>Order Placed</h2>
        {placedOrders.map((order) => (
          <div className="Order-Card">
            <span>
              {order[0] < 10 ? "Order 00" + order[0] : "Order 0" + order[0]}
            </span>
            <span>
              {Math.floor(sec / 60)}mins {sec % 60}sec
            </span>
            <button>Next</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Order in making</h2>
      </div>
      <div>
        <h2>Order Ready</h2>
      </div>
      <div>
        <h2>Order Picked</h2>
      </div>
    </div>
  );
};

export default DisplaySection;
