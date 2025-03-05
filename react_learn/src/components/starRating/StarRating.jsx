import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRatingStyle.css";
import PropTypes from 'prop-types';

const StarRating = () => {
  const [clicked, setClicked] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [starsNo, setStarsNo] = useState(5);


  const handleClick = (index) => {
    setClicked(index);
  };

  const handleHover = (endex) => {
    setHovered(endex);
  };

  const handleLeave = () => {
    setHovered(clicked);
  };

  const handleLeave2 = () => {
    if (clicked === 0) setHovered(0);
  };

  const handleSubmit = () => {
    alert(`thanks, You have rated ${clicked} stars`);
    setHovered(0);
    setClicked(0);
  };


  const handleInputChange = (e) => {
    if (e.target.value > 70) return
    setStarsNo(Number(e.target.value)); 
  };


  return (
    <div onMouseLeave={handleLeave2} className="co">
      <form >
      <label><p>Number of stars <strong>70 is the limit</strong></p></label>
      <input type="number" value={starsNo} min="0" max="70" onChange={ handleInputChange} />
      </form>
      
      <div className="star-rating">
        {[...Array(starsNo)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hovered || clicked) ? "star-filled" : "star"}
              onMouseMove={() => handleHover(index)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(index)}
              size={50}
            />
            
          );
        })}

      <p> you have ratted {hovered || clicked} stars</p>
      <button onClick={handleSubmit}>Rate</button>
      
      </div>
      
    </div>
  );
};

StarRating.propTypes = {
  starsNo: PropTypes.number,
};
export default StarRating;
