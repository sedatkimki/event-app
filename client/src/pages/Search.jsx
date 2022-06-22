import { useState, useEffect } from "react";
import Filter from "../components/Filter/Filter";
import SearchResult from "../components/SearchResult/SearchResult";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [response, setResponse] = useState();
  useEffect(() => {
    let url =
      process.env.REACT_APP_API_URL + `/v1/events?${searchParams.toString()}`;
    getEventsByQuery(url);
    console.log(url);
  }, [searchParams]);

  const getEventsByQuery = async (url) => {
    axios.get(url).then((res) => {
      setResponse(res.data.data);
    });
  };

  return (
    <section id="search">
      <Filter setSearchParams={setSearchParams} />
      {response && <SearchResult data={response} />}
    </section>
  );
}

export default Search;
