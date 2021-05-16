import React, { Component } from 'react';
import styled from 'styled-components';
import upvote from '../assets/Icons/up_arrow.svg';
import downvote from '../assets/Icons/down_arrow.svg';

//note so the page does not reset for each

const Wrapper = styled.div`
    display: flex;
    justify-content: row;
    align-items: center;
`;

const Upvotes = styled.div`
    display: flex;
    justify-content: row;
    align-items: center;
`;

const Downvotes = styled.div`
    display: flex;
    justify-content: row;
    align-items: center;
`;

const UpIMG = styled.img`
    cursor: pointer;
    filter: ${props => props.clicked ?
            "invert(55%) sepia(86%) saturate(502%) hue-rotate(70deg) brightness(79%) contrast(85%)" :
            "invert(90%) sepia(0%) saturate(1681%) hue-rotate(235deg) brightness(93%) contrast(108%)"};
    width: 28px;
    padding: .5rem;

    :hover {
        filter: ${props => props.clicked ?
        "invert(90%) sepia(0%) saturate(1681%) hue-rotate(235deg) brightness(93%) contrast(108%)" :
        "invert(55%) sepia(86%) saturate(502%) hue-rotate(70deg) brightness(79%) contrast(85%)"};
    }
`;

const DownIMG = styled.img`
    cursor: pointer;
    filter: ${props => props.clicked ?
            "invert(16%) sepia(92%) saturate(4089%) hue-rotate(352deg) brightness(87%) contrast(93%)" :
            "invert(90%) sepia(0%) saturate(1681%) hue-rotate(235deg) brightness(93%) contrast(108%)"};
    width: 28px;
    padding: .5rem;

    :hover {
        filter: ${props => props.clicked ?
        "invert(90%) sepia(0%) saturate(1681%) hue-rotate(235deg) brightness(93%) contrast(108%)" :
        "invert(16%) sepia(92%) saturate(4089%) hue-rotate(352deg) brightness(87%) contrast(93%)"};
    }
`;

const UpText = styled.div`
`;
const DownText = styled.div``;

let agree = "agree ".toUpperCase();
let disagree = "disagree ".toUpperCase();

export default class Vote extends Component{
    constructor(props) {
        super(props);

        this.state = {
            upvotes: 0,
            downvotes: 0,
            my_upvotes: 0,
            my_downvotes: 0,
            upClicked: false,
            downClicked: false
        }

        this.upvote= this.upvote.bind(this)
        this.downvote = this.downvote.bind(this)
        this.updateVoteCount = this.updateVoteCount.bind(this)
    }

    componentDidMount() {
        this.setState({
            upvotes: Number(this.props.upvotes),
            downvotes: Number(this.props.downvotes)
        })
    }

    updateVoteCount(up, down, dorm, roomNum){
        fetch(`/api/updateVoteCount/${dorm}/${roomNum}/${up}/${down}`, {
          method: "GET",
          headers: { "Content-Type": "application/json"},
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps) {
            this.setState({
                upvotes: Number(this.props.upvotes),
                downvotes: Number(this.props.downvotes),
            })
            if (this.props.dorm !== prevProps.dorm){
              this.updateVoteCount(prevState.my_upvotes, prevState.my_downvotes, prevProps.dorm, prevProps.roomNum)
              this.setState({
                  my_upvotes: 0,
                  my_downvotes: 0,
                  upClicked: false,
                  downClicked:false
              })
          }
        }
    }

    upvote() {
        if(!this.state.downClicked) {
          this.setState({
              my_upvotes: this.state.upClicked ? this.state.my_upvotes - 1 : this.state.my_upvotes + 1,
              upClicked: !this.state.upClicked
          })
        }
    }

    downvote() {
        if(!this.state.upClicked) {
          this.setState({
              my_downvotes: this.state.downClicked ? this.state.my_downvotes - 1 : this.state.my_downvotes + 1,
              downClicked: !this.state.downClicked
          })
        }
    }

    render() {
        return (
            <Wrapper>
                <Upvotes>
                    <UpIMG src = {upvote} alt = "upvote" onClick = {this.upvote} clicked = {this.state.upClicked}/>
                    <UpText>{agree}{this.state.upvotes + this.state.my_upvotes}</UpText>
                </Upvotes>
                <Downvotes>
                    <DownIMG src = {downvote} alt = "downvote" onClick = {this.downvote} clicked = {this.state.downClicked}/>
                    <DownText>{disagree}{this.state.downvotes + this.state.my_downvotes}</DownText>
                </Downvotes>
            </Wrapper>
        )
    }

}
