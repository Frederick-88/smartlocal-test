import React, { useEffect, useState } from "react";
import GistsProfileModal from "./GistsProfileModal";
import logoGithub from "../../assets/logo-github.png";
import gistsPic from "../../assets/gists.png";
import axios from "axios";
import "../style.css";

function Gists() {
  const [dataGists, setDataGists] = useState([]);
  const [showGistsProfileModal, setShowGistsProfileModal] = useState(false);
  const [urlDataProfile, setUrlDataProfile] = useState("");
  const [dataFavourite, setDataFavourite] = useState([]);
  // add favourite = if function clicked, needed to avoid looping in useEffect when use "dataFavourite" as parameter.
  const [addFavourite, setAddFavourite] = useState(false);
  console.log(dataFavourite);

  useEffect(() => {
    axios.get("https://api.github.com/gists/public").then((response) => {
      setDataGists(response.data);
    });
  }, []);

  useEffect(() => {
    const getDataFavourite = localStorage.getItem(
      "data-favourite",
      dataFavourite
    );
    setDataFavourite(getDataFavourite ? getDataFavourite : []);
  }, [addFavourite]);

  const goProfile = (itemUrl) => {
    setUrlDataProfile(itemUrl);
    setShowGistsProfileModal(true);
  };

  const undisplayGistsProfileModal = (boolean) => {
    setShowGistsProfileModal(false);
  };

  const setFavourite = (data) => {
    setAddFavourite(!addFavourite);
    setDataFavourite(...dataFavourite, data);
    console.log(dataFavourite);

    // localStorage.setItem("data-favourite", dataFavourite);
  };

  return (
    <div className="border-left">
      <div className="text-center mb-3">
        <img
          src={logoGithub}
          style={{ width: "10rem", marginTop: "1.5rem" }}
          alt="..."
        />
      </div>
      <div className="mx-5 border-top">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <img src={gistsPic} alt="..." className="w-100" />
          </div>

          <div className="col-md-6 my-auto">
            <h3 className="mb-4 font-weight-bold">What are Gists?</h3>
            <p className="my-0">
              Gist is a service from popular code-sharing repository called
              GitHub. The function of gists is similar to pastebin.com where
              people are able to share snippets of code or text with others,
              albeit for gists, there is version control via git. It is used
              when you need to share a sample piece of code or technique with
              your co-workers or friends.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="mx-5">
        <h3 className="my-0 font-weight-bold">Featured Gists</h3>
        <div className="row">
          {dataGists.map((item, index) => {
            return (
              <div className="col-md-3 mt-4" key={index}>
                <div className="card card-shadow-fx">
                  <img
                    src={item.owner.avatar_url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      <b>Gists Title</b>:{" "}
                      {item.description ? item.description : "-"}
                    </h6>
                    <p className="card-text my-1">
                      <b>By</b>: {item.owner.login}
                    </p>
                    <p className="card-text">
                      <b>Comments</b>: {item.comments ? item.comments : "-"}
                    </p>

                    <button
                      onClick={() => setFavourite(item)}
                      className="btn btn-outline-danger rounded-circle p-0 mr-2"
                      style={{ height: "2.5rem", width: "2.5rem" }}
                    >
                      <i className="fas fa-heart"></i>
                    </button>

                    <a
                      href={item.html_url}
                      target="blank"
                      className="btn btn-outline-primary rounded-circle p-0 pt-2 mr-2"
                      style={{ height: "2.5rem", width: "2.5rem" }}
                    >
                      <i className="fas fa-print"></i>
                    </a>

                    <button
                      onClick={() => goProfile(item.owner.url)}
                      className="btn btn-outline-black rounded-circle p-0"
                      style={{ height: "2.5rem", width: "2.5rem" }}
                    >
                      <i className="fas fa-user"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <GistsProfileModal
        showGistsProfileModal={showGistsProfileModal}
        undisplayGistsProfileModal={undisplayGistsProfileModal}
        urlDataProfile={urlDataProfile}
      />
    </div>
  );
}

export default Gists;
