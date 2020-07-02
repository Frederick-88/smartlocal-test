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

  useEffect(() => {
    axios.get("https://api.github.com/gists/public").then((response) => {
      setDataGists(response.data);
    });
  }, []);

  const goProfile = (itemUrl) => {
    setUrlDataProfile(itemUrl);
    setShowGistsProfileModal(true);
  };

  const undisplayGistsProfileModal = (boolean) => {
    setShowGistsProfileModal(false);
  };

  return (
    <div className="border-left">
      <div className="text-center mb-3">
        <img
          src={logoGithub}
          style={{ width: "15rem", marginTop: "1rem" }}
          alt="..."
        />
      </div>
      <div className="mx-5">
        <div className="row">
          <div className="col-md-6">
            <img src={gistsPic} alt="..." className="w-75" />
          </div>

          <div className="col-md-6">
            <h3 className="my-0">What is Gists?</h3>
          </div>
        </div>
        <div></div>
      </div>
      <div className="mx-5">
        <h3 className="my-0">Featured Gists</h3>
        <div className="row">
          {dataGists.map((item, index) => {
            return (
              <div className="col-md-3 mt-4" key={index}>
                <div class="card card-shadow-fx">
                  <img
                    src={item.owner.avatar_url}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h6 class="card-title">
                      <b>Gists Title</b>:{" "}
                      {item.description ? item.description : "-"}
                    </h6>
                    <p class="card-text my-1">
                      <b>By</b>: {item.owner.login}
                    </p>
                    <p class="card-text">
                      <b>Comments</b>: {item.comments ? item.comments : "-"}
                    </p>
                    <a
                      href={item.html_url}
                      target="blank"
                      class="btn btn-outline-primary mb-2"
                    >
                      Check Gists
                    </a>

                    <button
                      onClick={() => goProfile(item.owner.url)}
                      className="btn btn-outline-danger"
                    >
                      See Contributor
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
