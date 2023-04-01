import React, { useEffect, useState } from 'react';

function CycleSort({setSortedArray}) {
  const [arr, setArr] = useState([]);
  const controllerRef = React.useRef(null);

  const prevArrRef = useRef([]);
  
  useEffect(() => {
    controllerRef.current = new AbortController();

    const eventSource = new EventSource("http://localhost:8080/cycleSort", { signal: controllerRef.current.signal });
    eventSource.onmessage = (event) => {
      if (event.data === 'completed') {
        // setIsSortingCompleted(true);
        controllerRef.current.abort();
        eventSource.close();
      } else {
        const data = JSON.parse(event.data);
        console.log(data)
        setArr(data);
      }
    };

    return () => {
      controllerRef.current.abort();
      eventSource.close();
    };
  }, []);

  return (
    <>
    <h1 style={{textAlign:'center'}}>Cycle Sort </h1>
    <div className='grid'>
      {arr.map((val, index) => (
        <span key={index}>{val} </span>
      ))}
    </div>
    </>
  );
}

export default CycleSort;
