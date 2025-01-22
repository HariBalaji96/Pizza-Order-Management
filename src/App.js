import "./App.css";
import { useEffect, useState } from "react";
import DisplaySection from "./Components/DisplaySection";
import MainSection from "./Components/MainSection";
import OrderForm from "./Components/OrderForm";

function App() {
  const MAX_ORDERS = 10;
  const [orders, setOrders] = useState([]);
  const [totalDelivered, setTotalDelivered] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(0);
  const [id, setId] = useState(0);

  const addOrder = (pizza) => {
    if (pizzaCount < MAX_ORDERS) {
      const newOrder = {
        id: id + 1,
        ...pizza,
        stage: "Order Placed",
        stageTimes: {
          "Order Placed": 0,
          "Order in Making": 0,
          "Order Ready": 0,
          "Order Picked": 0,
        },
        stageStartTimes: { "Order Placed": Date.now() },
      };
      setOrders((prevOrders) => [...prevOrders, newOrder]);
      setPizzaCount(pizzaCount + 1);
      setId(id + 1);
    } else {
      alert("Not taking any order for now");
    }
  };

  useEffect(() => {
    const intervals = orders.map((order) => {
      if (order.stage !== "Order Picked") {
        const interval = setInterval(() => {
          setOrders((prevOrders) =>
            prevOrders.map((o) =>
              o.id === order.id
                ? {
                    ...o,
                    stageTimes: {
                      ...o.stageTimes,
                      [order.stage]: Math.floor(
                        (Date.now() - o.stageStartTimes[order.stage]) / 1000
                      ),
                    },
                    totalTime: calculateTotalTime(o),
                  }
                : o
            )
          );
        }, 1000);
        return interval;
      }
      return null;
    });

    return () => {
      intervals.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [orders]);

  const moveToNextStage = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          const stages = [
            "Order Placed",
            "Order in Making",
            "Order Ready",
            "Order Picked",
          ];
          const currentStageIndex = stages.indexOf(order.stage);
          if (currentStageIndex < stages.length - 1) {
            const nextStage = stages[currentStageIndex + 1];
            if (currentStageIndex == 2) {
              setTotalDelivered(totalDelivered + 1);
              setPizzaCount(pizzaCount - 1);
            }
            return {
              ...order,
              stage: nextStage,
              stageStartTimes: {
                ...order.stageStartTimes,
                [nextStage]: Date.now(),
              },
            };
          }
        }
        return order;
      })
    );
  };

  const cancelOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    setPizzaCount(pizzaCount - 1);
  };

  const calculateTotalTime = (order) => {
    const stages = [
      "Order Placed",
      "Order in Making",
      "Order Ready",
      "Order Picked",
    ];
    const totalTime = stages.reduce((acc, stage) => {
      return acc + order.stageTimes[stage];
    }, 0);
    return totalTime;
  };

  return (
    <div className="App">
      <header>
        <h1 className="titleText">Pizza Zone</h1>
      </header>
      <OrderForm addOrder={addOrder} />
      <DisplaySection orders={orders} moveToNextStage={moveToNextStage} />
      <MainSection
        orders={orders}
        cancelOrder={cancelOrder}
        calculateTotalTime={calculateTotalTime}
        totalDelivered={totalDelivered}
      />
    </div>
  );
}

export default App;
