import React, { useEffect, useState } from "react";
import ImgCard from "./ImgCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  //doc for api -  https://docs.api.coinstats.app/reference/get-coins
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "jijOqu+lRjrFeFtMXQ6GykVBtgZPgnSS6P8FP0AWg4o=",
      },
    };

    fetch("https://openapiv1.coinstats.app/coins", options)
      .then((response) => response.json())
      .then((response) => setData(response.result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="header">
        <input
          autoComplete="off"
          type="text"
          placeholder="Search fro Crypto"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <>
        {data.length > 0 && (
          <div className="grid-container">
            {data
              .filter((crypto) =>
                crypto.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((crypto) => (
                <div>
                  <ImgCard crypto={crypto} />
                </div>
              ))}
          </div>
        )}
      </>
    </>
  );
};

export default Home;
