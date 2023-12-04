import React, { useState } from "react";

const AddPlayers = ({ onAddPlayers, players }) => {
  const [addPlayer, setAddPlayer] = useState(false);

  const submitPlayer = (e) => {
    e.preventDefault();

    setAddPlayer(false);

    if (e.target[0].value !== "dealer") {
      onAddPlayers(e.target[0].value);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn border"
          onClick={() => {
            setAddPlayer(true);
          }}
        >
          Add Player
        </button>
      </div>

      <div className={addPlayer === false ? "d-none" : ""}>
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={submitPlayer}
        >
          <div className="form-group p-2">
            <label htmlFor="playerName">First name</label>
            <input
              type="text"
              className="form-control"
              id="playerName"
              placeholder="John"
              required
            />
          </div>
          <button type="submit" className="btn border">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPlayers;
