import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import block from "../../assets/block.svg";
import blockchain from "../../assets/blockchain.svg";
import globe from "../../assets/globeBig.svg";
import styles from "./ServicesProvided.module.css";

const ServicesProvided = () => {
  const cardData = [
    {
      image: block,
      header: "Dapp Development",
      text: "We focus on pragmatic approaches and solutions for using Blockchain for Integration in B2B ecosystems. We believe in a holistic approach where we guide you from ideation to realization of your Blockchain for Integration project.",
    },
    {
      image: blockchain,
      header: "Smart Contract Development",
      text: "Professional Blockchain smart contract development services and consultancy for smart contract architecture, design, and development",
    },
    {
      image: globe,
      header: "Website Development",
      text: "We offer a wide range of web development services with latest web development features, including up-to-date guidelines, search friendliness for search accessibility, compatibility with a screen reader for visually impaired, web semantics, and rich snippets.",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "5rem",
      }}
    >
      <span id="services" />
      <Box
        className={styles.primaryText}
        sx={{
          width: "100%",
          height: "auto",
          my: 3,
          mx: 3,
          px: { xs: "0rem", sm: "3rem" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            fontWeight: 700,
          }}
        >
          SERVICES PROVIDED BY
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
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-evenly" },
          mt: { xs: "4rem", md: 12 },
          width: "100%",
        }}
      >
        {cardData.map((card) => {
          return (
            <Box
              key={card.header}
              className={styles.card}
              sx={{
                height: "auto",
                width: "100%",
                maxWidth: { xs: "90%", sm: "80%", md: "300px" },
                mx: { xs: "auto", md: 3 },
                display: "flex",
                flexDirection: "column",
                flexWrap: { xs: "wrap", sm: "nowrap" },
                justifyContent: "flex-start",
                alignItems: "center",
                borderRadius: "20px",
                px: { xs: 2, sm: 3 },
                py: { xs: 2 },
                my: 3,
              }}
            >
              <Box
                className={styles.image}
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "175px",
                  mt: 2,
                }}
                component="img"
                alt={card.header}
                src={card.image}
              />
              <Typography
                variant="h6"
                className={styles.primaryText}
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", sm: "1.4rem" },
                  textAlign: "left",
                  width: "100%",
                  mt: 4,
                }}
              >
                {card.header}
              </Typography>
              <Typography
                variant="h6"
                className={styles.secondaryText}
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: { xs: "0.8rem", sm: "1.1rem" },
                  mt: 1,
                }}
              >
                {card.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ServicesProvided;
