import { useState, useEffect } from "react";

export default function Cpt() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning ☀️");
    } else if (hours < 18) {
      setGreeting("Good Afternoon 🌤");
    } else {
      setGreeting("Good Evening 🌙");
    }
  }, []);

  return (
    <div
      style={{
        width: "84vw",
        height: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div style={{ width: "80%", textAlign: "center" ,animation: "fadeIn 1s ease-in-out",}}>
        {/* Animated Character */}
        <div
          style={{
            fontSize: "60px",
            animation: "wave 10s infinite",
          }}
        >
          🤖
        </div>

        {/* Dynamic Greeting */}
        <h3 style={{ color: "white", fontSize: "20px", marginBottom: "5px" }}>
          {greeting}!
        </h3>

        <h2
          style={{
            color: "cyan",
            fontSize: "26px",
            textShadow: "0px 0px 8px #00FFFF",
            animation: "textGlow 3s infinite alternate",
          }}
        >
          Welcome to My Components Folder! 🎉
        </h2>

        <p
          style={{
            color: "white",
            fontSize: "18px",
            opacity: 0.9,
            transition: "opacity 0.5s",
          }}
        >
          This folder contains all the amazing components I have built! 🚀  
          Click the <b>down arrow</b> to explore what is inside.  
          Each component is crafted with love ❤️ and optimized for performance!  
        </p>

        <p style={{ fontStyle: "italic", color: "cyan", marginTop: "10px" }}>
          Go ahead, explore and have fun! ✨
        </p>
      </div>

      {/* Inline Keyframes Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes wave {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(360deg); }
            50% { transform: rotate(-360deg); }
            75% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }

          @keyframes textGlow {
            0% { text-shadow: 0px 0px 4px cyan; }
            100% { text-shadow: 0px 0px 10px cyan; }
          }
        `}
      </style>
    </div>
  );
}
