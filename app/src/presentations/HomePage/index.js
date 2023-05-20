/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Typography, Box, Button } from "@mui/material";
import SignupForm from "../../components/form";
import useViewModel from "./useViewModel";
import CustomButton from "../../components/buttons";
import "../../assets/styles/homepage.css";

const Homepage = () => {
  const model = useViewModel();

  const buttonStyle2 = {
    width: "100%",
    background: "#5d54a3",
    margin: "20px 0",
    padding: "15px 0",
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
            <span>
              See how experienced developers solve problems in real-time.
            </span>
            <span>
              Watching scripted tutorial is great, but understanding how
            </span>
            <span>developers think is invaluable</span>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <Box className="right-section">
        <CustomButton
          title={"Try it free 7 days then $20/mo. there after"}
          buttonFunction={console.log("customButton")}
          style={buttonStyle2}
        />

        <Box
          sx={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <SignupForm dataOut={(e) => console.log(e)} />

          <Typography sx={{ color: "black" }}>
            By clicking the button, you are affreeing to our{" "}
            <Typography>Terms and Services</Typography>
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Homepage;
