import React, { useEffect, useState } from "react";
import logoGithub from "../assets/logo-github.png";
import axios from "axios";

function Favourite() {
  const [dataFavourite, setDataFavourite] = useState([]);
  console.log(dataFavourite);

  useEffect(() => {
    const getData = localStorage.getItem("data-favourite");
    setDataFavourite(getData);
  }, []);

  return (
    <div>
      <div className="text-center mb-3">
        <img
          src={logoGithub}
          style={{ width: "8rem", marginTop: "1.5rem" }}
          alt="..."
        />
      </div>
      <div className="mx-5 border-top"></div>
    </div>
  );
}

export default Favourite;
