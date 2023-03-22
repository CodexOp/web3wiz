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
      <span id="testimonials" />
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
                                <div>I really appreciate how quick your responses and corrections here. Unlike other companies, the changes are quick, even after payment processing. </div>
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
                                <div>Your team's attention to detail is impressive. I rarely need to request corrections or changes to your work, unlike other vendors I've worked with in the past.</div>
                                <div className={styles.clientNameWrapper}>
                                    <div className={styles.clientName}>Joseph James</div>
                                    <div className={styles.clientInfo}>CTO - PureWallet</div>
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
                                <div>Hey, just wanted to say that I'm really impressed with your work. I know we hit a little snag with the deadline, but I appreciate how hard you guys worked to make sure we were happy with the final result.</div>
                                <div className={styles.clientNameWrapper}>
                                    <div className={styles.clientName}>Joseph James</div>
                                    <div className={styles.clientInfo}>Founder & CEO - CakePool</div>
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
                                <div>Your team gave me a clear plan for building a dapp when I was clueless. Thanks for the great communication and collaboration - the end result exceeded my expectations!</div>
                                <div className={styles.clientNameWrapper}>
                                    <div className={styles.clientName}>Joseph James</div>
                                    <div className={styles.clientInfo}>CMO - Cosmic Finance</div>
                                </div>
                            </div>
  
  
      </Slider>
      </Box>
 
    </Container>
  )
}

export default Review;