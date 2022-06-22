import React from "react";
import { useParams } from "react-router-dom";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";
import IconContainer from "../components/IconContainer/IconContainer";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import useFetch from "../hooks/useFetch";
import CalendarSVG from "../icons/calendar.svg";
import LocationSVG from "../icons/location.svg";
function EventPage() {
  let { slug } = useParams();
  let event;
  const url = process.env.REACT_APP_API_URL + `/v1/events/${slug}`;
  const { response, error, loading } = useFetch(url);
  if (error) {
    console.log(error);
  }
  if (response) {
    event = {
      id: response.data[0].id,
      slug: response.data[0].slug,
      images: response.data[0].event_images,
      title: response.data[0].title,
      description: response.data[0].description,
      placeName: response.data[0].location.placeName,
      address:
        response.data[0].location.address.split(" ")[
          response.data[0].location.address.split(" ").length - 1
        ],
      fullAddress: response.data[0].location.address,
      startingDate: new Date(response.data[0].date.startingDate).toLocaleString(
        "tr-TR",
        {
          timeZone: "UTC",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }
      ),
      endDate: new Date(response.data[0].date.endDate).toLocaleString("tr-TR", {
        timeZone: "UTC",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      lat: response.data[0].location.lat,
      long: response.data[0].location.lng,
    };
  }

  return (
    <section
      id="event-page"
      className="event-page container container-pr container-pl"
    >
      <div className="event-page-wrapper">
        <div className="event-page-slider">
          {event && <ImageSlider images={event.images} />}
        </div>

        <div className="event-page-title">
          {event && <h2>{event.title}</h2>}
        </div>
        <div className="event-page-date flex  flex-ai-c">
          <IconContainer SVG={CalendarSVG} />
          {event && (
            <p className="event-page-date-string">
              {event.startingDate} - {event.endDate}
            </p>
          )}
        </div>
        <div className="event-page-location-short flex  flex-ai-c">
          <IconContainer SVG={LocationSVG} />
          {event && (
            <p className="event-page-date-string">
              {event.placeName} - {event.address}
            </p>
          )}
        </div>
        <div className="event-page-description">
          {event && (
            <p
              dangerouslySetInnerHTML={{
                //vulnerable to cross-site scripting attacks (XSS).
                __html: event.description,
              }}
            ></p>
          )}
        </div>
        <div className="event-page-fulladdress">
          {event && <p>Adres: {event.fullAddress}</p>}
        </div>
        <div className="event-page-map">
          {event && <GoogleMaps lat={event.lat} lng={event.long} />}
        </div>
      </div>
    </section>
  );
}

export default EventPage;
