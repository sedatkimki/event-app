/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import leftArrow from "../../icons/left-arrow.svg";
import rightArrow from "../../icons/right-arrow.svg";
function Slider({ data }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

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
        {data.map((item, indexEvent) => {
          const { id, slug, event_images, title, description, location, date } =
            item;
          let position = "nextSlide";
          if (indexEvent === index) {
            position = "activeSlide";
          }
          if (
            indexEvent === index - 1 ||
            (index === 0 && indexEvent === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <Link to={"/" + slug} className={position + " event-box"} key={id}>
              <div className="image-container">
                <img
                  src={
                    process.env.REACT_APP_API_URL + "/images/" + event_images[0]
                  }
                  alt="event"
                />
              </div>
              <div className="event-box-body">
                <h3 className="event-title">{title}</h3>
                <p
                  className="event-description"
                  dangerouslySetInnerHTML={{
                    //vulnerable to cross-site scripting attacks (XSS).
                    __html: description.slice(0, 200),
                  }}
                ></p>
              </div>

              <div className="event-box-footer">
                <span className="event-location">
                  {location.placeName} -
                  {" " +
                    location.address.split(" ")[
                      location.address.split(" ").length - 1
                    ]}
                </span>
                <span className="event-date">
                  {new Date(date.startingDate).toLocaleString("tr-TR", {
                    timeZone: "UTC",
                  })}{" "}
                  -{" "}
                  {new Date(date.endDate).toLocaleString("tr-TR", {
                    timeZone: "UTC",
                  })}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <a className="next" href="#" onClick={() => setIndex(index + 1)}>
        <img src={rightArrow} alt="" />
      </a>
    </div>
  );
}

export default Slider;
