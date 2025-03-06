import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [them, setThem] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", them);
  }, [them]);

  const handleClick = () => {
    them === "dark" ? setThem("light") : setThem("dark");
  };
  return (
    <div
      style={{
        width: "81vw",
        margin: " 0 auto",
        height: "95vh",
        padding: "1rem 10px",
        backgroundColor: them === "light" ? "white" : "black",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <div
        style={{
          height: "75%",
          marginBottom: "1rem",
        }}
      >
        <div style={{ height: "10%" }}>
          <h2
            style={{
              color: them === "light" ? "black" : "white",
            }}
          >
            {" "}
            Good Morning Everybody{" "}
          </h2>
        </div>
        <hr />
        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            boxShadow:
              them === "light"
                ? "0 4px 8px rgba(0, 0, 0, 0.3)"
                : "0 4px 8px rgba(255,255,255, 0.3)",
            transition: "all 0.2s ease-in-out",
            marginTop: "20px",
            backgroundColor: them === "light" ? "#aaa" : "#333",
          }}
        >
          <h2>Themed Card</h2>
        </div>
        <hr />
        <input
          type="text"
          placeholder="Type here..."
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "20px",
            width: "80%",
            maxWidth: "300px",
            backgroundColor: them === "light" ? "#fff" : "#444",
            color: them === "light" ? "#000" : "#fff",
          }}
        />
        <hr />
        <div
          style={{
            margin: "0 auto",
            width: "40%",
          }}
        >
          <p
            style={{
              color: them === "light" ? "goldenrod" : "cyan",
              fontWeight: "900",
              fontSize: "2rem",
            }}
          >
            {" "}
            Hello World!!
          </p>
        </div>
        <hr />
        <div
          style={{
            color: them === "light" ? "black" : "white",
            marginTop: "2px",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "60px",
            letterSpacing: "3px",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {them === "light" ? "😃 Happy Light Mode" : "😈 Dark Mode Activated"}
        </div>
      </div>
      <div
        style={{
          color: them === "light" ? "black" : "white",
          width: "40%",
          height: "6vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px auto",
          fontWeight: "900",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "40px",
          letterSpacing: "10px",
        }}
      >
        {them === "light" ? "🌞Light " : "🌙Dark"}
      </div>
      <button
        style={{
          backgroundColor: them === "light" ? "black" : "white",
          color: them === "light" ? "white" : "black",
          height: "6vh",
          border: "3px solid cyan",
        }}
        onClick={handleClick}
      >
        Change Theme
      </button>
    </div>
  );
};

export default ThemeChanger;
