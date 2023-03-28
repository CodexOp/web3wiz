import React from 'react'
import styles from "../styles.module.css";
import { ReactComponent as Menu } from "../../../assets/images/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../../assets/images/icon-close.svg";
export default function ProjectNav() {
    const [selected, setSelected] = React.useState(0);
  return (
    <div className={styles.primaryHeader}>
	<div className={styles.container +  " " + styles.mobileWidth}>
	  <div className={styles.navWrapper} id='nav-wrapper' >
	    <nav className={styles.primaryNavigation}>
	      <ul className={styles.navList} aria-label="Primary" id="primary-navigation">
	        <li><button onClick={() => setSelected(0)} className={!(selected === 0)? styles.noStyle: styles.btnStyle}> Websites</button></li>
	        <li><button onClick={() => setSelected(1)} className={!(selected === 1)? styles.noStyle: styles.btnStyle}> NFT&nbsp;minting&nbsp;websites</button></li>
	        <li><button onClick={() => setSelected(2)} className={!(selected === 2)? styles.noStyle: styles.btnStyle}> Dashboards</button></li>
	        <li><button onClick={() => setSelected(3)} className={!(selected === 3)? styles.noStyle: styles.btnStyle}> Calculators</button></li>
	        <li><button onClick={() => setSelected(4)} className={!(selected === 4)? styles.noStyle: styles.btnStyle}> Staking&nbsp;Websites</button></li>
	      </ul>
	    </nav>
	  </div>
	</div>
</div>
  )
}
