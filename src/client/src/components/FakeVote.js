import React, { Component } from 'react';
import styled from 'styled-components';

const Upvote = styled.button`
    background-color: ${props => props.clicked ? "blue" : "grey"};
`;

const Downvote = styled.button`
    background-color: ${props => props.clicked ? "blue" : "grey"};
`;


export default class FakeVote extends Component{
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

    upvote() {
        const action = this.state.upClicked ? "subtract" : "add";
        fetch(`/api/updateVoteCount/${this.props.dorm}/${this.props.roomNum}/up/${action}`, {
          method: "GET",
          headers: { "Content-Type": "application/json"},
        })
          .then(res => res.json())
          .then(votes => {
            console.log(votes)
            this.setState({
                upvotes: votes[0].thumbs_up,
                upClicked: !this.state.upClicked
            })
            console.log(votes);
          });
    }

    downvote() {
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

    render() {
        return (
            <div>
                <Upvote onClick = {this.upvote} clicked = {this.state.upClicked}>upvote for {this.props.dorm}</Upvote>
                <Downvote onClick = {this.downvote} clicked = {this.state.downClicked}>downvote</Downvote>
                <p>there are {this.state.upvotes} upvotes</p>
                <p>there are {this.state.downvotes} downvotes</p>
            </div>
        )
    }

}