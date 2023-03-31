import React from 'react'
import styles from "../styles.module.css";

export default function ProjectNav(props) {
    const [selected, setSelected] = React.useState(0);
	React.useEffect(()=>{
		setSelected(props.navSelected)
	}, [props])
  return (
    <div className={styles.primaryHeader}>
	<div className={styles.container +  " " + styles.mobileWidth}>
	  <div className={styles.navWrapper} id='nav-wrapper' >
	    <nav className={styles.primaryNavigation}>
	      <ul className={styles.navList} aria-label="Primary" id="primary-navigation">
	        <a  href="#id0"><li><button onClick={() => setSelected(0)} className={!(selected === 0)? styles.noStyle: styles.btnStyle}> Websites</button></li></a>
	        <a  href="#id9"><li><button onClick={() => setSelected(9)} className={!(selected === 9)? styles.noStyle: styles.btnStyle}> NFT&nbsp;minting&nbsp;websites</button></li></a>
	        <a  href="#id14"><li><button onClick={() => setSelected(14)} className={!(selected === 14)? styles.noStyle: styles.btnStyle}> Calculators</button></li></a>
	        <a  href="#id16"><li><button onClick={() => setSelected(16)} className={!(selected === 16)? styles.noStyle: styles.btnStyle}> Dashboards</button></li></a>
	        <a  href="#id20"><li><button onClick={() => setSelected(20)} className={!(selected === 20)? styles.noStyle: styles.btnStyle}> Staking&nbsp;Websites</button></li></a>
	        <a  href="#id27"><li><button onClick={() => setSelected(27)} className={!(selected === 27)? styles.noStyle: styles.btnStyle}> Apps</button></li></a>
	      </ul>
	    </nav>
	  </div>
	</div>
</div>
  )
}
