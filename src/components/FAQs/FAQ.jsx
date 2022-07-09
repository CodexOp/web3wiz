import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "./Card";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import styles from "./FAQs.module.css";

const FAQs = () => {
  const cardData = [
    {
      question: "Do you provide custom smart contracts?",
      answer:
        "Yes, we do provide Custom Smart Contracts according to the client’s needs.",
    },
    {
      question: "How long is the after sales service?",
      answer:
        " Customer satisfaction is our top priority. So we provide upto 7 days of service from the date of delivery.",
    },
    {
      question: "Do you provide hosting as well?",
      answer: "Yes, we do provide hosting solutions if the clients need it.",
    },
    {
      question: "Do you provide presale support?",
      answer: "Yes, will be providing presale support if the clients need it.",
    },
    {
      question: "Do you take upfront payment?",
      answer:
        "Yes, we will be taking 50% payment upfront before we start working on any order.",
    },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "5rem",
      }}
    >
      <span id="contact" />
      <Box
        className={styles.primaryText}
        sx={{
          height: "auto",
          width: "100%",
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
          FREQUENTLY ASKED
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
          QUESTIONS
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "flex-start",
          mt: { xs: "4rem", md: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "evenly" },
            mt: { xs: "4rem", md: 2 },
            width: "100%",
          }}
        >
          {cardData.map((cardData) => {
            return <Card key={cardData.question} data={cardData} />;
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: { xs: "4rem", md: 2 },
            width: { xs: "90%", md: "100%" },
            height: "100%",
            px: { xs: "1rem", sm: "3rem" },
            pt: { xs: "2rem", sm: "1rem" },
          }}
        >
          <Typography
            variant="h4"
            className={styles.primaryText}
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "1.8rem", sm: "2.2rem" },
              fontWeight: 700,
              textAlign: "left",
            }}
          >
            HAVE ANY QUESTIONS?
            <br />
            CONTACT US 👇
          </Typography>
          <Typography
            className={styles.secondaryText}
            sx={{
              fontWeight: 500,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              mt: "2rem",
            }}
          >
            Don&rsquo;t hesitate to ask any questions, we will try our best to
            solve any kind of query you have.{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: "2rem",
              gap: { xs: "0.5rem", sm: "1rem" },
            }}
          >
            <a
              href="https://www.instagram.com/the_matrix_labs/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className={styles.image} />
            </a>
            <a
              href="https://www.linkedin.com/company/the-matrix-labs/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className={styles.image} />
            </a>
            <a
              href="https://twitter.com/TheMatrixLabs"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className={styles.image} />
            </a>
          </Box>
          <a href="https://t.me/brick_matrix" target="_blank" rel="noreferrer">
            <Button
              sx={{
                mt: { xs: "2rem", md: "3rem" },
                ml: 1,
                backgroundColor: "#00D186",
                color: "black",
                display: "block",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                fontWeight: 600,
                width: "100%",
                maxWidth: "350px",
                borderRadius: "50px",
                padding: { xs: "1px 0.5rem", sm: "3px 1rem" },
                "&:hover": {
                  backgroundColor: "#00D186",
                },
              }}
            >
              CONTACT US
            </Button>
          </a>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQs;
