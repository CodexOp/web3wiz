import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import rocket from "../../assets/rocket.png";
import sheild from "../../assets/sheild.png";
import gears from "../../assets/gears.png";
import styles from "./Growth.module.css";

const Growth = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          mt: { xs: "4rem", md: 2 },
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "600px", md: "45%" },
            mx: "auto",
          }}
          component="img"
          alt="ideas"
          src={rocket}
        ></Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "85%", md: "35%" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: { xs: "2rem", md: 0 },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              className={styles.primaryText}
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "1.8rem", sm: "2.2rem" },
                fontWeight: 700,
              }}
            >
              SKYROCKET YOUR GROWTH WITH US
            </Typography>
            <Box
              sx={{
                display: "flex",
                my: "2rem",
              }}
            >
              <Box
                className={styles.divBorder}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "flex-start",
                  pr: "1rem",
                  borderRight: "1px solid",
                }}
              >
                <Box
                  component="img"
                  alt="sheild"
                  src={sheild}
                  sx={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "60px",
                  }}
                />
                <Typography
                  className={styles.secondaryText}
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    mt: "auto",
                  }}
                >
                  PinkSale Listed Developer
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "flex-start",
                  padding: "0 2rem",
                }}
              >
                <Box
                  component="img"
                  alt="gears"
                  src={gears}
                  sx={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "85px",
                  }}
                />
                <Typography
                  className={styles.secondaryText}
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                  }}
                >
                  The best user interfaces
                </Typography>
              </Box>
            </Box>
            <Typography
              className={styles.primaryText}
              sx={{
                fontSize: "1.1rem",
                maxWidth: { xs: "95%", sm: "100%", md: "80%" },
              }}
            >
              Excel your business with cutting-edge blockchain technology by
              adopting to our services. We believe in 100% customer satisfaction
              and provide industry leading solutions.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Growth;
