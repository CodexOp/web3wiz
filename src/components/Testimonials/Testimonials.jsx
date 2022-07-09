import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bianca from "../../assets/bianca.png";
import lucas from "../../assets/lucas.png";
import michelle from "../../assets/michelle.png";
import quote from "../../assets/quote.png";
import stars from "../../assets/stars.png";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const cardData = [
    {
      image: bianca,
      name: "Bianca",
      text: "A fantastic organisation! Great cutomer support from beginning to end of the process. The team is really informed and go the extra mile at every stage. I would recommend them unreservedly.",
    },
    {
      image: lucas,
      name: "Lucas",
      text: "The NFT space can be daunting, but Matrix Labs was able to help me understand not only what an NFT really is, but what, and where to find Opensea. ",
    },
    {
      image: michelle,
      name: "Michelle",
      text: "Wow this is just the best, i am really happy working with these guys, just dont waste your time looking for another seller, just use them. Thanks again",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Box
        className={styles.primaryText}
        sx={{
          height: "auto",
          my: "4rem",
          pt: "3rem",
          mx: 3,
          px: { xs: "0rem", sm: "3rem" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "1.8rem", sm: "2.5rem" },
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          WHAT OUR CUSTOMERS SAY
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
              key={card.name}
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
                mb: 3,
                mt: 10,
              }}
            >
              <Box
                className={styles.imagebox}
                sx={{
                  height: "0px",
                }}
              >
                <Box
                  className={styles.quote}
                  sx={{
                    height: "auto",
                    width: "100%",
                    maxWidth: { xs: "50px", sm: "60px" },
                    mt: 2,
                  }}
                  component="img"
                  alt="quote"
                  src={quote}
                />
                <Box
                  className={styles.stars}
                  sx={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "125px",
                    mt: 2,
                  }}
                  component="img"
                  alt="stars"
                  src={stars}
                />
              </Box>
              <Typography
                variant="h6"
                className={styles.primaryText}
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  fontSize: { xs: "0.8rem", sm: "1.1rem" },
                  mt: 1,
                }}
              >
                {card.text}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "left",
                }}
              >
                <Box
                  sx={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "50px",
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
                    fontSize: { xs: "0.7rem", sm: "1rem" },
                    textAlign: "left",
                    width: "100%",
                    mt: 2,
                  }}
                >
                  {card.name}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Testimonials;
