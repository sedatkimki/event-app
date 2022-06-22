import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";
import useFetch from "../hooks/useFetch";
function AllEvents() {
  const { response, error, loading } = useFetch(
    process.env.REACT_APP_API_URL + "/v1/events"
  );
  if (error) {
    console.log(error);
  }
  return <>{response && <SearchResult data={response.data} />}</>;
}

export default AllEvents;
