import React from "react";
import "src/assets/styles/homepage.css";
import { useStyles } from "./useStyles";
import SignupForm from "src/components/form";
import CustomButton from "src/components/buttons";

const Homepage = () => {
  const formSchema = [
    {
      name: "First Name",
      type: "string",
      required: true,
      modifier: "firstName",
      value: "",
    },
    {
      name: "Last Name",
      type: "string",
      required: true,
      modifier: "lastName",
      value: "",
    },
    {
      name: "Email Address",
      type: "string",
      required: true,
      modifier: "email",
      value: "",
    },
    {
      name: "Password",
      type: "string",
      required: true,
      modifier: "password",
      value: "",
    },
  ];

  const styles = useStyles();

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
          id={"ads-button"}
          btnFunction={() => console.log("customButton")}
          style={styles.buttonStyle}
        />

        <div className="right-inner-box">
          <SignupForm dataIn={formSchema} />
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
