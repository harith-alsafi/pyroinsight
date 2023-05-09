import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              status={card.status}
              panel={card.panel}
              series={card.series}
              zones={card.zones}
              devices={card.devices}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
