import React, { useEffect, useState } from 'react';
function CycleSort() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/cycleSort");
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data)
      setArr(data);
    };

    // axios
    return () => {
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
