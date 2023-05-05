import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import TrainDataService from './services/trainServices'
import '../src/App.css';
import Upload from "./components/Upload";



const TrainsList = props => {

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getTrains();
  }, []);


  const getTrains = () => {
    // TrainDataService.postTrainDetails().then(response => {
    //   console.log(response.data)
    // }).catch(e => {
    //   console.log(e)
    // });
    TrainDataService.getAll()
      .then(response => {
        console.log(response.data.some)
        setTrains(response.data.some)
      })
      .catch(e => {
        console.log(e)
      });
  }

  // console.log(trains)

  return (
    <div className="App">
      {
        trains.map((ele, item) => (
          <div className="container-div">
            <h3>{ele.trainName}</h3>
            <h4>{ele.trainNumber}</h4>
            <div className="avail-div">
              {
                ele.acCoaches.map((ac, it) => {
                  return (
                    <h3>{ac._id}</h3>
                  )
                })
              }
            </div>
            <div className="avail-div">
              {
                ele.sleeperCoaches.map((ac, it) => {
                  return (
                    <h3>{ac._id}</h3>
                  )
                })
              }
            </div>
          </div>
        )
        )




      }

      <Upload />

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
