import React, { useEffect, useState } from "react";
import logoGithub from "../assets/logo-github.png";
import axios from "axios";

function Developer() {
  const [dataDeveloper, setDataDeveloper] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/Frederick-88").then((response) => {
      setDataDeveloper(response.data);
    });
  }, []);

  return (
    <div className="border-left">
      <div className="text-center mb-3">
        <img
          src={logoGithub}
          style={{ width: "8rem", marginTop: "1.5rem" }}
          alt="..."
        />
      </div>
      <div className="mx-5 border-top">
        <div className="text-center mb-3">
          <img
            src={dataDeveloper.avatar_url}
            alt="..."
            style={{ width: "18rem" }}
            className="mt-3 rounded-circle"
          />
        </div>
        <div style={{ margin: "0rem 10rem" }}>
          <h4 className="font-weight-bold">{dataDeveloper.name}</h4>
          <h5 className="text-secondary">{dataDeveloper.login}</h5>
          <div className="d-flex d-row">
            <p className="mr-3">
              Following: <b>{dataDeveloper.following}</b>
            </p>
            <p>
              Followers: <b>{dataDeveloper.followers}</b>
            </p>
          </div>
          <p className="mb-4">
            <b>Bio</b>: {dataDeveloper.bio}
          </p>
          <div className="d-flex d-row mb-2">
            <i className="fas fa-globe-americas align-self-center mr-2" />
            <p className="my-0">
              Website: <b>{dataDeveloper.blog}</b>
            </p>
          </div>
          <div className="d-flex d-row mb-2">
            <i className="fas fa-map-marker-alt align-self-center mr-2" />
            <p className="my-0">
              Location: <b>{dataDeveloper.location}</b>
            </p>
          </div>
          <div className="d-flex d-row pb-5">
            <i className="fas fa-folder-open align-self-center mr-2" />
            <p className="my-0">
              Repositories: <b>{dataDeveloper.public_repos}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
