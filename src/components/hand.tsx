import React from "react";
import PlayingCard from "./card.tsx";
import { Card, PlayerDetails } from "../types";
import { hitFunc, standFunc } from "./playerActions";

const Hand = ({
  hands,
  drawnCard,
  onSetAllHands,
}: {
  hands: PlayerDetails[];
  drawnCard: Card;
  onSetAllHands: (a: PlayerDetails[]) => void;
}) => {
  const hit = (playerDetails: PlayerDetails, i: number) => {
    hitFunc(playerDetails, i, drawnCard, hands, onSetAllHands);
  };

  const stand = () => {
    standFunc();
  };

  return (
    <>
      {hands.map((playerDetails: PlayerDetails, i: number) => {
        return (
          <div key={playerDetails.name}>
            <h5 className="text-center">{playerDetails.name}</h5>
            <div
              className={`d-flex ${
                playerDetails.name === "dealer" ? "flex-row" : "flex-column"
              }`}
            >
              {playerDetails.hand.map((card: Card) => {
                return (
                  <PlayingCard
                    key={`${card.number}${card.suite}`}
                    number={card.number}
                    suite={card.suite}
                  />
                );
              })}
            </div>

            {
              <div
                className={`${playerDetails.name === "dealer" ? "d-none" : ""}`}
              >
                <div className="d-grid gap-2">
                  <button
                    type="button"
                    className="btn btn-block btn-sm border mx-4"
                    onClick={() => hit(playerDetails, i)}
                  >
                    Hit
                  </button>
                  <button
                    type="button"
                    className="btn btn-block btn-sm border mx-4"
                    onClick={stand}
                  >
                    Stand
                  </button>
                </div>
              </div>
            }
          </div>
        );
      })}
    </>
  );
};

export default Hand;
