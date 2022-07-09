import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import brickmatrix from "../../assets/team/brickmatrix.jpg";
import codex from "../../assets/team/codex.jpg";
import brix from "../../assets/team/brix.jpg";
import styles from "./Team.module.css";

const Team = () => {
  const cardData = [
    {
      image: brickmatrix,
      experience: "LISTED ON PINKSALE & GEMPAD",
      name: "BRICK MATRIX",
      position: "Contract and Web3 Dev",
      message: "https://t.me/brick_matrix",
    },
    {
      image: codex,
      experience: "2 YRS OF EXPERINCE IN DESIGN",
      name: "CODEX",
      position: "DAPP and Web Dev",
      message: "https://t.me/Cod3xOp",
    },
    {
      image: brix,
      experience: "ECSTATIC ROOKIE",
      name: "BRIX",
      position: "Marketing and Management",
      message: "https://t.me/iiTzBrix",
    },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "5rem",
      }}
    >
      <span id="team" />
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
          TEAM MEMBERS
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
          justifyContent: { xs: "center", sm: "flex-start" },
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: { xs: 0, sm: "5rem" },
          flexWrap: "wrap",
          width: "100%",
          mt: "4rem",
          px: { xs: "0rem", sm: "4rem" },
        }}
      >
        {cardData.map((data) => {
          return (
            <Box
              key={data.name}
              className={styles.card}
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: { xs: "90%", sm: "250px" },
                maxHeight: "250px",
                textAlign: "center",
                my: 3,
                padding: { xs: "auto", sm: "2rem" },
                py: { xs: "1.5rem" },
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "75px",
                  mx: "auto",
                  borderRadius: "50%",
                }}
                component="img"
                alt={data.name}
                src={data.image}
              ></Box>
              <Button
                className={styles.borderAndText}
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid",
                  fontSize: "10px",
                  p: "2px 4px",
                  width: "fit-content",
                  mt: 2,
                  fontFamily: "Nunito Sans",
                  borderRadius: "7px",
                }}
              >
                {data.experience}
              </Button>
              <Typography
                variant="h6"
                className={styles.primaryText}
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  mt: 1,
                }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="h6"
                className={styles.secondaryText}
                sx={{
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {data.position}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  mt: 2,
                }}
              >
                <a href={data.message} target="_blank" rel="noreferrer">
                  <Button
                    className={styles.borderAndText}
                    sx={{
                      backgroundColor: "transparent",
                      border: "1px solid",
                      color: "#00D186",
                      fontSize: "0.7rem",
                      fontFamily: "Nunito Sans",
                      borderRadius: "7px",
                      p: "0.6rem 1.1rem",
                    }}
                  >
                    Message
                  </Button>
                </a>
                <Button
                  className={styles.connectButton}
                  sx={{
                    fontFamily: "Nunito Sans",
                    borderRadius: "7px",
                    fontSize: "0.7rem",
                    p: "0.6rem 1.1rem",
                    "&:hover": {
                      backgroundColor: "#00D186",
                    },
                  }}
                >
                  Connect
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Team;
