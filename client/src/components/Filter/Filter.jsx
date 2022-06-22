/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cities from "./cities.json";
import { ReactComponent as CheckBox } from "../../icons/checkbox.svg";
const categories = ["konser", "tiyatro", "festival"];

function Filter({ setSearchParams }) {
  const [isExpired, setisExpired] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleClick = () => {
    setStartingDate(startingDate && startingDate);
    setEndDate(endDate && endDate);
    setSearchParams({
      isExpired,
      search,
      category,
      city,
      startingDate,
      endDate,
    });
  };
  return (
    <section id="Filter" className="container container-pall">
      <div className="filter">
        <input
          type="search"
          placeholder="Etkinlik, sanatçı veya mekan arayın"
          className="filter-search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="filter-date-wrapper flex flex-jc-c flex-ai-c">
          <DatePicker
            placeholderText="başlangıç tarihi seçiniz"
            className="filter-date filter-date-start"
            selected={startingDate}
            format="dd-MM-yyyy"
            fo
            onChange={(date) => setStartingDate(new Date(date))}
          />
          <div className="vertical-line"></div>
          <DatePicker
            className="filter-date filter-date-end"
            placeholderText="bitiş tarihi seçiniz"
            selected={endDate}
            onChange={(date) => setEndDate(new Date(date))}
          />
        </div>
        <div className="selectbox-wrapper flex flex-jc-c flex-ai-c">
          <select
            className="filter-category"
            name="categories"
            id="categories"
            required
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              kategori seçiniz
            </option>
            {categories.map((item, key) => {
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <div className="vertical-line"></div>
          <select
            className="filter-city"
            name="cities"
            id="cities"
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              şehir seçiniz
            </option>
            {cities.map((item, key) => {
              return (
                <option key={key} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="filter-footer-wrapper flex flex-jc-sb flex-ai-c">
          <div className="checkbox-wrapper flex  flex-ai-c">
            <a
              className={`filter-checkbox flex flex-jc-c flex-ai-c `}
              onClick={() => setisExpired(!isExpired)}
            >
              <CheckBox className={isExpired ? "checked" : ""} />
            </a>
            <span>Süresi dolmuş</span>
          </div>
          <div className="vertical-line"></div>
          <div className="button-wrapper flex flex-jc-c flex-ai-c">
            <button onClick={handleClick}>Ara</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter;
