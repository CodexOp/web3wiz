import React from 'react';
import styles from './raised.module.css'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import lockIcon from "../../components/assests/images/icon-mail.svg"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import partner1 from "../../../../assets/partners/pinksale.png"
import partner2 from "../../../../assets/partners/interfi.png"
import partner3 from "../../../../assets/partners/cryptechking.png"
import partner4 from "../../../../assets/partners/coinsult.png"
import partner5 from "../../../../assets/partners/cfgninja.png"
import partner6 from "../../../../assets/partners/contractchecker.png"

const Raised = () => {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 3000,
    pauseOnHover:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: false,
    autoplay: true,
    autoplaySpeed: 0,
    mobileFirst:true,//add this one

    cssEase: "linear",
    responsive: [
          {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
    ] 
      };
  var settings2 = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true,
    pauseOnHover:false,
    speed: 3000,
    autoplaySpeed: 0,
    mobileFirst:true,//add this one

    cssEase: "linear",
    responsive: [
          {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
    ] 
      };
  return (
    <>
    <Container
      maxWidth="xl"
      sx={{
        mt: "5rem",
      }}
    >
      <span id="services" />
      <Box
        className={styles.primaryText}
        sx={{
          width: "100%",
          height: "auto",
          px: { xs: "0rem", sm: "3rem" },
        }}
      >

       
      </Box>
      <Box sx={{
           width:"100%",
           margin:"auto"
          }}>
      <Slider {...settings}>
      <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>


                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>
      </Slider>
      </Box>
 
    </Container>
    <Container
      maxWidth="xl"
      sx={{
        my: "0.5rem",
      }}
    >
      <span id="services" />
      <Box
        className={styles.primaryText}
        sx={{
          width: "100%",
          height: "auto",
             
          px: { xs: "0rem", sm: "3rem" },
        }}
      >

       
      </Box>
      <Box sx={{
           width:"100%",
           margin:"auto"
          }}>
      <Slider {...settings2}>
      <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>
      </Slider>
      </Box>
 
    </Container>
    <Container
      maxWidth="xl"
      sx={{
        my: "0.5rem",
        mb:"5rem"
      }}
    >
      <span id="services" />
      <Box
        className={styles.primaryText}
        sx={{
          width: "100%",
          height: "auto",
       
          px: { xs: "0rem", sm: "3rem" },
        }}
      >

       
      </Box>
      <Box sx={{
           width:"100%",
           margin:"auto"
          }}>
      <Slider {...settings}>
      <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.bnbRaised}>
                            <img src={lockIcon} alt="logo" />
                            <div className={styles.infoBox}>
                            <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                            <h3 className={styles.projectName}>Cerebrum</h3>
                            </div>
                        </div>
                    </div>
      </Slider>
      </Box>
 
    </Container>
    </>
  )
}

export default Raised