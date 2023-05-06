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
        // console.log(trainsArr) ;
    })
    // const a = [1,2,3] ;
    return (
        <div>
            {
                trainsArr.map((item, index) => (
                    <Cards trainName={item.trainName} />

                ))
            }
        </div>
    )
}

export default Contacts