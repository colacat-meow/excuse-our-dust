import React from "react"
import styles from "src/styles/Footer.module.css"
import { Image } from "react-bootstrap"
import banner from "public/TsBanner.png"

const Footer = ({}) => {
  return (
    <>
      <footer className={styles.footer}>
        <h2>A store by Tammy and Jessica.</h2>
        <Image
          fluid
          src={`${banner.src}`}
          alt="T's Wreaths and Things Banner"
        />
      </footer>
    </>
  );
};

export default Footer;
