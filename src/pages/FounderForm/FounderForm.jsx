import React, { useEffect, useState, useRef } from "react";
// import { ReactComponent as PageBtnIcon } from "../../assets/images/icon-pagebtn.svg";
import styles from "./style.module.css";
import { Helmet } from "react-helmet-async";
import ReactPixel from "react-facebook-pixel";
import PageFounders from "./Page/PageFounders";

const FounderForm = () => {
  const [pagenum, setPagenum] = useState(0);
  const matrix_button = useRef();
  const [userData, setUserData] = useState()

  const sendDataToPably = (data) => {
    fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY5MDYzZTA0MzU1MjY1NTUzMyI_3D_pc", {  // Enter your IP address here
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data) // body data type must match "Content-Type" header

    })
  }


  useEffect(() => {
    ReactPixel.trackCustom('formPageView', { value: 1, currency: 'USD' });
    sendDataToPably({ event: "formPageView", value: 1, currency: "USD", userAgent: navigator.userAgent, href: window.location.href, timestamp: Math.floor(Date.now() / 1000) });
  }, [])

  const handlePageUp = () => {
    if (pagenum + 1 >= 13) {
      setPagenum(13);
    } else {
      setPagenum(pagenum + 1);
    }
  };


  const handlePageDown = () => {
    if (pagenum - 1 < 0) {
      setPagenum(0);
    } else {
      setPagenum(pagenum - 1);
    }
  };


  useEffect(() => {
    if (pagenum === 0) {
      matrix_button.current.style.display = "none";
    }
    else {
      matrix_button.current.style.display = "block";

    }

  }, [pagenum])
  const getData = async () => {
    try {
      fetch('https://geolocation-db.com/json/')
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          console.log(data, "user data");
        })
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData()

  }, [])


  return (
    <>
      <Helmet>
        <title>Form</title>
        <meta name="description" content="get a quote from matrix labs" />
        <link rel="canonical" href="/form" />

      </Helmet>
      <div className={styles.main}>
        <PageFounders
          pagenum={pagenum}
          handlePageUp={handlePageUp}
          handlePageDown={handlePageDown}
        />
        <div className={styles.pagebtn}>
          {/* <div className={styles.pagebtn2} onClick={handlePageUp}>
            <PageBtnIcon className={styles.pagebtn2Icon} />
          </div>
          <div className={styles.pagebtn1} onClick={handlePageDown}>
            <PageBtnIcon className={styles.pagebtn1Icon} />
          </div> */}
          <div className={styles.matrixlabDiv} ref={matrix_button}>made with 💛 by Matrix Labs</div>
        </div>
      </div>
    </>
  );
}

export default FounderForm