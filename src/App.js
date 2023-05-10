import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import SortAlgo from "./SortAlgo";

function App() {
  const algos = [
    { api: "cycleSort", name: "Cycle Sort" },
    { api: "insertionSort", name: "Insertion Sort" },
    { api: "selectionSort", name: "Selection Sort" },
    { api: "bubbleSort", name: "Bubble Sort" },
    { api: "quickSort", name: "Quick Sort" }

  ];

    const inputRef = useRef(null);

  const [algorithms] = useState(algos);
  const [sortAPI, setSortAPI] = useState("");
  const [algoName, setAlgoName] = useState("");
  const [inputArrayValue, setInputArrValue] = useState("");
  const [algoInput, setAlgoInput] = useState([]);
  const [isSortingCompleted, setIsSortingCompleted] = useState(true);
  const [inputError, setInputError] = useState(false);

  const handleAPIs = (api, name) => {
    api && setSortAPI(api);
    name && setAlgoName(name);
    inputArrayValue ? setIsSortingCompleted(false) : setInputError(true);
    inputError && inputRef.current.focus();
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    // Remove any non-digit characters (except commas)
    const sanitizedValue = inputValue.replace(/[^0-9,]/g, '');

    // Insert comma after each single or double-digit number
    const formattedValue = sanitizedValue.replace(/(\d{1,2})(?=(\d{2})+(?!\d))/g, '$1,');
    setInputArrValue(formattedValue);
    console.log(inputArrayValue);
    setInputError(false);
  };

  const Algorithms = () => (
    <div className="sortApp">
      <SortAlgo
        setIsSortingCompleted={setIsSortingCompleted}
        sortAPI={sortAPI}
        algoName={algoName}
        inputArray={algoInput}
      />
    </div>
  );

  useEffect(() => {
    // const numberArray = Array.from(String(inputArrayValue), Number);    
    const numberArray = inputArrayValue.split(',').map(Number)

    setAlgoInput(numberArray);
    console.log('algo', numberArray)
  }, [inputArrayValue]);

  useEffect(() => {
  }, [inputError])

  return (
    <>
      <header className="header">
        <h2 className="headline">Sorting Algorithms Simulations</h2>
        <div className="input-container">
          <label htmlFor="inputArray">Enter an Integer Array</label>
          <input
            id="inputArray"
            type="text"
            value={inputArrayValue}
            className={inputError ? 'error' : ''}
            ref={inputRef}
            onChange={handleInputChange}
          />
        </div>
      </header>
      <div className="App">
        <div className="buttons-container">
          {algorithms.map((item, index) => (
            <button key={index} onClick={() => handleAPIs(item.api, item.name)}>
              {item.name}
            </button>
          ))}
        </div>
        {!isSortingCompleted && <Algorithms/>}
      </div>
    </>
  );
}

export default App;
