import React, { useEffect, useState } from "react";
import axios from "axios";

function Header() {
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;

      axios
        .get("https://api.adoptez1artisan.com/user/appData")
        .then((response) => {
          console.log("success", response);

          if (response.data.status === "success") {
            setFullname(response.data.data.user.fullname);
          } else {
          }
        })
        .catch((err) => {
          alert("There is an error");
        });
    }

    return () => {};
  }, []);

  const NotAuthElements = () => (
    <div>
      <a className="btn btn-outline-primary" href="#/register">
        Signin
      </a>
      &nbsp;
      <a className="btn btn-outline-primary" href="#/login">
        Login
      </a>
    </div>
  );

  const AuthenticatedElements = () => (
    <div>
      {fullname}
      &nbsp;
      <a className="btn btn-outline-primary" href="#/login">
        Quit
      </a>
    </div>
  );

  return (
    <React.Fragment>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">React API</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="#/">
            Main Page
          </a>
          <a className="p-2 text-dark" href="#/about-us">
            About Us
          </a>
          <a className="p-2 text-dark" href="#/contact">
            Contact
          </a>
        </nav>

        {fullname ? <AuthenticatedElements /> : <NotAuthElements />}
      </div>
    </React.Fragment>
  );
}

export default Header;
