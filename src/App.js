import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import TrainDataService from './services/trainServices'


const TrainsList = props => {

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getTrains();
  }, []);


  const getTrains = () => {
    TrainDataService.getAll()
      .then(response => {
        console.log(response.data);
        // setTrains(response.data)
      })
      .catch(e => {
        console.log(e)
      });
  }


  return (
    <div className="App">
      hello world
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }

export default TrainsList;
