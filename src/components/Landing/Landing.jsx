import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import earth from "../../assets/earth.png";
import coins from "../../assets/coins.png";
import TxtRotate from "../../scripts/TextRotate";
import styles from "./Landing.module.css";
import ReactPixel from 'react-facebook-pixel';
import { useNavigate  } from 'react-router-dom';

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: true, // enable logs
};
ReactPixel.init('1233452067589283', "", options);
const Landing = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    const rotateElement = document.getElementById("txt-rotate");
    const toRotate = ["CUSTOM CONTRACTs", "NFT MARKETPLACEs", "DAPPs"];
    const period = 1000;
    if (toRotate) {
      new TxtRotate(rotateElement, toRotate, period);
    }
  }, []);
  const sendDataToPably = (data) => {
    fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY5MDYzZTA0MzU1MjY1NTUzMyI_3D_pc", {  // Enter your IP address here
  
    method: 'POST', 
    mode: 'cors', 
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  
  })
}

  return (
    <div className={styles.landing}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          mt: { xs: "4rem", md: 2 },
        }}
      >
        <span id="home" />
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "90%", md: "40%" },
            mx: "auto",
          }}
        >
          <Box
            className={styles.landingText}
            sx={{
              textAlign: "left",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              width: "100%",
              px: { xs: "1rem", sm: "3rem" },
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontWeight: 700,
                borderLeft: "3px solid #00d186",
                px: 1.5,
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
              }}
            >
              THE MATRIX LABS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "3rem" },
                mt: 2,
              }}
            >
              WE CREATE
            </Typography>
            <Typography
              id="txt-rotate"
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "3rem" },
                color: "#00d186",
                mt: 1,
              }}
            >
              CUSTOM CONTRACT
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontWeight: 500,
                mt: 2,
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
              }}
            >
              We provide blockchain services from Smart Contract Development and
              Audit to creating Launchpads, NFT Marketplaces and any kind of
              unique DAPPs
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                mb: 4,
              }}
            >
              <Button
                className={styles.invertButton}
                sx={{
                  my: 2.5,
                  mr: 1,
                  backgroundColor: "transparent",
                  border: "2px solid #00D186",
                  fontWeight: 600,
                  display: "block",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  width: "100%",
                  padding: { xs: "1px 0.5rem", sm: "3px 1rem" },
                }}
                onClick={(e) => {
                  ReactPixel.trackCustom("QouteClicked", {value: "10", currency: "USD" });
                  sendDataToPably({event: "QouteClicked", value: "10", currency: "USD", userAgent: navigator.userAgent, href: window.location.href, timestamp: Math.floor(Date.now() / 1000) });
                  e.preventDefault();
                  navigate('/form');
                }}
              >
                Get Quote
              </Button>
              <Button
                sx={{
                  my: 2.5,
                  ml: 1,
                  backgroundColor: "#00D186",
                  display: "block",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  fontWeight: 600,
                  width: "100%",
                  padding: { xs: "1px 0.5rem", sm: "3px 1rem" },
                  "&:hover": {
                    backgroundColor: "#00D186",
                  },
                }}
              >
                DAPP
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          className={styles.earth}
          id={styles.coin_image}
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "100%", md: "43%" },
            mx: "auto",
            mr: 0,
          }}
          component="img"
          alt="Coins"
          src={coins}
        ></Box>
      </Container>
    </div>
  );
};

export default Landing;
