import React from 'react';
import styles from './MainBody/MainBody.module.css';
import { Link } from 'react-router-dom';
const More = ({num}) => {
  return (
    <div className={`${styles.more}`}>
      <h2>More Blogs related to this</h2>
      <ul>
        {num != 1 && <li><Link style={{color:"blue", textDecoration: "underline"}} to="/blog/Which-platforms-should-you-use-to-buy-NFTs-in-2023" target="_blank">Which platforms should you use to buy NFTs in 2023?</Link></li>}
        {num != 2 && <li><Link style={{color:"blue", textDecoration: "underline"}} to="/blog/Top-5-real-world-use-cases-of-blockchain-technology" target="_blank">Top 5 real-world use cases of blockchain technology</Link></li>}
        {num != 0 && <li><Link style={{color:"blue", textDecoration: "underline"}} to="/blog/Top-5-Metaverse-Games,-2023-edition" target="_blank">Top 5 Metaverse Games, 2023 edition</Link></li>}
      </ul>
    </div>
  );
};

export default More;
