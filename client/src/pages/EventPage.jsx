import React from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import useFetch from "../hooks/useFetch";
function EventPage() {
  let { slug } = useParams();
  const url = process.env.REACT_APP_API_URL + `/v1/events/${slug}`;
  const { response, error, loading } = useFetch(url);
  if (error) {
    console.log(error);
  }
  if (response) {
    // console.log(response.data[0].event_images);
  }
  return (
    <div>
      {response && <ImageSlider images={response.data[0].event_images} />}
    </div>
  );
}

export default EventPage;
