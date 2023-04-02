import React, { useEffect, useState, useRef } from 'react';

function CycleSort() {
  const [arr, setArr] = useState([]);
  const controllerRef = React.useRef(null);
  const prevArrRef = useRef([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    controllerRef.current = new AbortController();
    // const eventSource = new EventSource("http://localhost:8080/cycleSort");
    let arr = [5,3,1,2,4]
    const eventSource = new EventSource(`http://localhost:8080/cycleSort?arr=${arr.toLocaleString()}`);

    eventSource.onmessage = (event) => {
      console.log(event)
      if (event.data === 'completed') {
        // setIsSortingCompleted(true);
        controllerRef.current.abort();
        eventSource.close();
      } else {
        const data = JSON.parse(event.data);
      const prevArr = prevArrRef.current;
      const changedIndexes = findChangedIndexes(prevArr, data);
        setArr(data);
        setCount(count => count++)
        if (changedIndexes) {
          const [index1, index2] = changedIndexes;
          const element1 = document.querySelector(`.grid > span:nth-child(${index1 + 1})`);
          const element2 = document.querySelector(`.grid > span:nth-child(${index2 + 1})`);
          if (element1 && element2) {
            element1.classList.add('changed');
            element2.classList.add('changed');
            setTimeout(() => {
              element1.classList.remove('changed');
              element2.classList.remove('changed');
            }, 1000); // remove highlight after 1 second
          }
        }
        prevArrRef.current = data;
      }
    
    };

    return () => {
      controllerRef.current.abort();
      eventSource.close();
    };
  }, []);


  useEffect(() => {
    console.log(count)
    // console.log(arr)
  },[])

  function findChangedIndexes(arr1, arr2) {
    const len = Math.min(arr1.length, arr2.length);
    let index1 = -1;
    let index2 = -1;
    for (let i = 0; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        if (index1 === -1) {
          index1 = i;
        } else if (index2 === -1) {
          index2 = i;
          break;
        }
      }
    }
    if (index1 !== -1 && index2 !== -1) {
      return [index1, index2];
    }
    return null;
  }

  return (
    <>
      <h1 style={{textAlign:'center'}}>Cycle Sort </h1>
      <div className='grid'>
        {arr.length && arr.map((val, index) => (
          <span key={index}>{val} </span>
        ))}
      </div>
    </>
  );
}

export default CycleSort;
