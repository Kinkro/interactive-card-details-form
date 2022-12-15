import React from "react";
import ptichka from "../images/icon-complete.svg";
import styles from "./ThankYou.module.css";

function ThankYou() {
  return (
    <div className={styles.container}>
      <img src={ptichka} alt="ptichka" />
      <h1 className={styles.heading}>Thank you!</h1>
      <p className={styles.para}>We've added your card details</p>
      <button className={styles.continueButton}>Continue</button>
    </div>
  );
}

export default ThankYou;
