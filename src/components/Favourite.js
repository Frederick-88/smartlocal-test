import React, { useEffect, useState } from "react";
import GistsProfileModal from "../components/gistsPage/GistsProfileModal";
import logoGithub from "../assets/logo-github.png";

function Favourite() {
  const [dataFavourite, setDataFavourite] = useState([]);
  const [showGistsProfileModal, setShowGistsProfileModal] = useState(false);
  const [urlDataProfile, setUrlDataProfile] = useState("");

  useEffect(() => {
    const getData = localStorage.getItem("data-favourite");
    setDataFavourite(getData ? JSON.parse(getData) : []);
  }, []);

  const goProfile = (itemUrl) => {
    setUrlDataProfile(itemUrl);
    setShowGistsProfileModal(true);
  };
  const undisplayGistsProfileModal = (boolean) => {
    setShowGistsProfileModal(false);
  };

  return (
    <div>
      <div className="text-center mb-3">
        <img
          src={logoGithub}
          style={{ width: "8rem", marginTop: "1.5rem" }}
          alt="..."
        />
      </div>

      <div className="mx-5 border-top">
        <h3 className="my-0 font-weight-bold mt-3">Favourited Gists</h3>
        <div className="row">
          {dataFavourite.map((item, index) => {
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

export default Favourite;
