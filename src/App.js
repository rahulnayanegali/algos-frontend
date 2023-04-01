import React, {useState} from 'react';
import './App.css';
import CycleSort from './CycleSort';

function App() {

  const algos = [
    {api: 'cycleSort', name: 'Cycle Sort'},
    {api: 'insertionSort', name: 'Insertion Sort'}
  ]

  const [algorithms] = useState(algos);
  const [isCycleSort, setIsCycleSort] = useState(false);

  const handleAPIs = (api) => {
    switch (api) {
      case 'cycleSort':
        setIsCycleSort(true);
        break;
    
      default:
        break;
    }
  }

  if(isCycleSort) {
    return(
      <div>
        <CycleSort />
      </div>
    )
  }

  return (
    <div className="App">
      <div>
        {
          algorithms.map(item => <button onClick={() => handleAPIs(item.api)}>{item.name}</button>)
        }
      </div>
      
    </div>
  );
}

export default App;
