import { useEffect, useState } from "react"
import "./randomColorStyle.css"
const RandomColor = () => {
  const [value, setValue] = useState("#2a2a2a");
  const [choice, setChoice] = useState("hex");

 let ids;
 let answer="5px solid white";
 let ids2;
 let answe2r="none";

 if (choice === "hex") {
  ids = "--selbtnborhex";
  answe2r="none";
  ids2 = "--selbtnborrgb";
  answer="3px dashed white";
 }else {
  ids = "--selbtnborhex";
  answer="none";
  ids2 = "--selbtnborrgb";
  answe2r="3px dashed white";
 }


  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bgroot",
      value
    );
    document.documentElement.style.setProperty(
      ids,
      answer
    );
    document.documentElement.style.setProperty(
      ids2,
      answe2r
    );

    // Cleanup function
    return () => {
      document.documentElement.style.setProperty("--bgroot", "#2a2a2a");
      document.documentElement.style.setProperty("--selbtnborhex", "none");
      document.documentElement.style.setProperty("--selbtnborrgb", "none");
    };
  }, [value,answer,ids, ids2, answe2r]);


  const getRandomColorRGB = () => {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
  };

  const getRandomColorHex = () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16); 
    return `#${randomHex.padStart(6, "0")}`; 
  };

  const handleGenerate = () => {
    if (choice === "hex") {
      setValue(getRandomColorHex());
    } else {
      setValue(getRandomColorRGB());
    }
  }

  return (
    <div className="container">
      <div className="header">
          <span> {value}</span>
      </div>
      <div className="generator">
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <div className="selector">
        <button id="hex" onClick={() => setChoice("hex")}> <p>use hex value </p></button>
        <button id="rgb" onClick={() => setChoice("rgb")}><p>use rgb value  </p></button>
      </div>
    </div>
  )
}

export default RandomColor;