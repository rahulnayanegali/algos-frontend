import React, { useEffect, useState, useRef } from "react";
import { findChangedIndexes } from "./utils";
import DynamicLine from "./DynamicLine";

function SortAlgo({ sortAPI, algoName }) {
  const [arr, setArr] = useState([]);
  const controllerRef = React.useRef(null);
  const prevArrRef = useRef([]);
  const [changedIndexes, setChangedIndexes] = useState(null);

  useEffect(() => {
    controllerRef.current = new AbortController();
    let payload = [5, 3, 1, 2, 4];
    // let payload = [3,5,2,1,4];
    const eventSource = new EventSource(
      `http://localhost:8080/${sortAPI}?arr=${payload.toLocaleString()}`
    );

    eventSource.onmessage = (event) => {
      console.log(event);
      if (event.data === "completed") {
        controllerRef.current.abort();
        eventSource.close();
      } else {
        const data = JSON.parse(event.data);
        const prevArr = prevArrRef.current;
        const changedIndexes = findChangedIndexes(prevArr, data);
        setArr(data);
        if (changedIndexes) {
          setChangedIndexes(changedIndexes);
          setTimeout(() => {
            setChangedIndexes(null);
          }, 2000);
        }
        prevArrRef.current = data;
      }
    };

    return () => {
      controllerRef.current.abort();
      eventSource.close();
    };
  }, []);

  return (
    <div className="sortParentContainer">
      <h1>{algoName}</h1>
      <div className="sortParent">
        <div className="arrays">
          {arr.length &&
            arr.map((val, index) => (
              <span key={index} id={index} className={(index === changedIndexes?.[0] || index === changedIndexes?.[1]) ? "highlight" : ""}>
                {val}
              </span>
            ))}
        </div>

        {changedIndexes != null && <DynamicLine id1={changedIndexes[0]} id2={changedIndexes[1]} />}
      </div>
    </div>
  );
}

export default SortAlgo;
