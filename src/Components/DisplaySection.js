import React from "react";

const DisplaySection = ({ orders, moveToNextStage }) => {
  return (
    <div className="displaySection">
      <div>
        <h2>Order Placed</h2>
        {orders
          .filter((order) => order.stage == "Order Placed")
          .map((order) => (
            <div
              className="Order-Card"
              style={
                order.stageTimes[order.stage] > 180
                  ? { backgroundColor: "red" }
                  : {}
              }
            >
              <span>
                {order.id < 10 ? "Order 00" + order.id : "Order 0" + order.id}
              </span>
              <span>
                {Math.floor(order.stageTimes[order.stage] / 60) +
                  " min " +
                  (order.stageTimes[order.stage] % 60) +
                  " sec"}
              </span>
              <button onClick={() => moveToNextStage(order.id)}>Next</button>
            </div>
          ))}
      </div>

      <div>
        <h2>Order in making</h2>
        {orders
          .filter((order) => order.stage == "Order in Making")
          .map((order) => (
            <div className="Order-Card">
              <span>
                {order.id < 10 ? "Order 00" + order.id : "Order 0" + order.id}
              </span>
              <span>
                {Math.floor(order.stageTimes[order.stage] / 60) +
                  " min " +
                  (order.stageTimes[order.stage] % 60) +
                  " sec"}
              </span>
              <button onClick={() => moveToNextStage(order.id)}>Next</button>
            </div>
          ))}
      </div>
      <div>
        <h2>Order Ready</h2>
        {orders
          .filter((order) => order.stage == "Order Ready")
          .map((order) => (
            <div className="Order-Card">
              <span>
                {order.id < 10 ? "Order 00" + order.id : "Order 0" + order.id}
              </span>
              <span>
                {Math.floor(order.stageTimes[order.stage] / 60) +
                  " min " +
                  (order.stageTimes[order.stage] % 60) +
                  " sec"}
              </span>
              <button onClick={() => moveToNextStage(order.id)}>Next</button>
            </div>
          ))}
      </div>
      <div>
        <h2>Order Picked</h2>
        {orders
          .filter((order) => order.stage == "Order Picked")
          .map((order) => (
            <div className="Order-Card">
              <span>
                {order.id < 10 ? "Order 00" + order.id : "Order 0" + order.id}
              </span>

              <span>Picked</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplaySection;
