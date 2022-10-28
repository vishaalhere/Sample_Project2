import React, { useEffect } from "react";
import mockData from "../mockData";
import Card from "./Card";
import './Card.css';

const Child = () => {
  const [jsonData, setJsonData] = React.useState([]);
  useEffect(() => {
    let names = {};
    let filteredData = mockData.packet.suppliers.filter((obj) => {

      if (obj.supplierType === "OEM Supplier" && !names[obj.name]) {
        obj.rating = Math.round(obj.rating);
        names[obj.name] = 1;
        return true;
      }
      
    });
    setJsonData(filteredData);
  }, []);

  return (
    <div className="container">
      {jsonData.length > 0 &&
        jsonData.map((obj) => {
          return <Card key={obj.id} cardData={obj} />;
        })}
    </div>
  );
};

export default Child;
