import React, { useState } from "react";
import Footer from "../components/footer";
import navigate from "../inc/scripts/utilities";
import Button from "../components/button";
const Settings = () => {
  const navigateHome = () => {
    navigate("./weather");
  };

  const [defaultLocation, setDefaultLocation] = useState("");
  return (
    <React.Fragment>
      <section className="container-fluid">
        <section className="app-header d-flex justify-content-between my-3">
          <div className="toggle-btn ">
            <svg
              height={"30"}
              id="Layer_1"
              version="1.1"
              onClick={navigateHome}
              viewBox="0 0 512 512"
              width={"30"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
            </svg>
          </div>
          <section className="city-locaton">
            <h5 className="fw-bold fs-5 text-capitalize">change Settings</h5>
          </section>
          <div className="toggle-btn "></div>
        </section>

        <section className="settings">
          <form action="">
            <label htmlFor="defaultLocation " className="brand-small-text py-3">
              Enter your default location
            </label>
            <input
              type="text"
              name="defaultLocation"
              id="defaultLocation"
              className="form-control p-3 my-1 brand-small-text"
              value={defaultLocation}
              placeholder={"Enter your default location.."}
              onChange={(e) => {
                setDefaultLocation(e.target.value);
              }}
            />

            <section className="d-flex align-items-center justify-content-center">
              <Button
                text="save location"
                className="shadow brand-btn-3 toggle-width-3 my-5 width-toggle text-light text-capitalize"
              />
            </section>

             <hr className="horizontal-line py-3 w-50 m-auto "/>

            <section className="factory-settings my-2 row">
              <label
                htmlFor="factory-settings-reset "
                className="text-capitalize d-block"
              >
                clear local data
              </label>
            <section className="d-flex align-items-center justify-content-center">

              <Button
                text="restore settings"
                className="shadow brand-btn-3-secondary toggle-width-3 my-5 width-toggle text-dark text-capitalize"
              />
              </section>
            </section>

         
            <section className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Default switch checkbox input
              </label>
            </section>
          </form>
        </section>

        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Settings;
