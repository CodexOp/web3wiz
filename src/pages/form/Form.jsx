import React, { useState } from "react";
// import { ReactComponent as PageBtnIcon } from "../../assets/images/icon-pagebtn.svg";
import styles from "./style.module.css";
import Page from "./Page/Page";
export default function Form() {
  const [pagenum, setPagenum] = useState(0);

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

  return (
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
        <div className={styles.matrixlabDiv}>made with 💛 by Matrix Labs</div>
      </div>
    </div>
  );
}
