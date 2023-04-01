// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Grid({ items }) {
//   return (
//     <div className="grid">
//       {items.map((item, index) => (
//         <div key={index} className="grid-item">
//           {item}
//         </div>
//       ))}
//     </div>
//   );
// }

// function Algo() {
//   const [modifiedArray, setModifiedArray] = useState([]);
//   const [eventSource, setEventSource] = useState(null);

//   const newEventSource = new EventSource("http://localhost:8080/test-algo");

//   useEffect(() => {
//     return () => {
//       // Close the SSE connection when the component unmounts
//       if (eventSource) {
//         eventSource.close();
//       }
//     };
//   }, [eventSource]);

//   function handleClick() {
//     axios.get("http://localhost:8080/test-algo");

//     newEventSource.onmessage = (e) => {
//       const response = JSON.parse(e.data);
//       console.log('resp',  response);
//       setModifiedArray(response);
//     };
//     newEventSource.onopen = (e) => console.log("Connection Opened");
//     newEventSource.onerror = (e) => console.log("Connection Closed");
//   }



//   return (
//     <div>
//       <button onClick={() => newEventSource && newEventSource.close()}>
//         Stop Algorithm
//       </button>

//       <button onClick={handleClick}>Start Algo</button>

//       {modifiedArray.length > 0 && <Grid items={modifiedArray} />}
//     </div>
//   );
// }

// export default Algo;
