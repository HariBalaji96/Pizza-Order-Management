import React from "react";

const MainSection = ({ orders, cancelOrder, calculateTotalTime }) => {
  return (
    <div className="MainSection">
      <table border={2}>
        <thead>
          <td>Order ID</td>
          <td>Stage</td>
          <td>Total Time Spend</td>
          <td>Action</td>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.stage != "Order Picked")
            .map((order) => (
              <tr>
                <td>
                  {order.id < 10 ? "Order 00" + order.id : "Order 0" + order.id}
                </td>
                <td>{order.stage}</td>
                <td>{calculateTotalTime(order)}</td>
                {order.stage != "Order Ready" ? (
                  <td>
                    <button onClick={() => cancelOrder(order.id)}>
                      Cancel
                    </button>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainSection;
