import React from "react";
import useFetch from "../hooks/useFetch";

function Home() {
  console.log(process.env.REACT_APP_API_URL);
  const { data, error, loading } = useFetch(
    process.env.REACT_APP_API_URL + "/events"
  );
  console.log(data);
  console.log(error);
  console.log(loading);
  return <div></div>;
}

export default Home;
