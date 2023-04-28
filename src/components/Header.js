import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const Header = () => {
  const user = useSelector((state) => state.userReducer);

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  return (
    <>
      <div id="loading-page">
        <span className="closeBtn">
          <i
            class="fa-solid fa-xmark"
            style={{ color: "white" }}
            onClick={() =>
              (document.getElementById("loading-page").style.visibility =
                "hidden")
            }
          ></i>
        </span>

        <i
          class="fa-solid fa-spinner fa-spin-pulse"
          style={{ color: "white" }}
        ></i>
      </div>

      <div className="header-author">
        <div>
          <h1>
            <i
              class="fa-regular fa-star"
              style={{ color: "#AAAAAA", width: "40px" }}
            ></i>
            {!isEmpty(user) && user.first_name}{" "}
            {!isEmpty(user) && user.last_name}
          </h1>
        </div>
        <div>
          <button
            onClick={() =>
              (document.getElementById("loading-page").style.visibility =
                "visible")
            }
          >
            New Order
          </button>
        </div>
      </div>

      <div className="header-infos">
        <div className="infos-photo">
          <div className="photo-value">
            <i
              className="fa-regular fa-user"
              style={{ color: "#FFFFFF", width: "63px" }}
            ></i>
          </div>

          <p>
            {!isEmpty(user) && user.gender} -{" "}
            {!isEmpty(user) && getAge(user.birth_date)}
          </p>
        </div>

        <div className="infos-contact">
          <p>
            <i className="fa-regular fa-user" style={{ color: "#B0C6D8" }}></i>#
            {!isEmpty(user) && user.id}
          </p>

          <p>
            <i
              className="fa-solid fa-mobile-screen-button"
              style={{ color: "#B0C6D8" }}
            ></i>
            {!isEmpty(user) && user.home_phone}
          </p>
          <p>
            <i
              className="fa-regular fa-building"
              style={{ color: "#B0C6D8" }}
            ></i>
            {!isEmpty(user) && user.home_phone} ext 2023
          </p>
          <p>
            <i className="fa-solid fa-house" style={{ color: "#B0C6D8" }}></i>
            {!isEmpty(user) && user.home_phone}
          </p>
          <p>
            <i className="fa-regular fa-at" style={{ color: "#B0C6D8" }}></i>
            {!isEmpty(user) && user.email}
          </p>
        </div>

        <div className="infos-activities">
          <h5>90-day communiaction activity</h5>
          <div className="activities">
            <div className="activity-container">
              <div className="activity-value">
                {!isEmpty(user) && user.activity.sms}
              </div>
              <div className="activity-bottom">
                <p>sms</p>
              </div>
            </div>
            <div className="activity-container">
              <div className="activity-value">
                {!isEmpty(user) && user.activity.email}
              </div>
              <div className="activity-bottom">
                <p>
                  email{!isEmpty(user) && user.activity.email > 1 ? "s" : ""}
                </p>
              </div>
            </div>
            <div className="activity-container">
              <div className="activity-value">
                {!isEmpty(user) && user.activity.orders}
              </div>
              <div className="activity-bottom">
                <p>
                  order{!isEmpty(user) && user.activity.orders > 1 ? "s" : ""}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="infos-sms">
          <h5>sms carrier statut</h5>
          <div className="activity-value">
            {!isEmpty(user) && user.carrier_status.status}
          </div>
          <div className="activity-bottom">
            <p>
              SINCE {!isEmpty(user) && dateFormater(user.carrier_status.since)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
