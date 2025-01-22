import React from "react";

const MainSection = ({
  orders,
  cancelOrder,
  calculateTotalTime,
  totalDelivered,
}) => {
  return (
    <div className="MainSection">
      <table border={2}>
        <thead>
          <tr>
            <td>Order ID</td>
            <td>Stage</td>
            <td>Total Time Spend</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.stage != "Order Picked")
            .map((order) => (
              <tr key={order.id}>
                <td>
                  {order.id < 10 ? "Order 00" + order.id : "Order 0" + order.id}
                </td>
                <td>{order.stage}</td>
                <td>
                  {Math.floor(calculateTotalTime(order) / 60) +
                    " min " +
                    (calculateTotalTime(order) % 60) +
                    " sec "}
                </td>
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
        <tfoot>
          <tr>
            <td colSpan={4} id="tfooter">
              Total Order Delivered Today : {totalDelivered}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MainSection;
