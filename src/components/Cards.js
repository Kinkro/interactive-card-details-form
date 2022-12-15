import React from "react";
import styles from "./Cards.module.css";

function Cards({ name, year, month, cardNumber, cvc }) {
  const initialValue = "0000 0000 0000 0000";
  return (
    <div className={styles.bgImageDesktop}>
      <div className={styles.frontCardContainer}>
        <div className={styles.frontCardNumberInput}>
          <div className={styles.logo}>
            <div className={styles.bigCircle}></div>
            <div className={styles.smallCircle}></div>
          </div>
          <h2 className={styles.frontCardNumber}>
            {cardNumber.concat(initialValue.slice(cardNumber.length))}
          </h2>

          <div className={styles.cardInputName}>
            <p>{name ? name : "JANE APLESEED"}</p>
            <p>
              {month ? month : "00"}/{year ? year : "00"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardBackContainer}>
        {/* <img src={cardBack} alt="" /> */}
        <div className={styles.backCardNumberInput}>
          <p>{cvc ? cvc : "000"}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
