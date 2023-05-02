import React, { useEffect, useState, useRef } from 'react';
import { findChangedIndexes } from './utils'
function SortAlgo({ sortAPI, algoName }) {
  const [arr, setArr] = useState([]);
  const controllerRef = React.useRef(null);
  const prevArrRef = useRef([]);
  const [changedIndexes, setChangedIndexes] = useState(null);

  useEffect(() => {
    controllerRef.current = new AbortController();
    let payload = [5, 3, 1, 2, 4];
    // let payload = [3,5,2,1,4];
    const eventSource = new EventSource(`http://localhost:8080/${sortAPI}?arr=${payload.toLocaleString()}`);

    eventSource.onmessage = (event) => {
      console.log(event)
      if (event.data === 'completed') {
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
          }, 1000);
        }
        prevArrRef.current = data;
      }
    };

    return () => {
      controllerRef.current.abort();
      eventSource.close();
    };
  }, []);

  const getArrowStyle = (index) => {
    const arrowStyle = {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '-20px',
      width: '30px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '50%',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.4)',
      zIndex: 1,
    };

    if (changedIndexes && (index === changedIndexes[0] || index === changedIndexes[1])) {
      arrowStyle.backgroundColor = '#fd5f00';
    }

    return arrowStyle;
  };

  const getCurveStyle = () => {
    if (changedIndexes) {
      const [index1, index2] = changedIndexes;
      const [x1, y1] = getPosition(index1);
      const [x2, y2] = getPosition(index2);
      return (
        <svg style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', pointerEvents: 'none' }}>
          <path d={`M${x1},${y1} Q${(x1 + x2) / 2},${(y1 + y2) / 2 + 50} ${x2},${y2}`} fill="none" stroke="black" strokeWidth="4" />
          <g transform={`translate(${x2},${y2})`}>
            <path d="M0,0 L-10,-10 L10,-10 Z" fill="black" />
          </g>
          <g transform={`translate(${x1},${y1}) rotate(180)`}>
            <path d="M0,0 L-10,-10 L10,-10 Z" fill="black" />
          </g>
        </svg>
      );
    }
  }

  const getPosition = (index) => {
    const el = document.getElementById(`item-${index}`);
    if (!el) return [0, 0];
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + rect.height / 2 + window.scrollY;
    return [x, y];
  };


  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{algoName} </h1>
      <svg style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', pointerEvents: 'none' }}>
        <path d={getCurveStyle()} fill="none" stroke="#fd5f00" strokeWidth="4" />
        {changedIndexes && (
          <path d={getCurveStyle()} fill="#fd5f00" stroke="#fd5f00" strokeWidth="2" />
        )}
      </svg>
      <div className='grid' style={{ position: 'relative' }}>
        {arr.length && arr.map((val, index) => (
          <span key={index} style={{ position: 'relative' }}>
            {val}
            {changedIndexes != null && <div style={getArrowStyle(index)}>
              <div style={{ width: '10px', height: '10px', backgroundColor: '#fd5f00', transform: 'rotate(45deg)' }}></div>
            </div>}
          </span>
        ))}
      </div>
    </>
  );
}

export default SortAlgo