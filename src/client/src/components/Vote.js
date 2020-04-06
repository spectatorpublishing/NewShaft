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

const UpText = styled.div``;

const DownText = styled.div``;

export default class Vote extends Component{
    constructor(props) {
        super(props);

        this.state = {
            upvotes: 0,
            downvotes: 0,
            upClicked: false,
            downClicked: false
        }
      
        this.upvote= this.upvote.bind(this)
        this.downvote = this.downvote.bind(this)
    }

    componentDidMount() {
        this.setState({
            upvotes: this.props.upvotes,
            downvotes: this.props.downvotes
        })
    }

    componentDidUpdate(prevProps) {
        if(this.props.dorm !== prevProps.dorm) {
            this.setState({
                upvotes: this.props.upvotes,
                downvotes: this.props.downvotes
            })
            console.log("updated")
            console.log("after update it is upvotes: " + this.state.upvotes)
        }
    }

    upvote() {
        if(!this.state.downClicked) {
        const action = this.state.upClicked ? "subtract" : "add";
        fetch(`/api/updateVoteCount/${this.props.dorm}/${this.props.roomNum}/up/${action}`, {
          method: "GET",
          headers: { "Content-Type": "application/json"},
        })
          .then(res => res.json())
          .then(votes => {
            console.log(votes);
            this.setState({
                upvotes: votes[0].thumbs_up,
                upClicked: !this.state.upClicked
            })
          });
        }
    }

    downvote() {
        if(!this.state.upClicked) {
        const action = this.state.downClicked ? "subtract" : "add";
        fetch(`/api/updateVoteCount/${this.props.dorm}/${this.props.roomNum}/down/${action}`, {
          method: "GET",
          headers: { "Content-Type": "application/json"},
        })
          .then(res => res.json())
          .then(votes => {
            this.setState({
                downvotes: votes[0].thumbs_down,
                downClicked: !this.state.downClicked
            })
            console.log(votes);
          });
        }
    }

    render() {
        console.log("In votes it is " + this.props.upvotes);
        console.log("In votes it is " + this.state.upvotes);
        return (
            <Wrapper>
                <Upvotes>
                    <UpIMG src = {upvote} alt = "upvote" onClick = {this.upvote} clicked = {this.state.upClicked}/> 
                    <UpText>Agree {this.state.upvotes}</UpText>
                </Upvotes>
                <Downvotes>
                    <DownIMG src = {downvote} alt = "downvote" onClick = {this.downvote} clicked = {this.state.downClicked}/> 
                    <DownText>Disagree {this.state.downvotes}</DownText>
                </Downvotes>
            </Wrapper>
        )
    }

}