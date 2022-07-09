import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import blockchain from "../../assets/blockchain.png";
import maple from "../../assets/maple.png";
// import lightning from "../../assets/lightning.png";
import lightning from "../../assets/lightning-light.png";
import contract from "../../assets/contract.png";
import styles from "./WhyUs.module.css";

const WhyUs = () => {
  const cardData = [
    { image: maple, text: "Best In Class Service" },
    { image: contract, text: "24x7 Customer Support" },
    { image: lightning, text: "Faster Delivery" },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: 5,
      }}
    >
      <span id="about" />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          my: 3,
          mx: 3,
          px: { xs: "0rem", sm: "3rem" },
        }}
      >
        <Typography
          className={styles.primaryText}
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            fontWeight: 700,
          }}
        >
          WHY CHOOSE
        </Typography>
        <Typography
          variant="h3"
          className={styles.borderText}
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", sm: "3rem" },
          }}
        >
          MATRIX LABS
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          mt: { xs: "4rem", md: 2 },
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "600px", md: "500px" },
            mx: "auto",
          }}
          component="img"
          alt="blockchain"
          src={blockchain}
        ></Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "85%", md: "43%" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: { xs: "2rem", md: 0 },
          }}
        >
          <Typography
            variant="h6"
            className={styles.secondaryText}
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              fontWeight: 500,
            }}
          >
            Security is critical in the blockchain space. Our services help
            everyone from startups to enterprises to launch and maintain their
            applications on the blockchain.
            <br />
            We make sure to deliver the product fast and provide active support
            to the client in every phase including presale.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          width: "100%",
          mt: "4rem",
        }}
      >
        {cardData.map((data) => {
          return (
            <Box
              className={styles.card}
              key={data.text}
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: { xs: "200px", sm: "350px" },
                maxHeight: "250px",
                textAlign: "center",
                mx: "auto",
                my: 3,
                padding: "2rem",
                py: "2.5rem",
                borderRadius: "20px",
              }}
            >
              <Box
                className={data.image === lightning ? styles.lightning : ""}
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "125px",
                  mx: "auto",
                }}
                component="img"
                alt={data.text}
                src={data.image}
              ></Box>
              <Typography
                variant="h6"
                className={styles.primaryText}
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  mt: 1,
                }}
              >
                {data.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default WhyUs;
