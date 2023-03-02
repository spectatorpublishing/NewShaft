import React, { Component } from "react";
import styled from 'styled-components';

let Wrapper = styled.div`
  text-align: left;
  margin-left: auto;
`

export default class LotteryPredictor extends Component{
  constructor(props){
    super(props);
    this.state={
      newNum: "",
      oldNum: ""
    }
  }
  updateNum(newNum){
    this.setState({
      newNum: newNum
    });
  }
  generateOldNum = (e) =>{
    if(e.key === 'Enter'){
      const newNum = this.state.newNum;
      let priority = 0;
      let num = 0;
      let str = "Invalid Input: The value must be between 0 and 5000";
      if(newNum > 0 && newNum < 1000){//senior
        priority = 30;
        num = newNum * 3;
        str = "Priority Number: " + priority + "Scale Number: " + num;
      }
      else if(newNum >= 1000 && newNum < 2000){//mixed junior senior
        priority = 25;
        num = (newNum - 1000) * 3;
        str = "Priority Number: " + priority + "Scale Number: " + num;
      }
      else if(newNum >= 2000 && newNum < 3000){//junior
        priority = 20;
        num = (newNum - 2000) * 3;
        str = "Priority Number: " + priority + "Scale Number: " + num;
      }
      else if(newNum >= 3000 && newNum < 4000){//mixed junior and sophomore
        priority = 15;
        num = (newNum - 3000) * 3;
        str = "Priority Number: " + priority + "Scale Number: " + num;
      }
      else if(newNum >= 4000 && newNum < 5000){//sophomore
        priority = 10;
        num = (newNum - 4000) * 3;
        str = "Priority Number: " + priority + "Scale Number: " + num;
      }
      this.setState({
        oldNum: str
      });
    }
  }
  render(){
    return(
      <Wrapper>
        Enter Your Number:
        <input
          type = "number"
          value = {this.state.newNum}
          onChange = {e => this.updateNum(e.target.value)}
          onKeyDown ={this.generateOldNum}
        />
        <br></br>
        <div>
        Old-System Equivalence: {this.state.oldNum}
        </div>
      </Wrapper>

    )
  }
}
