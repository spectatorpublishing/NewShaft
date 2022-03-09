import React, {useState} from 'react'
import styled from 'styled-components'



const NewAmenities = () => {
    const [amenities, setAmenities] = useState([]);
    fetch(`/api/getAmenities/${dormName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json"},
      })
        .then(res => res.json())
        .then(amenitiesInfo => {
          this.setState([amenitiesInfo])
        });
  return (
    <div>

    </div>
  )
}

export default NewAmenities