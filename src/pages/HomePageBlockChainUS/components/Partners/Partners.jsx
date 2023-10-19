import React from 'react';
import styles from './partners.module.css'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import partner1 from "../../../../assets/partners/pinksale.png"
import partner2 from "../../../../assets/partners/interfi.png"
import partner3 from "../../../../assets/partners/cryptechking.png"
import partner4 from "../../../../assets/partners/coinsult.png"
import partner5 from "../../../../assets/partners/cfgninja.png"
import partner6 from "../../../../assets/partners/contractchecker.png"

const Partners = () => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 200,
        slidesToShow: 4 ,
        slidesToScroll: 1,
        rtl: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        mobileFirst:true,//add this one

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
            },
          },
        ] 
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
          align="center"
          className={styles.ourpartner_heading}
          sx={{
            fontFamily: "poppins",
            fontSize: { xs: "30px", sm: "52px" },
            fontWeight: 700,
          }}
        >
          Our &nbsp;
          <span
         
          className={styles.borderText}
          sx={{
            fontFamily: "poppins",
            fontWeight: 700,
            fontSize: { xs: "30px", sm: "52px" },
          }}
        >
          Partners
        </span>
        </Typography>
       
      </Box>
      <Box sx={{
           width:"100%",
           margin:"auto"
          }}>
      <Slider {...settings}>
      <div className={styles.imgSizeReduce}>
      <a href="https://www.pinksale.finance/" alt="partners" target="_blank" rel="noreferrer">
        <div className={styles.flexPartner}>

      <img src={partner1} alt='partners' />
      <p className={styles.partners_name}>PINKSALE</p>
        </div>
      </a>
      </div>
      <div className={styles.imgSizeReduce}>
      <a href="https://www.interfi.network/" alt="partners" target="_blank" rel="noreferrer">
        <div className={styles.flexPartner}>

      <img src={partner2} alt='partners' />
      <p className={styles.partners_name}>INTERFI</p>
        </div>
      </a>
      </div>
      <div className={styles.imgSizeReduce}>
      <a href="https://www.contractchecker.app/" alt="partners" target="_blank" rel="noreferrer">
        <div className={styles.flexPartner}>
        <img src={partner6} alt='partners' />
        <p className={styles.partners_name}>Contract Checker</p>
        </div>
      </a>
      </div>

      <div className={styles.imgSizeReduce}>
      <a href="https://coinsult.net/" alt="partners" target="_blank" rel="noreferrer">
        <div className={styles.flexPartner}>

      <img src={partner4} alt='partners' />
      <p className={styles.partners_name}>COINSULT</p>
        </div>
      </a>
      </div>
      <div className={styles.imgSizeReduce}>
      <a href="https://cfg.ninja/" alt="partners" target="_blank" rel="noreferrer">
        <div className={styles.flexPartner}>

      <img src={partner5} alt='partners' />
      <p className={styles.partners_name}>CFG NINJA</p>
        </div>
      </a>
      </div>
  
  
      </Slider>
      </Box>
 
    </Container>
  )
}

export default Partners