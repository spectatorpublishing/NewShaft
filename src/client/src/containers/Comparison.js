import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from "../util/GlobalStyles";
import DropDown from '../components/DropDown.js';
import CompareCarousel from '../components/CompareCarousel.js'
import claremont from '../assets/47 Claremont 1.svg'
import kitchen from '../assets/Icons/laundry black_1@10x.svg'

let Title = styled.div`
    width:100%;
    text-align:center;
    font-size:2.5rem;
    background-color:${props => props.theme.columbiaBlue}; 
    color: 	${props => props.theme.white};
    border:none;
    padding-top:1rem;
    padding-bottom:1rem;
    font-weight: bold;
    @media only screen and (max-width: 992px){
        font-size:1.5rem;
    }
`

let BlueBGMobile = styled.div`
  background-color: ${props => props.theme.columbiaBlue};
`

let ComparisonContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 0 auto;
    flex-direction: column;
    background-color: ${props => props.theme.lightGray};
`

let ComparisonContainerMobile = styled.div`
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.lightGray};
`

let DropDownContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`
let CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const def = [claremont, claremont, claremont, claremont] /*claremont svg as a placeholder for testing carousel*/
const noRatings = {
    clean: 'N/A',
    noise: 'N/A',
    community: 'N/A',
    party: 'N/A',
    amenities: 'N/A',
}

export default class Comparison extends Component {
    constructor(props){
        super(props);

        this.state = {
            width : window.innerWidth,
            dorm_1 : "Select Dorm",
            dorm_2 : "Select Dorm",
            dorm_3 : "Select Dorm",
            dorm_1_photos: def,
            dorm_2_photos: def,
            dorm_3_photos: def,
            dorm_1_ratings: {
                clean: 0,
                noise: 0,
                community: 0,
                party: 0,
                amenities: 0, 
            },
            dorm_2_ratings: {
                clean: 0,
                noise: 0,
                community: 0,
                party: 0,
                amenities: 0,  
            },
            dorm_3_ratings: {
                clean: 0,
                noise: 0,
                community: 0,
                party: 0,
                amenities: 0, 
            }
        }

        this.handleDormChange = this.handleDormChange.bind(this);
    }

    componentDidMount(){
        console.log(this)
    }

    componentDidUpdate(_, prevState) {
        if (this.state.dorm_1 != prevState.dorm_1){
            this.fetchDormPhotos(1, this.state.dorm_1);
            this.fetchDormRatings(1, this.state.dorm_1)
        }

        if (this.state.dorm_2 != prevState.dorm_2){
            this.fetchDormPhotos(2, this.state.dorm_2)
            this.fetchDormRatings(2, this.state.dorm_2)
        }

        if (this.state.dorm_3 != prevState.dorm_3){
            this.fetchDormPhotos(3, this.state.dorm_3)
            this.fetchDormRatings(3, this.state.dorm_3)
        }
    }

    fetchDormPhotos(dorm_num, dorm){
        fetch(`/api/getDormPhotos/${dorm}`, {
          method: "GET",
          headers: { "Content-Type": "application/json"},
        })
          .then(res => res.json())
          .then(dormPhotos => {
              dorm_num === 1 ? this.setState({dorm_1_photos: Object.values(dormPhotos)}) :
              dorm_num === 2 ? this.setState({dorm_2_photos: Object.values(dormPhotos)}) :
                               this.setState({dorm_3_photos: Object.values(dormPhotos)})
          })
    }

    fetchDormRatings(dorm_num, dorm){
        fetch(`/api/getDormRatings/${dorm}`, {
            method: "GET",
            headers: { "Content-Type": "application/json"},
        })
            // .then(res => console.log(res))
          .then(res => res.json())
          .then(dormRatings => {
                console.log(dormRatings)
                if (dormRatings != null){
                    dorm_num === 1 ? this.setState({dorm_1_ratings: dormRatings}) :
                    dorm_num === 2 ? this.setState({dorm_2_ratings: dormRatings}) :
                                     this.setState({dorm_3_ratings: dormRatings})
                }else{
                    dorm_num === 1 ? this.setState({dorm_1_ratings: noRatings}) :
                    dorm_num === 2 ? this.setState({dorm_2_ratings: noRatings}) :
                                     this.setState({dorm_3_ratings: noRatings})
                }
            })
    }


    handleDormChange(dorm_num, name) {
        dorm_num === 1 ? this.setState({dorm_1: name}) :
        dorm_num === 2 ? this.setState({dorm_2: name}) :
                         this.setState({dorm_3: name})
    }

    render(){
        const { width } = this.state;
        const isMobile = width <= 700;
        const isMedium = this.state.width <= 1400;

        if (isMobile) {
            return (
                
                <div>
                    <ComparisonContainerMobile>
                    <BlueBGMobile>
                        <Title>Comparison Page</Title>
                        
                        <DropDownContainer>
                        <DropDown 
                            Name = {this.state.dorm_1}
                            OnNameChange = {this.handleDormChange}
                        />

                        <DropDown 
                            Name = {this.state.dorm_2}
                            OnNameChange = {this.handleDormChange}
                        />
                    </DropDownContainer>
                    <CarouselContainer> 
                        <CompareCarousel img = {this.state.dorm_1_photos}/>
                        <CompareCarousel img = {this.state.dorm_2_photos}/>
                    </CarouselContainer>
                    </BlueBGMobile> 
                    </ComparisonContainerMobile>
                </div>
            );
        } 
        else{
            return(
            
                <ComparisonContainer>
                    <Title>Comparison Page</Title>
                    {/* <img src={kitchen}/> */}
                    <DropDownContainer>
                        <DropDown 
                            Name = {this.state.Dorm1}
                            onNameChange = {this.handleDormChange}
                        />

                        <DropDown 
                            Name = {this.state.Dorm2}
                            onNameChange = {this.handleDormChange}
                        />

                        <DropDown 
                            Name = {this.state.Dorm3}
                            onNameChange = {this.handleDormChange}
                        />
                    </DropDownContainer>
                    <CarouselContainer> 
                        <CompareCarousel img = {this.state.dorm_1_photos}/>
                        <CompareCarousel img = {this.state.dorm_2_photos}/>
                        <CompareCarousel img = {this.state.dorm_3_photos}/>
                    </CarouselContainer>
                    <div>
                        {this.state.dorm_1_ratings.amenities}
                    </div>
                </ComparisonContainer>
                
            );
        }
    }
}


