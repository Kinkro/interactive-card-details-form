import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";

function Form({
  num,
  setNum,
  name,
  setName,
  cardNumber,
  setCardNumber,
  error,
  setError,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc,
  yearRef,
  cvcRef,
  setThankYou,
}) {
  const [blank, setBlank] = useState({
    name: false,
    cardnumber: false,
    date: false,
    cvc: false,
  });

  console.log(name.length === 0);
  console.log(blank);

  return (
    <form
      className={styles.allInputs}
      onSubmit={(e) => {
        e.preventDefault();
        if (name && cardNumber && month && year && cvc) {
          const data = {
            name,
            cardNumber,
            month,
            year,
            cvc,
          };
          if (name.length === 0) {
            setBlank((prevBlank) => ({
              ...prevBlank,
              name: !prevBlank.name,
            }));
          }
          setThankYou((prev) => !prev);
          console.log(data);
        }
      }}
    >
      <div className={styles.inputContainers}>
        <label htmlFor="name">cardholder</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          maxLength={23}
          onChange={(e) => {
            const { value } = e.target;
            if (!value.match(/[^A-Za-z\s]+/g)) {
              setName(value.toUpperCase());
            }
          }}
        />
      </div>
      <div className={styles.inputContainers}>
        <label htmlFor="cardNumber">cardnumber</label>
        <input
          id="cardNumber"
          name="cardNumber"
          required
          type="text"
          value={cardNumber}
          maxLength={19}
          onChange={(e) => {
            const { value } = e.target;

            const backspace = num.length - value.length;
            const str = value
              .split("")
              .filter((letter) => letter !== " ")
              .join("");
            // if (str.length === 16) {
            //   return;
            // }
            if (value[value.length - 1] === " " && backspace < 0) {
              return;
            }
            if (/[^\d\s]+/.test(value)) {
              setError(true);
            } else {
              setError(false);
            }
            if (
              str.length % 4 === 0 &&
              str.length > 0 &&
              str.length < 15 &&
              backspace < 0
            ) {
              setCardNumber(value + " ");
              setNum(value);
            } else {
              setCardNumber(value);
              setNum(value);
            }
          }}
        />
        {error && <p className={styles.errorMsg}>Wrong format, numbers only</p>}
      </div>
      <div className={styles.date__cvc__container}>
        <div className={styles.dateContainer}>
          <div className={styles.dateInputContainer}>
            <label htmlFor="date">exp.date mm/yy</label>
            <div className={styles.dateInputs}>
              <input
                // className="monthInput"
                type="text"
                id="date"
                name="date"
                required
                value={month}
                min={0}
                max={12}
                // maxLength={2}
                onChange={(e) => {
                  const { value } = e.target;
                  if (value > 0 && value < 13 && value.length < 3) {
                    setMonth(value);
                  } else {
                    setMonth("");
                  }
                  if (value < 10 && value > 1 && value[0] !== "0") {
                    setMonth("0" + value);
                    yearRef.current.focus();
                  } else if (value === "0") {
                    setMonth(value);
                  }
                  if (value.length === 2) {
                    yearRef.current.focus();
                  }
                }}
              />
              <input
                type="text"
                id="date"
                name="date"
                required
                value={year}
                ref={yearRef}
                min={22}
                max={30}
                // maxLength={2}
                onChange={(e) => {
                  const { value } = e.target;
                  if (
                    value[0] === "2" &&
                    // value[1] > 1 &&
                    value < 30 &&
                    value.length < 3
                  ) {
                    setYear(value);
                  } else {
                    setYear("");
                  }
                  if (value.length === 2) {
                    cvcRef.current.focus();
                  }
                }}
              />
            </div>
          </div>
          <div className={styles.cvcContainer}>
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              placeholder="e.g 123"
              id="cvc"
              name="cvc"
              required
              maxLength={3}
              value={cvc}
              ref={cvcRef}
              onChange={(e) => {
                const { value } = e.target;
                if (
                  // value.length === 3 &&
                  Number(value) > 0 &&
                  Number(value) <= 999
                ) {
                  setCvc(value);
                } else {
                  setCvc("");
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Form;
