import { useEffect, useRef, useState } from "react";
import data from "./data";
import "./ScrollStyle.css";
const ScrollBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const bottomref = useRef(null);
  const upref = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--wid",
      `${scrollY.toFixed(0)}%`
    );

    const handleScroll = () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollY(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const handleToTopScroll = () => {
    upref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleToBottomScroll = () => {
    bottomref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ width: "79vw", margin: "0 auto" }}>
      <div ref={upref} />

      <div
        style={{
          position: "sticky",
          top: "0",
          width: "100%",
          overflow: "auto",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            color: "white",
            width: "auto",
            padding: "0.5rem",
            backgroundColor: "rgb(1, 179, 255)",
          }}
        >
          SCROLL BAR
        </div>
        <div style={{ border: "1px solid cyan", width: "auto" }}>
          <div className="anim"> </div>
        </div>
      </div>

      <div>
        <button onClick={handleToBottomScroll}> Scroll to bottom</button>
        {data.map((item, index) => {
          return (
            <>
              <p key={index}>{item}</p>
            </>
          );
        })}
        <button onClick={handleToTopScroll}>Scroll to top</button>
      </div>

      <div ref={bottomref} />
    </div>
  );
};

export default ScrollBar;
