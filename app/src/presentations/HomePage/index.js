/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SignupForm from "../../components/form";
import CustomButton from "../../components/buttons";
import "../../assets/styles/homepage.css";

const Homepage = () => {
  const buttonStyle2 = {
    width: "100%",
    background: "#5d54a3",
    marginBottom: "30px",
    padding: "15px 0",
    boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      background: "#5d54a3",
      boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <React.Fragment>
      {/* LEFT */}
      <div className="left-section">
        <div className="left-inner-box">
          <p className="left-header-text">
            Learn to code by <br />
            watching others
          </p>
          <p className="left-description-text">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorial is great, but understanding how developers think
            is invaluable
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right-section">
        <CustomButton
          title={
            <p>
              Try it free 7 days<span> then $20/mo. thereafter</span>
            </p>
          }
          buttonFunction={console.log("customButton")}
          style={buttonStyle2}
        />

        <div className="right-inner-box">
          <SignupForm dataOut={(e) => console.log(e)} />
          <p className="right-footer-text">
            By clicking the button, you are aggreeing to our{" "}
            <span className="right-footer-tandc">Terms and Services</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
