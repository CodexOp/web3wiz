import React from 'react';
import styles from './partners.module.css'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import partner1 from "../../assets/partners/pinksale.png"
import partner2 from "../../assets/partners/interfi.png"
import partner3 from "../../assets/partners/cryptechking.png"
import partner4 from "../../assets/partners/coinsult.png"
import partner5 from "../../assets/partners/cfgninja.png"
import partner6 from "../../assets/partners/contractchecker.png"

const Partners = () => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
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
          PARTNERS
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
      <Box sx={{
           width:"90%",
           margin:"auto"
          }}>
      <Slider {...settings}>
      <div>
      <a href="https://www.pinksale.finance/" alt="partners" target="_blank" rel="noreferrer">
      <img src={partner1} alt='partners' />
      <p className={styles.partners_name}>PINKSALE</p>
      </a>
      </div>
      <div>
      <a href="https://www.interfi.network/" alt="partners" target="_blank" rel="noreferrer">
      <img src={partner2} alt='partners' />
      <p className={styles.partners_name}>INTERFI</p>
      </a>
      </div>
      <div>
      <a href="https://www.contractchecker.app/" alt="partners" target="_blank" rel="noreferrer">
      <img src={partner6} alt='partners' />
      <p className={styles.partners_name}>Contract Checker</p>
      </a>
      </div>

      <div>
      <a href="https://coinsult.net/" alt="partners" target="_blank" rel="noreferrer">
      <img src={partner4} alt='partners' />
      <p className={styles.partners_name}>COINSULT</p>
      </a>
      </div>
      <div>
      <a href="https://cfg.ninja/" alt="partners" target="_blank" rel="noreferrer">
      <img src={partner5} alt='partners' />
      <p className={styles.partners_name}>CFG NINJA</p>
      </a>
      </div>
  
  
      </Slider>
      </Box>
 
    </Container>
  )
}

export default Partners