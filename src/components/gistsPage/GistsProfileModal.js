import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import logoGithub from "../../assets/logo-github.png";
import axios from "axios";

function GistsProfileModal(props) {
  console.log(props.urlDataProfile);
  const [dataProfile, setDataProfile] = useState([]);
  // console.log(dataProfile);

  const hideGistsProfileModal = () => {
    props.undisplayGistsProfileModal(false);
  };

  useEffect(() => {
    axios.get(`${props.urlDataProfile}`).then((response) => {
      console.log(response);
      setDataProfile(response.data);
    });
    // parameter of url, because in the first place there are no url. it will come in the 2nd render.
  }, [props.urlDataProfile]);

  const picture = (picture) => {
    return {
      backgroundImage: `url(${picture})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "17rem",
    };
  };
  return (
    <Modal
      size="lg"
      show={props.showGistsProfileModal}
      onHide={hideGistsProfileModal}
    >
      <Modal.Header closeButton>
        <img
          src={logoGithub}
          alt="..."
          style={{ width: "20%", marginLeft: "2rem" }}
        />
      </Modal.Header>

      <Modal.Body className="px-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-5 py-3 align-self-center">
              <div
                style={picture(dataProfile.avatar_url)}
                alt="..."
                className="w-100 mb-3"
              />
            </div>

            <div className="col-md-6 px-5 py-3 border-left">
              <div className="mb-4">
                <h4 className="font-weight-bold">
                  {dataProfile.name ? dataProfile.name : "-"}
                </h4>
                <h5 className="font-weight-bold text-secondary">
                  @{dataProfile.login}
                </h5>
                <p className="my-0">
                  <b>Bio</b>: {dataProfile.bio ? dataProfile.bio : "-"}
                </p>

                <small className="card-text text-secondary mr-3">
                  Followers : {dataProfile.followers}
                </small>
                <small className="card-text text-secondary mr-3">
                  Following : {dataProfile.following}
                </small>
                <small className="card-text text-secondary">
                  Open for Jobs : {dataProfile.hireable ? "Yes" : "No"}
                </small>
              </div>

              <div className="d-flex d-row  mt-4 mb-3">
                <a
                  href={`${dataProfile.html_url}`}
                  target="blank"
                  className="btn btn-outline-black d-flex d-row"
                >
                  <i className="fab fa-github align-self-center mr-2 fa-sm" />
                  <small className="font-weight-bold">Github</small>
                </a>
                {dataProfile.blog ? (
                  <a
                    href={`${dataProfile.blog}`}
                    target="blank"
                    className="btn btn-outline-black d-flex d-row ml-3"
                  >
                    <i className="fas fa-globe-americas align-self-center mr-2 fa-sm" />
                    <small className="font-weight-bold">Website/Blog</small>
                  </a>
                ) : (
                  <a
                    target="blank"
                    className="btn btn-outline-black d-flex d-row ml-3 disabled"
                  >
                    <i className="fas fa-globe-americas align-self-center mr-2 fa-sm" />
                    <small className="font-weight-bold">Website/Blog</small>
                  </a>
                )}
              </div>

              <div className="d-flex d-row">
                <p
                  className="btn"
                  style={{
                    borderRadius: "7px",
                    backgroundColor: "#dedede",
                    fontSize: "0.9rem",
                    cursor: "default",
                  }}
                >
                  Gists: {dataProfile.public_gists}
                </p>
                <p
                  className="btn ml-3"
                  style={{
                    borderRadius: "7px",
                    backgroundColor: "#dedede",
                    fontSize: "0.9rem",
                    cursor: "default",
                  }}
                >
                  Repositories: {dataProfile.public_repos}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default GistsProfileModal;
