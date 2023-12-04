import { useState } from "react";
import AddPlayers from "./components/addPlayers";
import Hand from "./components/hand";

function App() {
  const [players, setPlayers] = useState(["jon"]);
  const [startGame, setStartGame] = useState(false);
  const [deck, setDeck] = useState(() => {
    return createDeck();
  });
  const [allHands, setAllHands] = useState([]);
  const [turn, setTurn] = useState(0);

  const startGameSetup = () => {
    const allPlayers = ["dealer", ...players];
    const tempDeck = [...deck];
    const tempAllHands = [];

    allPlayers.forEach((player) => {
      const playerObject = { name: player, hand: [] };
      const card1 = tempDeck.pop();
      const card2 = tempDeck.pop();

      playerObject.hand.push(card1, card2);
      tempAllHands.push(playerObject);
      setDeck(tempDeck);
    });

    setAllHands(tempAllHands);

    setStartGame(true);
  };

  const onSetAllHands = (setOfHands, playerType) => {
    const dealerHand = allHands[0];
    const playerHands = [...allHands].slice(1, allHands.length);

    const playerDeck = [...deck];

    if (playerType === "dealer") {
      setAllHands([...setOfHands, playerHands]);
    }

    if (playerType === "player") {
      setAllHands([dealerHand, ...setOfHands]);
    }

    playerDeck.pop();
    setDeck(playerDeck);
  };

  if (startGame === false) {
    return (
      <div className="d-flex flex-column justify-content-center m-3">
        <div className="text-center mb-4">
          <b>All players</b>
        </div>
        <div className="d-flex flex-column align-items-center">
          {players.map((player) => {
            return <div key={player}>{player}</div>;
          })}
        </div>
        <div className="">
          <AddPlayers
            players={players}
            onAddPlayers={(newPlayer) => setPlayers([...players, newPlayer])}
          />
        </div>
        <button
          type="button"
          className="btn btn-block border mx-auto col-1 m-5"
          onClick={startGameSetup}
        >
          Start Game
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="m-4">
          <div className="d-flex justify-content-center m-4">
            <Hand
              hands={[...allHands.slice(0, 1)]}
              drawnCard={[...deck].pop()}
              onSetAllHands={(dealerHand) => {
                onSetAllHands(dealerHand, "dealer");
              }}
            />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <Hand
            hands={[...allHands.slice(1, allHands.length)]}
            drawnCard={[...deck].pop()}
            onSetAllHands={(playerHands) =>
              onSetAllHands(playerHands, "player")
            }
          />
        </div>
      </>
    );
  }
}

const createDeck = () => {
  const suits = ["♦️", "♠️", "♥️", "♣️"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let deck = [];

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({
        number: values[i],
        suite: suits[j],
      });
    }
  }

  // for (let k = 0; k < deck.length - 1; k++) {
  //   let rand = Math.floor(Math.random() * k);

  //   [deck[k], deck[rand]] = [deck[rand], deck[k]];
  // }

  return deck;
};
export default App;
