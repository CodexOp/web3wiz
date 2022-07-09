import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import metamarketing from "../../assets/metamarketing.png";
import paperPlane from "../../assets/paper-plane.png";
import globe from "../../assets/globe.png";
import { navData } from "./data";
import styles from "./ProjectsDone.module.css";

const ProjectsDone = () => {
  const [activeNav, setActiveNav] = useState(Object.keys(navData)[0]);
  const [activeCardData, setActiveCardData] = useState();

  useEffect(() => {
    setActiveCardData(navData[activeNav]);
  }, [activeNav]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <span id="projects" />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          my: 3,
          mx: 3,
          px: { xs: "0rem", sm: "3rem" },
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          className={styles.primaryText}
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            fontWeight: 700,
          }}
        >
          PROJECTS DONE BY
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
      <Container
        maxWidth="xl"
        sx={{
          mt: 5,
          mx: { xs: "auto", sm: 4, md: 5 },
        }}
      >
        <Box
          className={`${styles.card} ${styles.projectNav}`}
          sx={{
            width: { xs: "100%", sm: "90%", md: "94%" },
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            gap: { xs: 1, sm: 2 },
            borderRadius: "10px",
            p: { xs: "auto", sm: "3px" },
            overflowX: "auto",
            scrollbarWidth: "thin",
          }}
        >
          {Object.keys(navData).map((item) => {
            return (
              <Button
                className={styles.primaryText}
                key={item}
                sx={{
                  my: 1,
                  ml: { xs: 1, sm: 1.5 },
                  backgroundColor:
                    activeNav === item ? "#00D186" : "transparent",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  display: "block",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  padding: "0px 0.5rem",
                  width: "fit-content",
                  flexShrink: 0,
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor:
                      activeNav === item ? "#00D186" : "transparent",
                  },
                }}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "evenly" },
          mt: { xs: "4rem", md: 2 },
        }}
      >
        {activeCardData &&
          activeCardData.map((card) => {
            return (
              <Box
                className={styles.card}
                key={card.header}
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: { xs: "90%", sm: "80%", md: "max( 40% , 475px)" },
                  mx: { xs: "auto", md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                  justifyContent: "space-around",
                  borderRadius: "20px",
                  p: { xs: "auto", sm: 2 },
                  py: { xs: "auto" },
                  my: 3,
                }}
              >
                <Box
                  component="img"
                  alt={card.header}
                  src={card.image}
                  sx={{
                    borderRadius: "20px",
                    width: "100%",
                    height: "auto",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: { xs: 1, sm: 0 },
                    mt: { xs: 0, sm: 1 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={metamarketing}
                      alt="icon"
                      sx={{
                        height: { xs: "25px", sm: "30px" },
                        width: { xs: "42px", sm: "55px" },
                      }}
                    />
                    <Typography
                      variant="h6"
                      className={styles.primaryText}
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: { xs: "1.1rem", sm: "1.3rem" },
                      }}
                    >
                      {card.header}
                    </Typography>
                    <Box flexGrow={1} />
                    <Box
                      className={styles.image}
                      component="img"
                      src={paperPlane}
                      alt="paper plane"
                      sx={{
                        height: { xs: "23px", sm: "27px" },
                        width: { xs: "23px", sm: "27px" },
                        mx: 0.5,
                      }}
                    />
                    <a href={card.link} target="_blank" rel="noreferrer">
                      <Box
                        className={styles.image}
                        component="img"
                        src={globe}
                        alt="globe"
                        sx={{
                          height: { xs: "23px", sm: "27px" },
                          width: { xs: "23px", sm: "27px" },
                          mx: 0.5,
                        }}
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
    </Container>
  );
};

export default ProjectsDone;
