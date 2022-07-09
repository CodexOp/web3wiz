import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo.png";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import styles from "./Footer.module.css";

const Footer = () => {
  // const footerColumn1Headers = ["Home", "Dashboard", "Earn", "Stake"];
  // const footerColumn2Headers = ["Track", "Calculator", "Send Krypt", "Docs"];

  return (
    <div className={styles.footer}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          flexDirection: { xs: "column", sm: "row" },
          mt: "5rem",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: { xs: "90%", sm: "100%" },
            maxWidth: { xs: "400px", md: "40%" },
            color: "white",
            px: { xs: "1rem", sm: "3rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                height: "auto",
                width: "90px",
              }}
              component="img"
              alt="logo"
              src={Logo}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "flex" },
                fontWeight: 800,
                fontSize: { xs: "1rem", sm: "1.3rem", m: "1.5rem" },
                textDecoration: "none",
                my: "auto",
              }}
            >
              MATRIX LABS
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              ml: "1rem",
              fontSize: { xs: "0.9rem", sm: "1rem", m: "1.3rem" },
              fontWeight: 500,
              mt: 2,
            }}
          >
            One stop destination for all Blockchain Solutions.
          </Typography>
          <Box
            sx={{
              ml: "1rem",
              mt: 2.5,
            }}
          >
            <a
              className={styles.link}
              href="https://www.instagram.com/the_matrix_labs/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              className={styles.link}
              href="https://www.linkedin.com/company/the-matrix-labs/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn sx={{ ml: 2 }} />
            </a>
            <a
              className={styles.link}
              href="https://twitter.com/TheMatrixLabs"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Twitter sx={{ ml: 2 }} />
            </a>
          </Box>
        </Box>
        <Box flexGrow={1} />
        {/* <Box
          sx={{
            height: "100%",
            width: { xs: "90%", sm: "100%" },
            maxWidth: { xs: "400px", md: "40%" },
            px: { xs: "2rem", sm: "3rem" },
            mb: { xs: "2rem", sm: "none" },
            color: "white",
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "center" },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1rem", sm: "1.3rem", m: "1.5rem" },
                fontWeight: 700,
                fontFamily: "Montserrat",
                color: "#0ed8a7",
                mt: 4,
              }}
            >
              IMPORTANT LINKS
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
              }}
            >
              <Box
                flexGrow={1}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {footerColumn1Headers.map((header) => {
                  return (
                    <Typography
                      key={header}
                      variant="p"
                      sx={{
                        mt: 3,
                        fontWeight: 500,
                        fontFamily: "Poppins",
                      }}
                    >
                      {header}
                    </Typography>
                  );
                })}
              </Box>
              <Box
                flexGrow={1}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {footerColumn2Headers.map((header) => {
                  return (
                    <Typography
                      key={header}
                      variant="p"
                      sx={{
                        mt: 3,
                        fontWeight: 500,
                        fontFamily: "Poppins",
                      }}
                    >
                      {header}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box> */}
      </Container>
    </div>
  );
};

export default Footer;
