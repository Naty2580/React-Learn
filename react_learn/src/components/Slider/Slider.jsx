import { useState } from "react"
import data from "./Images.js"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./sliderStyle.css"
const Slider = () => {

    const [current , setCurrent ] = useState(0);

    const handleLeft = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    };
    const handleRight = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    };


  return (
    
    <div className="containn"> 
        <div className="slider">
            <button className="left" onClick={handleLeft}> <FaArrowLeft /> </button>
                <div  className="img">
                    <img src={data[current]?.url} alt="" />
                </div>
             <button className="right" onClick={handleRight}> <FaArrowRight /> </button>   
        </div>
        
        <div  className="dots">
            {[...Array(data.length)].map((_, index) => 
                <button key={index}>
                    { index === current ? (
                    <div className="sactive"></div>
                    ) : (
                    <div className="dot"></div>
                    )}
                </button>
            )}
        </div>
    </div>
  )
}

export default Slider