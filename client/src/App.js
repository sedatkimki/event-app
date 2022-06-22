import { Routes, Route } from "react-router-dom";

import "./styles/styles.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:slug" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
