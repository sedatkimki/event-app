import React from "react";
import Slider from "../Slider/Slider";
import useFetch from "../../hooks/useFetch";
function Hero() {
  const { response, error, loading } = useFetch(
    process.env.REACT_APP_API_URL + "/v1/events"
  );
  if (error) {
    console.log(error);
  }
  return (
    <section id="Hero" className="hero container">
      <div className="hero-body container-pall flex flex-jc-c ">
        <div className="hero-title">
          <h2>Aradığın tüm etkinlikler burada !</h2>
        </div>
        <div className="hero-description">
          EventApp ile senin için en uygun etkinlikleri hızlı ve kolay bir
          şekilde bulabilirsin.
        </div>
      </div>
      <div className="hero-footer container-pall">
        <h2>Popüler etkinlikler</h2>
        {loading && <p>loading</p>}
        {response && <Slider data={response.data} />}
      </div>
    </section>
  );
}

export default Hero;
