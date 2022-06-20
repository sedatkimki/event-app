import React from "react";
import Slider from "../components/Slider/Slider";
import useFetch from "../hooks/useFetch";

function Home() {
  const { response, error, loading } = useFetch(
    process.env.REACT_APP_API_URL + "/v1/events"
  );
  // console.log(response);
  // console.log(error);
  // console.log(loading);
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    console.log(error);
  }
  return <div>{response && <Slider data={response.data} />}</div>;
}

export default Home;
