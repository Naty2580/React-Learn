import { useEffect, useState } from "react";
import "./xoStyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const XOGame = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cur } = location.state || {};

  const [gameOver, setGameOver] = useState(false);
  const [gameDraw, setGameDraw] = useState(false);
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");
  const [val6, setVal6] = useState("");
  const [val7, setVal7] = useState("");
  const [val8, setVal8] = useState("");
  const [val9, setVal9] = useState("");

  useEffect(() => {
    if (
      (val1 && val1 === val4 && val4 === val7) ||
      (val2 && val2 === val5 && val5 === val8) ||
      (val3 && val3 === val6 && val6 === val9) ||
      (val1 && val1 === val2 && val2 === val3) ||
      (val4 && val4 === val5 && val5 === val6) ||
      (val7 && val7 === val8 && val8 === val9) ||
      (val1 && val1 === val5 && val5 === val9) ||
      (val3 && val3 === val5 && val5 === val7)
    ) {
      setGameOver(true);
    } else if (
      val1 !== "" &&
      val2 !== "" &&
      val3 !== "" &&
      val4 !== "" &&
      val5 !== "" &&
      val6 !== "" &&
      val7 !== "" &&
      val8 !== "" &&
      val9 !== ""
    ) {
      setGameDraw(true);
    }
  }, [val1, val2, val3, val4, val5, val6, val7, val8, val9]);

  const [curent, setCurrent] = useState(cur);

  const reset = () => {
    setVal1("");
    setVal2("");
    setVal3("");
    setVal4("");
    setVal5("");
    setVal6("");
    setVal7("");
    setVal8("");
    setVal9("");
    setCurrent(true);
    setGameOver(false);
    setGameDraw(false);
  };

  return (
    <div
      style={{
        width: "80vw",
        marginLeft: "2vw",
        height: "99vh",
        fontFamily: "'Press Start 2P', cursive",
        textAlign: "center",
      }}
    >
      {gameOver && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.9)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
            height: "93%",
            width: "76%",
            animation: "fadeIn 1s ease-in-out",
            position: "absolute",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textShadow: "2px 2px 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            The winner is {!curent ? "X" : "O"} 🎉
          </div>

          <button
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              margin: " 2px 4vw",
              float: "left",
              border: "5px solid cyan",
            }}
            onClick={() => navigate("/xostart")}
          >
            <FaHome />
          </button>
          <button
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              margin: "10px auto",
              padding: "10px 20px",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.3s",
            }}
            onClick={() => {
              reset();
              setGameOver(false);
              setGameDraw(false);
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Play Again
          </button>
        </div>
      )}
      {gameDraw && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.9)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",

            animation: "fadeIn 1s ease-in-out",
            width: "76%",
            height: "90%",
            position: "absolute",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textShadow: "2px 2px 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            DRAW ! 😑
          </div>

          <button
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              margin: " 2px 4vw",
              float: "left",
              border: "5px solid cyan",
            }}
            onClick={() => navigate("/xostart")}
          >
            <FaHome />
          </button>
          <button
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              margin: "10px auto",
              padding: "10px 20px",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.3s",
            }}
            onClick={() => {
              reset();
              setGameOver(false);
              setGameDraw(false);
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Play Again
          </button>
        </div>
      )}

      <div
        style={{
          width: "90%",
          height: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1a1a2e",
          alignItems: "center",
          padding: "auto",
        }}
      >
        {curent ? (
          <div >X Turn</div>
        ) : (
          <div >O Turn</div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "90%",
          }}
        >
          <div className="xocont">
            <div
              className="btns"
              onClick={() => {
                if (val1 === "") {
                  setVal1(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val1}
            </div>
            <div
              className="btns"
              onClick={() => {
                if (val2 === "") {
                  setVal2(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val2}
            </div>
            <div
              className="btns"
              onClick={() => {
                if (val3 === "") {
                  setVal3(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val3}
            </div>
            <div
              className="btns"
              onClick={() => {
                if (val4 === "") {
                  setVal4(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val4}
            </div>
            <div
              className="btns"
              onClick={() => {
                if (val5 === "") {
                  setVal5(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val5}
            </div>
            <div
              className="btns"
              onClick={() => {
                if (val6 === "") {
                  setVal6(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val6}
            </div>
            <div
              className="btns"
              onClick={() => {
                if (val7 === "") {
                  setVal7(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val7}
            </div>
            <div
              className="btns"
              onClick={() => {
                if (val8 === "") {
                  setVal8(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val8}
            </div>
            <div
              className="btns"
              onClick={() => {
                if (val9 === "") {
                  setVal9(curent ? "X" : "O");
                  setCurrent(!curent);
                }
              }}
            >
              {val9}
            </div>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <button
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              margin: " 2px 4vw",
              float: "left",
              border: "5px solid cyan",
            }}
            onClick={() => navigate("/xostart")}
          >
            <FaHome />
          </button>

          <button
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              margin: " 1px auto",
              float: "right",
              border: "5px solid cyan",
            }}
            onClick={reset}
          >
            {" "}
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default XOGame;
