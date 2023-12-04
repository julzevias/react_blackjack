import React from "react";
import Card from "./card";

const Hand = ({ playerHands }) => {
  return (
    <>
      {playerHands.map((playerDetails) => {
        return (
          <div key={playerDetails.name}>
            <h5 className="text-center">{playerDetails.name}</h5>
            <div
              className={`d-flex ${
                playerDetails.name === "dealer" ? "flex-row" : "flex-column"
              }`}
            >
              {playerDetails.hand.map((card) => {
                return (
                  <Card
                    key={`${card.number}${card.suite}`}
                    number={card.number}
                    suite={card.suite}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Hand;
