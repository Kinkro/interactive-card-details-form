import "./App.css";
import { useState, useRef } from "react";
import Form from "./components/Form";
import Cards from "./components/Cards";
import ThankYou from "./components/ThankYou";

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const [num, setNum] = useState("");
  const [error, setError] = useState(false);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [thankYou, setThankYou] = useState(true);

  const yearRef = useRef(null);
  const cvcRef = useRef(null);
  return (
    <div className="App">
      <Cards
        cardNumber={cardNumber}
        name={name}
        month={month}
        year={year}
        cvc={cvc}
      />

      {thankYou ? (
        <Form
          name={name}
          setName={setName}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          num={num}
          setNum={setNum}
          error={error}
          setError={setError}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setCvc={setCvc}
          // thankYou={thankYou}
          setThankYou={setThankYou}
          yearRef={yearRef}
          cvcRef={cvcRef}
        />
      ) : (
        <ThankYou />
      )}
    </div>
  );
}

export default App;
