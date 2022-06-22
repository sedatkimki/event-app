import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Filter from "../components/Filter/Filter";
import AllEvents from "./AllEvents";
import SearchResult from "../components/SearchResult/SearchResult";
import Search from "./Search";
function Home() {
  const [data, setData] = useState();
  useEffect(() => {}, [data]);
  return (
    <>
      <Hero />
      <Search />
    </>
  );
}

export default Home;
