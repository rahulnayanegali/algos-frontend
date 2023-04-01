import React, { useEffect, useState, useRef } from 'react';

function CycleSort() {
  const [sortedArray, setSortedArray] = useState([]);
  const controllerRef = useRef(null);
  const previousSortedArrayRef = useRef([]);
  const [numberOfUpdates, setNumberOfUpdates] = useState(0);

  useEffect(() => {
    controllerRef.current = new AbortController();
    const eventSource = new EventSource("http://localhost:8080/cycleSort");
    eventSource.onmessage = (event) => {
      if (event.data === 'completed') {
        controllerRef.current.abort();
        eventSource.close();
      } else {
        const data = JSON.parse(event.data);
        const previousSortedArray = previousSortedArrayRef.current;
        const changedIndexes = findChangedIndexes(previousSortedArray, data);
        setSortedArray(data);
        setNumberOfUpdates(count => count + 1);
        if (changedIndexes) {
          const [firstChangedIndex, secondChangedIndex] = changedIndexes;
          const firstChangedElement = document.querySelector(`.grid > span:nth-child(${firstChangedIndex + 1})`);
          const secondChangedElement = document.querySelector(`.grid > span:nth-child(${secondChangedIndex + 1})`);
          if (firstChangedElement && secondChangedElement) {
            firstChangedElement.classList.add('changed');
            secondChangedElement.classList.add('changed');
            setTimeout(() => {
              firstChangedElement.classList.remove('changed');
              secondChangedElement.classList.remove('changed');
            }, 1000); // remove highlight after 1 second
          }
        }
        previousSortedArrayRef.current = data;
      }
    };
    return () => {
      controllerRef.current.abort();
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    console.log(numberOfUpdates);
  }, [sortedArray]);

  function findChangedIndexes(firstArray, secondArray) {
    const minLength = Math.min(firstArray.length, secondArray.length);
    let firstChangedIndex = -1;
    let secondChangedIndex = -1;
    for (let i = 0; i < minLength; i++) {
      if (firstArray[i] !== secondArray[i]) {
        if (firstChangedIndex === -1) {
          firstChangedIndex = i;
        } else if (secondChangedIndex === -1) {
          secondChangedIndex = i;
          break;
        }
      }
    }
    if (firstChangedIndex !== -1 && secondChangedIndex !== -1) {
      return [firstChangedIndex, secondChangedIndex];
    }
    return null;
  }

  return (
    <>
      <h1 style={{textAlign:'center'}}>Cycle Sort </h1>
      <div className='grid'>
        {sortedArray.length && sortedArray.map((value, index) => (
          <span key={index}>{value} </span>
        ))}
      </div>
    </>
  );
}

export default CycleSort;
