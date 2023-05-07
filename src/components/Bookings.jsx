import React from 'react'
import { useLocation } from 'react-router'

const Bookings = () => {

    const location = useLocation() 
    console.log(location.state)
    

  return (
    <div>Bookings
    
    {
        console.log(location.state)
    }
    
    </div>
  )
}

export default Bookings