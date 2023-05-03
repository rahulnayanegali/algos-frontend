import React, {useState} from 'react';
import './App.css';
import SortAlgo from './SortAlgo';

function App() {
  const algos = [
    {api: 'cycleSort', name: 'Cycle Sort'},
    {api: 'insertionSort', name: 'Insertion Sort'}
  ]

  const [algorithms] = useState(algos);
  const[sortAPI, setSortAPI] = useState('');
  const[algoName, setAlgoName] = useState('');
  const [isCycleSort, setIsCycleSort] = useState(false);
  const [isSortingCompleted, setIsSortingCompleted] = useState(false);

  const handleAPIs = (api, name) => {
    console.log('api', api);
    console.log('name', name);
    api && setSortAPI(api);
    name && setAlgoName(name);
    setIsCycleSort(true)
  }

  if(isCycleSort && !isSortingCompleted) {
    return(
      <div className='sortApp'>
        <SortAlgo setIsSortingCompleted={setIsSortingCompleted} sortAPI={sortAPI} algoName={algoName}/>
      </div>
    )
  }

  return (
    <div className="App">
        {
          algorithms.map((item, index) => <button key={index} onClick={() => handleAPIs(item.api, item.name)}>{item.name}</button>)
        }

    </div>
  );
}

export default App;
