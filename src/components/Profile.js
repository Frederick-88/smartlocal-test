import React, { useEffect, useState } from "react";
import logoGithub from "../assets/logo-github.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usersPicture from "../assets/users.webp";
import axios from "axios";

function Profile() {
  const [dataProfile, setDataProfile] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputChanges, setInputChanges] = useState("");
  const baseUrl = "https://api.github.com/users";

  const handleInputChanges = (event) => {
    let { value } = event.currentTarget;
    setInputChanges(value);
  };

  const noValueNotification = () =>
    toast.error("Please fill the form correctly.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

  const notFoundNotification = () =>
    toast.error("User not found.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputChanges) {
      setInputName(inputChanges);
    } else {
      noValueNotification();
    }
  };

  useEffect(() => {
    axios.get(`${baseUrl}/${inputName}`).then(
      (response) => {
        setDataProfile(response.data);
      },
      (error) => {
        if (error) {
          notFoundNotification();
        }
      }
    );
  }, [inputName]);

  return (
    <div className="border-left">
      <div className="text-center mb-3">
        <img
          src={logoGithub}
          style={{ width: "8rem", marginTop: "1.5rem" }}
          alt="..."
        />
      </div>
      <ToastContainer />
      <div className="mx-5 border-top">
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3 mt-4">
            <input
              type="text"
              class="form-control"
              placeholder="Github Id"
              onChange={handleInputChanges}
            />
            <div class="input-group-append">
              <button
                type="submit"
                class="btn btn-outline-secondary"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="text-center mb-3">
          <img
            src={dataProfile.avatar_url ? dataProfile.avatar_url : usersPicture}
            alt="..."
            style={{ width: "18rem" }}
            className="mt-3 rounded-circle"
          />
        </div>
        <div style={{ margin: "0rem 10rem" }}>
          <h4 className="font-weight-bold">
            {dataProfile.name ? dataProfile.name : "-"}
          </h4>
          <h5 className="text-secondary">
            {dataProfile.login ? dataProfile.login : "-"}
          </h5>
          <div className="d-flex d-row">
            <p className="mr-3">
              Following:{" "}
              <b>{dataProfile.following ? dataProfile.following : 0}</b>
            </p>
            <p>
              Followers:{" "}
              <b>{dataProfile.followers ? dataProfile.followers : 0}</b>
            </p>
          </div>
          <p className="mb-4">
            <b>Bio</b>: {dataProfile.bio ? dataProfile.bio : "-"}
          </p>
          <div className="d-flex d-row mb-2">
            <i className="fas fa-globe-americas align-self-center mr-2" />
            <p className="my-0">
              Website: <b>{dataProfile.blog ? dataProfile.blog : "-"}</b>
            </p>
          </div>
          <div className="d-flex d-row mb-2">
            <i className="fas fa-map-marker-alt align-self-center mr-2" />
            <p className="my-0">
              Location:{" "}
              <b>{dataProfile.location ? dataProfile.location : "-"}</b>
            </p>
          </div>
          <div className="d-flex d-row pb-5">
            <i className="fas fa-folder-open align-self-center mr-2" />
            <p className="my-0">
              Repositories:{" "}
              <b>{dataProfile.public_repos ? dataProfile.public_repos : "-"}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
