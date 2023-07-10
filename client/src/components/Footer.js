import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div title="Footer">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span> Get connected with us on social networks: </span>{" "}
          </div>{" "}
          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>{" "}
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>{" "}
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>{" "}
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>{" "}
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>{" "}
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>{" "}
          </div>{" "}
        </section>{" "}
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Dune{" "}
                </h6>{" "}
                <p>
                  Here you can use rows and columns to organize your footer
                  content.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.{" "}
                </p>{" "}
              </MDBCol>{" "}
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <Link to="/category">
                  <h6 className="text-uppercase fw-bold mb-4"> Products </h6>{" "}
                </Link>{" "}
                <p>
                  <a href="#!" className="text-reset">
                    kids collection{" "}
                  </a>{" "}
                </p>{" "}
                <p>
                  <a href="#!" className="text-reset">
                    mens - collection{" "}
                  </a>{" "}
                </p>{" "}
                <p>
                  <a href="#!" className="text-reset">
                    Smart Watch{" "}
                  </a>{" "}
                </p>{" "}
                <p>
                  <a href="#!" className="text-reset">
                    Games{" "}
                  </a>{" "}
                </p>{" "}
              </MDBCol>{" "}
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <Link to="/usefullinks">
                  {" "}
                  <h6 className=" fw-bold mb-4"> Useful links </h6>{" "}
                </Link>{" "}
                <p>
                  <a href="#!" className="text-reset">
                    Pricing{" "}
                  </a>{" "}
                </p>{" "}
                <p>
                  <a href="#!" className="text-reset">
                    Settings{" "}
                  </a>{" "}
                </p>{" "}
                <p>
                  <a href="#!" className="text-reset">
                    Orders{" "}
                  </a>{" "}
                </p>{" "}
                <p>
                  <a href="#!" className="text-reset">
                    Help{" "}
                  </a>{" "}
                </p>{" "}
              </MDBCol>{" "}
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <Link to="/contact">
                  {" "}
                  <h6 className="text-uppercase fw-bold mb-4">
                    {" "}
                    Contact{" "}
                  </h6>{" "}
                </Link>{" "}
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Ashulia, Savar{" "}
                </p>{" "}
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info @dune.com{" "}
                </p>{" "}
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +01 234 567 88{" "}
                </p>{" "}
                <p>
                  <MDBIcon icon="print" className="me-3" /> +01 234 567 89{" "}
                </p>{" "}
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBContainer>{" "}
        </section>{" "}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          ©2023 Copyright:
          <a className="text-reset fw-bold"> Dune.com </a>{" "}
        </div>{" "}
      </MDBFooter>{" "}
    </div>
  );
}

///---------------0-----------

//
// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center"> All Right Reserved & copy; Techinfoyt </h1>{" "}
//       <p className="text-center mt-3">
//         <Link to="/about"> About </Link>|{" "}
//         <Link
//           to="/contact
//         "
//         >
//           Contact{" "}
//         </Link>{" "}
//         |<Link to="/policy"> Privacy Policy </Link>{" "}
//       </p>{" "}
//     </div>
//   );
// };
//
// export default Footer;
