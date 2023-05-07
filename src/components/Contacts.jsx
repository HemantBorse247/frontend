import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import Cards from './Cards'
import { useState } from 'react';

const Contacts = () => {

    const location = useLocation();

    const [trainsArr, setTrainArr] = useState([]);
    useEffect(() => {
        let newTrainsArr = location.state
        console.log(newTrainsArr)
        setTrainArr(location.state);
        console.log(trainsArr);
    })
    // const a = [1,2,3] ;
    return (
        <div>
            {
                trainsArr.map((item, index) => (

                    <Cards _id={item._id} trainName={item.trainName} arrivalSrc={item.stops[0].arrivalTime} arrivalDest={item.stops[item.stops.length - 1].arrivalTime} acCoaches={item.acCoaches.reduce((a, b) => parseInt(a) + parseInt(b), 0)} sleeperCoaches={item.sleeperCoaches.reduce((a, b) => parseInt(a) + parseInt(b), 0)} departureSrc={item.stops[0].departureTime}
                        trainNumber={item.trainNumber}
                    />

                ))
            }
        </div>
    )
}

export default Contacts