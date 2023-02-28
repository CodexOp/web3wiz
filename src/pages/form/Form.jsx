import React, { useEffect, useState, useRef} from "react";
// import { ReactComponent as PageBtnIcon } from "../../assets/images/icon-pagebtn.svg";
import styles from "./style.module.css";
import Page from "./Page/Page";
import { Helmet } from "react-helmet-async";

export default function Form() {
  const [pagenum, setPagenum] = useState(0);
  const matrix_button = useRef();

  const handlePageUp = () => {
    if (pagenum + 1 >= 9) {
      setPagenum(9);
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
    if(pagenum === 0){
      matrix_button.current.style.display = "none";
    }
    else{
      matrix_button.current.style.display = "block";

    }

  }, [pagenum])
  


  return (
    <>
    <Helmet>
    <title>Form</title>
    <meta name="description" content="get a quote from i"/>
    <link rel="canonical" href="/form" />

    </Helmet>
    <div className={styles.main}>
      <Page
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
