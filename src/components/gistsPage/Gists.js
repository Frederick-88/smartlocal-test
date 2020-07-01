import React, { useEffect, useState } from "react";
import GistsProfileModal from "./GistsProfileModal";
import axios from "axios";

function Gists() {
  const [dataGists, setDataGists] = useState([]);
  const [showGistsProfileModal, setShowGistsProfileModal] = useState(false);

  useEffect(() => {
    axios.get("https://api.github.com/gists/public").then((response) => {
      setDataGists(response.data);
    });
  }, []);

  const goProfile = () => {
    setShowGistsProfileModal(true);
  };

  const undisplayGistsProfileModal = (boolean) => {
    setShowGistsProfileModal(false);
  };

  return (
    <div>
      <h1>INI PAGE GISTS</h1>
      <div className="container">
        <div className="row">
          {dataGists.map((item, index) => {
            return (
              <div className="col-md-3 mt-4" key={index}>
                <div class="card text-white bg-secondary">
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
                      onClick={() => goProfile()}
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
      />
    </div>
  );
}

export default Gists;
