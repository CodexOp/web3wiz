import React from 'react';
import styles from './raised.module.css'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import lockIcon from "../../components/assests/images/icon-mail.svg"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import raised1 from "../../components/assests/images/raised1.png"
import raised2 from "../../components/assests/images/raised2.png"
import raised3 from "../../components/assests/images/raised3.png"
import raised4 from "../../components/assests/images/raised4.jpg"
import raised5 from "../../components/assests/images/raised5.webp"
import raised6 from "../../components/assests/images/raised6.png"
import raised7 from "../../components/assests/images/raised7.jpg"
import raised8 from "../../components/assests/images/raised8.png"
import raised9 from "../../components/assests/images/raised9.png"
import raised10 from "../../components/assests/images/raised10.gif"
import raised11 from "../../components/assests/images/raised11.png"
import raised12 from "../../components/assests/images/raised12.png"
import raised13 from "../../components/assests/images/raised13.png"
import raised14 from "../../components/assests/images/raised14.jpg"
import raised15 from "../../components/assests/images/raised15.jpg"
import raised16 from "../../components/assests/images/raised16.png"
import raised17 from "../../components/assests/images/raised17.jpg"
import raised18 from "../../components/assests/images/raised18.jpg"
import raised19 from "../../components/assests/images/raised19.jpg"


const Raised = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: false,
    autoplay: true,
    autoplaySpeed: 0,
    mobileFirst: true,//add this one

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
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true,
    pauseOnHover: false,
    speed: 3000,
    autoplaySpeed: 0,
    mobileFirst: true,//add this one

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
          width: "100%",
          margin: "auto"
        }}>
          <Slider {...settings}>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised1} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>1500 BNB Raised</h3>
                  <h3 className={styles.projectName}>Rocket Global</h3>
                </div>
              </div>
            </div>


            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised2} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>1333 BNB Raised</h3>
                  <h3 className={styles.projectName}>Golddoge Sachs</h3>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised10} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>346 BNB Raised</h3>
                  <h3 className={styles.projectName}>Goldenzone</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised5} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>1025 BNB Raised</h3>
                  <h3 className={styles.projectName}>Chihuahua</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised6} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>586 BNB Raised</h3>
                  <h3 className={styles.projectName}>Luna Freaks</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised11} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>269 BNB Raised</h3>
                  <h3 className={styles.projectName}>Pink Piggy</h3>
                </div>
              </div>
            </div>
          </Slider>
        </Box>

      </Container>
      <Container
        maxWidth="xl"
        sx={{
          my: "1rem",
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
          width: "100%",
          margin: "auto"
        }}>
          <Slider {...settings2}>
            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised12} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>263 BNB Raised</h3>
                  <h3 className={styles.projectName}>RestN</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised13} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>226 BNB Raised</h3>
                  <h3 className={styles.projectName}>Stake to own</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised4} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>1085 BNB Raised</h3>
                  <h3 className={styles.projectName}>Decentralized United</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised3} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>1200 BNB Raised</h3>
                  <h3 className={styles.projectName}>Cosmik Finance</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised14} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>222 BNB Raised</h3>
                  <h3 className={styles.projectName}>Amber Protocol</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised15} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>198 BNB Raised</h3>
                  <h3 className={styles.projectName}>PandoraX</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised16} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>148 BNB Raised</h3>
                  <h3 className={styles.projectName}>PureFi</h3>
                </div>
              </div>
            </div>
          </Slider>
        </Box>

      </Container>
      <Container
        maxWidth="xl"
        sx={{
          mb: "5rem"
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
          width: "100%",
          margin: "auto"
        }}>
          <Slider {...settings}>
            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised7} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>500 BNB Raised</h3>
                  <h3 className={styles.projectName}>Yinyang</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised8} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>473 BNB Raised</h3>
                  <h3 className={styles.projectName}>Bulldog Inu</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised9} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>382 BNB Raised</h3>
                  <h3 className={styles.projectName}>Web3 Betting</h3>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised17} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>146 BNB Raised</h3>
                  <h3 className={styles.projectName}>Lucky Metaverse</h3>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised18} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>142 BNB Raised</h3>
                  <h3 className={styles.projectName}>Multinet</h3>
                </div>
              </div>
            </div>



            <div className={styles.box}>
              <div className={styles.bnbRaised}>
                <img src={raised19} alt="logo" />
                <div className={styles.infoBox}>
                  <h3 className={styles.raisedAmount}>120 BNB Raised</h3>
                  <h3 className={styles.projectName}>Ak-7k</h3>
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