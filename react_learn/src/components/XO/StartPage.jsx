import { useState } from "react";
import "./xoStyle.css";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  const [cur, setCur] = useState(true); // Default to X

  return (
    <div className="xostart">
      <div className="welcome-container">
        <h1>Welcome to XO Game</h1>
        <div className="rules-container">
          <h2>Game Rules</h2>
          <p>1. The game is played on a 3x3 grid.</p>
          <p>2. Players take turns placing their symbol (X or O).</p>
          <p>
            3. The first player to align 3 symbols horizontally, vertically, or
            diagonally wins.
          </p>
          <p>4. If the grid is full and no player has won, it is a draw.</p>
        </div>
        <div>
          <p>select who starts the game</p>
          <select
            name="cur"
            id="cur"
            style={{
              padding: "10px 15px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              background: "rgba(0, 0, 0, 0.6)",
              color: "white",
              outline: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
              marginRight: "15vw",
            }}
            onChange={(e) => setCur(e.target.value === "true")}
          >
            <option
              value="true"
              style={{
                background: "black",
                color: "white",
                padding: "10px",
              }}
            >
              X
            </option>
            <option
              value="false"
              style={{
                background: "black",
                color: "white",
                padding: "10px",
              }}
            >
              O
            </option>
          </select>

          <button
            className="start-button"
            onClick={() => navigate("/xo", { state: { cur } })}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
