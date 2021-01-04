import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";
import Tabs from "./components/Tabs";
import { FaBeer } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  //Fetch data from api
  useEffect(() => {
    async function fetchData() {
      const apiURl =
        "https://raw.githubusercontent.com/ctrlx-altf4/fakeAPI/master/f1soft.json";
      const response = await fetch(apiURl);
      setData(await response.json());
    }
    fetchData();
  }, []);

  //preprocessing the data to have {breakfast:[],lunch:[],dinner:[]} form
  if (!data.length) return <div />;
  const reducedData = data.reduce((obj, d) => {
    if (obj[d.category]) {
      return { ...obj, [d.category]: [...obj[d.category], { ...d }] };
    } else {
      return { ...obj, [d.category]: [{ ...d }] };
    }
  }, {});
  return (
    <div className="container">
      {/* Title */}
      <div className="title-container">
        <h1 className="title">Foodie</h1>
      </div>

      <Tabs>
        {/* Breakfast tab */}
        <div
          label="Breakfast"
          icon={
            <MdFreeBreakfast
              style={{ background: "transparent", color: "white" }}
              color="white"
            />
          }
        >
          {reducedData.breakfast.map((e, i) => (
            <Card
              key={i}
              title={e.title}
              description={e.description}
              time={e.time}
              qty={e.qty}
              price={e.price}
              img={e.img}
            />
          ))}
        </div>

        {/* Lunch Tab */}
        <div
          label="Lunch"
          icon={
            <FaBeer
              style={{ background: "transparent", color: "white" }}
              color="white"
            />
          }
        >
          {reducedData.lunch.map((e, i) => (
            <Card
              key={i}
              title={e.title}
              description={e.description}
              time={e.time}
              qty={e.qty}
              price={e.price}
              img={e.img}
            />
          ))}
        </div>

        {/* Dinner Tab */}
        <div
          label="Dinner"
          icon={
            <FaBeer
              style={{ background: "transparent", color: "white" }}
              color="white"
            />
          }
        >
          {reducedData.dinner.map((e, i) => (
            <Card
              key={i}
              title={e.title}
              description={e.description}
              time={e.time}
              qty={e.qty}
              price={e.price}
              img={e.img}
            />
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default App;
