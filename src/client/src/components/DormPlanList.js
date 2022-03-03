import React, {useState, useEffect} from 'react'
import DormPlanDorm from './DormPlanDorm.js'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top:6rem;
  padding-bottom:6rem;
`

const DormPlanList = () => {
  const [dorms, setDorms] = useState([]);
  useEffect(() => {
    fetch(`/api/getDorms`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(dorm => {
      setDorms(dorm);
      
    }, );
  }, []); 
  return (
    <Wrapper> 
        {
        dorms.map(dorm => {
          return(
            <DormPlanDorm key={dorm.DORM} dormName={dorm.DORM}/>
          )
        }) 
      } 
    </Wrapper>
  )
}

export default DormPlanList