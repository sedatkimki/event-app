import React from "react";
import { Link } from "react-router-dom";
import CalendarSVG from "../../icons/calendar.svg";
import LocationSVG from "../../icons/location.svg";
import IconContainer from "../IconContainer/IconContainer";
function EventBox({ data, position }) {
  const event = {
    id: data.id,
    slug: data.slug,
    image: data.event_images[0],
    title: data.title,
    description: data.description.slice(0, 150),
    placeName: data.location.placeName,
    address:
      data.location.address.split(" ")[
        data.location.address.split(" ").length - 1
      ],
    startingDate: new Date(data.date.startingDate).toLocaleString("tr-TR", {
      timeZone: "UTC",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    endDate: new Date(data.date.endDate).toLocaleString("tr-TR", {
      timeZone: "UTC",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
  return (
    <Link
      to={"/" + event.slug}
      className={position + " event-box"}
      key={event.id}
    >
      <div>
        <div className="image-container">
          <img
            src={process.env.REACT_APP_API_URL + "/images/" + event.image}
            alt="event"
          />
        </div>
        <div className="event-box-body">
          <h3 className="event-title">{event.title}</h3>
          <p
            className="event-description"
            dangerouslySetInnerHTML={{
              //vulnerable to cross-site scripting attacks (XSS).
              __html: event.description + "...",
            }}
          ></p>
          <p>
            <b>{"Devamını oku ->>"}</b>
          </p>
        </div>
      </div>

      <div className="event-box-footer">
        <span className="event-location">
          <IconContainer SVG={CalendarSVG} />
          {event.placeName} - {event.address}
        </span>
        <span className="event-date">
          <IconContainer SVG={LocationSVG} />
          {event.startingDate} - {event.endDate}
        </span>
      </div>
    </Link>
  );
}

export default EventBox;
