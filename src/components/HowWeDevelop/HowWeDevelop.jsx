import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import circlearrow from "../../assets/circlearrow.png";
import uidesign from "../../assets/uidesign.png";
import web3integration from "../../assets/web3integration.png";
import testing from "../../assets/testing.png";
import styles from "./HowWeDevelop.module.css";

const HowWeDevelop = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          height: "auto",
          my: "4rem",
          pt: "3rem",
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
            textAlign: "center",
          }}
        >
          HOW WE DEVELOP DAPPs
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          mt: { xs: "4rem", md: 2 },
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "300px", md: "250px" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: "225px", md: "250px" },
              mx: "auto",
            }}
            component="img"
            alt="uidesign"
            src={uidesign}
          ></Box>
          <Typography
            className={styles.primaryText}
            variant="h6"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              textAlign: "center",
              fontSize: { xs: "1.2rem", sm: "1.4rem" },
            }}
          >
            UI DESIGNING
          </Typography>
        </Box>
        <Box
          className={styles.circleArrow}
          sx={{
            height: { xs: "50px", md: "70px" },
            width: "100%",
            maxWidth: { xs: "50px", md: "70px" },
            mx: "auto",
            my: { xs: "2rem", md: 0 },
            rotate: { xs: "90deg", md: "0deg" },
          }}
          component="img"
          alt="circle arrow"
          src={circlearrow}
        ></Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "240px", md: "250px" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: "240px", md: "250px" },
              mx: "auto",
            }}
            component="img"
            alt="web3integration"
            src={web3integration}
          ></Box>
          <Typography
            variant="h6"
            className={styles.primaryText}
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              textAlign: "center",
              fontSize: { xs: "1.2rem", sm: "1.4rem" },
            }}
          >
            WEB3 INTEGRATION
          </Typography>
        </Box>
        <Box
          className={styles.circleArrow}
          sx={{
            height: { xs: "50px", md: "70px" },
            width: "100%",
            maxWidth: { xs: "50px", md: "70px" },
            mx: "auto",
            my: { xs: "2rem", md: 0 },
          }}
          component="img"
          alt="circle arrow"
          src={circlearrow}
        ></Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "225x", md: "250px" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: "225px", md: "250px" },
              mx: "auto",
            }}
            component="img"
            alt="complete testing"
            src={testing}
          ></Box>
          <Typography
            variant="h6"
            className={styles.primaryText}
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              textAlign: "center",
              fontSize: { xs: "1.2rem", sm: "1.4rem" },
            }}
          >
            COMPLETE TESTING
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HowWeDevelop;
