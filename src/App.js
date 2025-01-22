import "./App.css";
import { useEffect, useState } from "react";
import DisplaySection from "./Components/DisplaySection";
import MainSection from "./Components/MainSection";
import OrderForm from "./Components/OrderForm";

function App() {
  const [type, setType] = useState("Veg");
  const [size, setSize] = useState("Small");
  const [base, setBase] = useState("Thick");
  const [placedOrders, setPlacedOrders] = useState([]);
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState("Placed");

  useEffect(() => {
    const interval = setInterval(() => {
      setSec(sec + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [sec]);

  const [id, setId] = useState(0);
  function handleFormData(event) {
    event.preventDefault();
    const temp = id + 1;
    setId(temp);
    const newOrder = placedOrders;
    newOrder.push([temp, type, size, base]);
    setPlacedOrders(newOrder);
    console.log(placedOrders);
  }

  return (
    <div className="App">
      <header>
        <h1 className="titleText">Pizza Zone</h1>
      </header>
      <OrderForm
        setType={setType}
        setBase={setBase}
        setSize={setSize}
        handleFormData={handleFormData}
      />
      <DisplaySection placedOrders={placedOrders} sec={sec} />
      <MainSection />
    </div>
  );
}

export default App;
