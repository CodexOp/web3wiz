import React from 'react';
import styles from './review.module.css'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import starIcon from "../../components/assests/images/icon-star.svg"
import quotesIcon from "../../components/assests/images/icon-quotes.svg"
import clientImg from "../../components/assests/images/icon-clientimg.svg";

const Review = () => {
    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: false,
        autoplay: true,
        autoplaySpeed: 5000,
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
         
          px: { xs: "30px", sm: "52px" },
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
          Our Client &nbsp;
          <span
         
          className={styles.borderText}
          sx={{
            fontFamily: "poppins",
            fontWeight: 700,
            fontSize: { xs: "30px", sm: "52px" },
          }}
        >
          Reviews
        </span>
        </Typography>
       
      </Box>
      <Box sx={{
           width:"100%",
           margin:"auto",
          }}>
      <Slider {...settings}>
      <div className={styles.clientReviewCrouselItem}>
                                <img src={quotesIcon} alt="quotesIcon" className={styles.quotesIcon}/>
                                <div className={styles.clientWrapper}>
                                    <div className={styles.clientImgWrapper}>
                                        <img src={clientImg} alt="clientImg"  className={styles.clientImgIcon}/>
                                    </div>
                                    <div className={styles.starDiv}>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    </div>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa efficitur, lacinia ex sed, porta metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                <div className={styles.clientNameWrapper}>
                                    <div className={styles.clientName}>Joseph James</div>
                                    <div className={styles.clientInfo}>Founder - Cerebrum</div>
                                </div>
                            </div>
                            <div className={styles.clientReviewCrouselItem}>
                                <img src={quotesIcon} alt="quotesIcon" className={styles.quotesIcon}/>
                                <div className={styles.clientWrapper}>
                                    <div className={styles.clientImgWrapper}>
                                        <img src={clientImg} alt="clientImg"  className={styles.clientImgIcon}/>
                                    </div>
                                    <div className={styles.starDiv}>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    </div>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa efficitur, lacinia ex sed, porta metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                <div className={styles.clientNameWrapper}>
                                    <div className={styles.clientName}>Joseph James</div>
                                    <div className={styles.clientInfo}>Founder - Cerebrum</div>
                                </div>
                            </div>
                            <div className={styles.clientReviewCrouselItem}>
                                <img src={quotesIcon} alt="quotesIcon" className={styles.quotesIcon}/>
                                <div className={styles.clientWrapper}>
                                    <div className={styles.clientImgWrapper}>
                                        <img src={clientImg} alt="clientImg"  className={styles.clientImgIcon}/>
                                    </div>
                                    <div className={styles.starDiv}>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                    </div>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa efficitur, lacinia ex sed, porta metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                <div className={styles.clientNameWrapper}>
                                    <div className={styles.clientName}>Joseph James</div>
                                    <div className={styles.clientInfo}>Founder - Cerebrum</div>
                                </div>
                            </div>
  
  
      </Slider>
      </Box>
 
    </Container>
  )
}

export default Review;