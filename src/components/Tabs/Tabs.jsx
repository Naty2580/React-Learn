import { useState } from "react";
import Contents from "./Contents";

const Tabs = () => {
  const [C, setC] = useState(Contents[0].content);
  const [active, setActive] = useState(Contents[0].id);
  const handleClick = (id) => {
    setC(Contents.find((item) => item.id === id).content);
    setActive(id);
  };
  return (
    <div
      style={{
        width: "79vw",
        height: "95vh",
        padding: "0.5rem",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem auto",
          gap: "10px",
        }}
      >
        {Contents.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              style={{
                backgroundColor: item.id === active ? "cyan" : "transparent",
                color: item.id === active ? "black" : "white",
                border: "2px solid #fff",
                borderRadius: "10px",
              }}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          width: "100%",
          height: "80%",
          margin: "0 auto",
          border: "5px solid cyan",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {C}
      </div>
    </div>
  );
};

export default Tabs;
