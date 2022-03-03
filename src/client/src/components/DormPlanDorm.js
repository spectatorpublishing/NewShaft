import React from 'react'
import styled from 'styled-components'

const DormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:30rem;
  align-items:center;
`
const DormName = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
  width:10rem;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  padding:0.5rem;
  margin:0;
`
const ProgressBar = styled.div`
  width: 15rem;
  height: 0.8rem;

  background: #E7E7E7;
  border-radius: 5px;
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin:0;
`
const Arrow = styled.span`
  border: solid #969696;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin:0;
  &:hover{
    cursor: pointer
  };
`

const DormPlanDorm = ({dormName}) => {
  return (
    <div>
      <DormContainer>
        <DormName>{dormName}</DormName> <ProgressBar/> <Arrow onClick={e=> console.log("Clicked")}/>
      </DormContainer>
    </div>
  )
}

export default DormPlanDorm