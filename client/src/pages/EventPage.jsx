import React from "react";
import { useParams } from "react-router-dom";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";
import IconContainer from "../components/IconContainer/IconContainer";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import useFetch from "../hooks/useFetch";
import CalendarSVG from "../icons/calendar.svg";
import LocationSVG from "../icons/location.svg";
import TicketSVG from "../icons/ticket.svg";
import PersonSVG from "../icons/person.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

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
      tickets: response.data[0].tickets,
      performer: response.data[0].performer,
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
      <div className="event-page-slider">
        {event && <ImageSlider images={event.images} />}
      </div>
      <div className="event-page-wrapper ">
        <div className="column1">
          <div className="event-page-title">
            {event && <h2>{event.title}</h2>}
          </div>
          <div className="event-page-icons-wrapper">
            <div className="event-page-icon flex  flex-ai-c">
              <IconContainer SVG={PersonSVG} />
              {event && <p>{event.performer}</p>}
            </div>
            <div className="event-page-icon flex  flex-ai-c">
              <IconContainer SVG={CalendarSVG} />
              {event && (
                <p>
                  {event.startingDate} - {event.endDate}
                </p>
              )}
            </div>
            <div className="event-page-icon flex  flex-ai-c">
              <IconContainer SVG={LocationSVG} />
              {event && (
                <p>
                  <a
                    className="event-page-place"
                    href={`/search?place=${event.placeName.replaceAll(
                      " ",
                      "-"
                    )}`}
                  >
                    {event.placeName}
                  </a>
                  - {event.address}
                </p>
              )}
            </div>
            <div className="event-page-icon flex  flex-ai-fs">
              <div style={{ marginTop: "5px" }}>
                <IconContainer SVG={TicketSVG} />
              </div>

              <div>
                {event && <p>1. Kategori - {event.tickets.section1} TL</p>}
                {event && <p>2. Kategori - {event.tickets.section2} TL</p>}
                {event && <p>3. Kategori - {event.tickets.section3} TL</p>}
              </div>
            </div>
            <div className="event-page-icon flex flex-jc-c  flex-ai-c">
              <FacebookShareButton
                className="share-button"
                url={window.location.href}
                quote="Bulduğum şu etkinliğe bir bakın"
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                className="share-button"
                url={window.location.href}
                title="Bulduğum şu etkinliğe bir bakın"
              >
                <TwitterIcon size={32} round={true}></TwitterIcon>
              </TwitterShareButton>
              <WhatsappShareButton
                className="share-button"
                url={window.location.href}
                title="Bulduğum şu etkinliğe bir bakın"
              >
                <WhatsappIcon size={32} round={true}></WhatsappIcon>{" "}
              </WhatsappShareButton>
            </div>
          </div>
        </div>
        <div className="column2">
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
            {event && (
              <p>
                <b>Adres:</b> {event.fullAddress}
              </p>
            )}
          </div>
          <div className="event-page-map">
            {event && <GoogleMaps lat={event.lat} lng={event.long} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventPage;
