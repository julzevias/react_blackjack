export const hitFunc = (
  playerDetails,
  i,
  drawnCard,
  playerHands,
  onSetAllHands
) => {
  const hand = [...playerDetails.hand];

  hand.push(drawnCard);
  playerDetails.hand = hand;

  [playerHands[i], playerDetails] = [playerDetails, playerHands[i]];

  onSetAllHands(playerHands);
};

export const standFunc = () => {
  console.log("byei");
};
