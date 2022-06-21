/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import leftArrow from "../../icons/left-arrow.svg";
import rightArrow from "../../icons/right-arrow.svg";
import EventBox from "../EventBox/EventBox";
function Slider({ data }) {
  const events = data.slice(0, 3);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = events.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, events]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="slider ">
      {/* <h2>Popüler etkinlikler</h2> */}
      <a className="prev" href="#" onClick={() => setIndex(index - 1)}>
        <img src={leftArrow} alt="" />
      </a>
      <div className="slider-center">
        {events.map((item, indexEvent) => {
          let position = "nextSlide";
          if (indexEvent === index) {
            position = "activeSlide";
          }
          if (
            indexEvent === index - 1 ||
            (index === 0 && indexEvent === events.length - 1)
          ) {
            position = "lastSlide";
          }
          return <EventBox data={item} position={position} />;
        })}
      </div>

      <a className="next" href="#" onClick={() => setIndex(index + 1)}>
        <img src={rightArrow} alt="" />
      </a>
    </div>
  );
}

export default Slider;
