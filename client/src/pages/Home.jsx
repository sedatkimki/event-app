import React from "react";
import Hero from "../components/Hero/Hero";

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
  return (
    <>
      {response && <Hero data={response.data} />}
      deneme
    </>
  );
}

export default Home;
