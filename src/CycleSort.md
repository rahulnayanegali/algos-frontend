```import React, { useEffect, useState, useRef } from 'react';```

This line imports the necessary React hooks for managing state and side effects: useEffect, useState, and useRef.



```function CycleSort() { ```
This line declares a new React functional component called CycleSort.


```const [sortedArray, setSortedArray] = useState([]);
const controllerRef = useRef(null);
const previousSortedArrayRef = useRef([]);
const [numberOfUpdates, setNumberOfUpdates] = useState(0);```

These lines declare some state variables for the component using the useState hook. sortedArray stores the current state of the sorted array, numberOfUpdates stores the number of updates made to the array, and setSortedArray and setNumberOfUpdates are functions that can be used to update these state variables. controllerRef and previousSortedArrayRef are created using the useRef hook and are used to store references to the AbortController and the previous state of the sorted array, respectively.


```
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
```

This useEffect hook is used to subscribe to server-sent events using the EventSource API. When the component is mounted, it creates a new AbortController and a new EventSource instance that connects to the cycleSort endpoint on the localhost server. It then listens for incoming messages from the server and updates the state of the sortedArray variable using the setSortedArray function. It also updates the numberOfUpdates variable and highlights the elements in the grid that have changed using the findChangedIndexes function. Finally, it sets the previousSortedArrayRef.current to the new sorted array. When the component is unmounted, it aborts the AbortController and closes the EventSource.


```
useEffect(() => {
  console.log(numberOfUpdates);
}, [sortedArray]);
```

This useEffect hook is used to log the number of updates made to the sortedArray variable when it changes.


```
function findChangedIndexes(firstArray, secondArray) {
  const minLength = Math.min(firstArray.length, secondArray

```
