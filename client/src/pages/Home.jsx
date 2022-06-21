import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Filter from "../components/Filter/Filter";
import useFetch from "../hooks/useFetch";
function Home() {
  const { response, error, loading, setResponse } = useFetch(
    process.env.REACT_APP_API_URL + "/v1/events"
  );
  if (error) {
    console.log(error);
  }
  const [data, setData] = useState();
  useEffect(() => {
    // console.log(data);
    setResponse(data);
  }, [data, setResponse]);
  console.log(response);
  return (
    <>
      <Hero />
      <Filter setData={setData} />
    </>
  );
}

export default Home;
