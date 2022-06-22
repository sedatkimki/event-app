import React from "react";
import EventBox from "../EventBox/EventBox";

function SearchResult({ data }) {
  return (
    <div className="results container container-pall">
      {data.map((item, key) => {
        return <EventBox key={key} data={item} />;
      })}
    </div>
  );
}

export default SearchResult;
