const HomePage = () => {
  const containerStyle = {
    display: "flex",
    width: "85vw",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    color: "#ffffff",
    overflow: "hidden",
    textAlign: "center",
    position: "fixed",
    margin: "0px",
    zIndex: 20,
  };

  const titleStyle = {
    display: "flex",
    width: "83vw",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: "1rem auto",
    alignItems: "center",
    fontSize: "1.8rem",
    fontWeight: "700",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.69)",
    zIndex: 20,
    color: "cyan",
  };

  const subtitleStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  };

  const otherAnimations = Array.from({ length: 5 }).map((_, i) => {
    const size = `${Math.random() * 120 + 5}px`;
    const left = `${Math.random() * 80}vw`;
    const top = `${Math.random() * 94}vh`;
    const animationDuration = `${Math.random() * 8 + 2}s`;
    return (
      <div
        key={`extra-${i}`}
        style={{
          position: "absolute",
          width: size,
          height: size,
          left,
          zIndex: -200,
          top,
          backgroundColor: `hsl(${Math.random() * 360}, 40%, 20%)`,
          borderRadius: "30%",
          opacity: 0.8,
          animation: "pulse 5s infinite ease-in-out",
          animationDuration,
        }}
      ></div>
    );
  });
  const rotatingCube = Array.from({ length: 3 }).map((_, i) => {
    const size = `${Math.random() * 60 + 25}px`;
    const left = `${Math.random() * 96 + 1}%`;
    const top = `${Math.random() * 95}%`;
    return (
      <div
        key={`extra-${i}`}
        style={{
          position: "absolute",
          width: size,
          zIndex: -200,
          size: size,
          left: left,
          top: top,
          height: size,
          backgroundColor: `hsl(${Math.random() * 360}, 90%, 30%)`,
          transformOrigin: "center",
          animation: "rotateCube 10s infinite linear",
        }}
      ></div>
    );
  });

  const shimmeringStar = Array.from({ length: 20 }).map((_, i) => {
    const left = `${Math.random() * 90}%`;
    const top = `${Math.random() * 100}%`;
    return (
      <div
        key={`extra-${i}`}
        style={{
          position: "absolute",
          left: left,
          zIndex: -200,
          top: top,
          width: "20px",
          height: "20px",
          backgroundColor: `hsl(${Math.random() * 360}, 90%, 80%)`,
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          animation: "blinkAndMove 4s infinite ease-in-out",
        }}
      ></div>
    );
  });
  const titleText = "W elcome to my website";
  const subtitleText = "Have fun  ";

  return (
    <>
      <div>
        <div style={containerStyle}>
          <div style={{ textAlign: "center", padding: "2px" }}>
            {/* Title with each letter animated */}
            <div style={titleStyle}>
              {titleText.split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: "900",
                    fontFamily: "monospace",
                    animation: " changeColor 7s infinite ease-in-out",
                    animationDelay: `${index + Math.random() * 10}s`,
                    color: "cyan",
                    marginRight: "1vw",
                  }}
                >
                  {char}
                </span>
              ))}
            </div>

            <div
              style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}
            >
              <h1 style={{ fontSize: "1.9rem" }}>
                Hey there! 👋 I am{" "}
                <span style={{ color: " #22ffff", fontWeight: "bold " }}>
                  Natnael Tesfaye
                </span>
              </h1>
              <h1
                style={{
                  width: "70vw",
                  fontFamily: "monospace",
                  padding: "1rem",
                  fontSize: "1rem",
                  alignSelf: "center",
                  margin: "auto",
                }}
              >
                A developer who loves coding, coffee ☕, and creativity. When I
                am m not building with the MERN stack, you’ll find me crafting
                animations or designing sleek visuals. Lets make something
                awesome together!
              </h1>
            </div>

            <div
              style={{
                padding: "1rem",
                backgroundColor: "rgba(0,0,0,0)",
                borderRadius: "8px",
                boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 style={{ fontFamily: " Arial, sans-serif" }}>Fun Facts </h2>

              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: "0",
                  margin: "0.51rem 0",
                }}
              >
                <li
                  style={{
                    margin: "0.5rem 0",
                    fontFamily: "monospace",
                    fontSize: "1rem",
                  }}
                >
                  ⚡ Turning coffee into code (superpower unlocked)
                </li>
                <li
                  style={{
                    margin: "0.5rem 0",
                    fontFamily: "monospace",
                    fontSize: "1rem",
                  }}
                >
                  🚀 Always up for new challenges
                </li>
                <li
                  style={{
                    margin: "0.5rem 0",
                    fontFamily: "monospace",
                    fontSize: "1rem",
                  }}
                >
                  🚀 Beating you ass🐕‍🦺
                </li>
              </ul>
            </div>

            {/* Subtitle with random color changes for each letter */}
            <div style={subtitleStyle}>
              {subtitleText.split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    animation: "changeColor 3s infinite ease-in-out",
                    animationDelay: `${index * 0.2}s`,
                    marginRight: "1vw",
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {otherAnimations}
          {rotatingCube}
          {shimmeringStar}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
         
  
     @keyframes changeColor {
    0% { color: rgba(0,255,255,0.25); }
    25% { color: rgba(0,255,255,0.45); }
    50% { color: rgba(0,255,255,0.65); }
    75% { color: rgba(0,255,255,0.85); }
    100% { color: rgba(0,255,255,1); }
  }

   
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes floatUp {
          0% { transform: translateY(90vh); opacity: 0.5; }
          50% { opacity: 1; }
          100% { transform: translateY(-90vh); opacity: 0.5; }
        }
          @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 0.6; }
        }
           @keyframes rotateCube {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

           @keyframes blinkAndMove {
            0% {
              opacity: 0;
              top: ${Math.random() * 100 + 1}%;
              left: ${Math.random() * 100 + 1}%;
            }
            25% {
              opacity: 1;
              top: ${Math.random() * 100 + 1}%;
              left: ${Math.random() * 100 + 1}%;
            }
            50% {
              opacity: 0;
              top: ${Math.random() * 100 + 1}%;
              left: ${Math.random() * 100 + 1}%;
            }
            75% {
              opacity: 1;
              top: ${Math.random() * 100 + 1}%;
              left: ${Math.random() * 100 + 1}%;
            }
            100% {
              opacity: 0;
              top: ${Math.random() * 100 + 1}%
              left: ${Math.random() * 100 + 1}%;
            }
          }

         
      `}</style>
    </>
  );
};

export default HomePage;
