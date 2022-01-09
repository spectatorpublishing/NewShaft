import React, { Component } from 'react'
import styled from 'styled-components'

const SmallWrapper = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 15px;

	@media only screen and (max-width: 767px) {
		display: block;
	}
`
const ImageContainer = styled.div`
	width: 40%;
	margin-right: 15px;
	
	@media only screen and (max-width: 767px) {
		width: 100%;
		margin-right: 0px;
	}
`
let SpectrumContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
let LinkButton = styled.a`
      font-size: 15; 
      text-align: center;
      background: #73A6E0;
      color: white;
      border-radius: 7px; 
      justify-content:center; align-self: center;
	  padding-top: 10px; padding-bottom: 10px; padding-left: 35px; padding-right: 35px;
`
const Image = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`
const Title = styled.h3`
	margin-top: -3px;
`

const AuthorLine = styled.p`
`


const Hr = styled.hr`
	border-color: ${props => props.theme.lightGray};
`

// const SectionHeader = styled.div `
//   border-radius: 3px;
//   background: #00BFFF;
//   text-align: center;
//   font-size: 20px;
//   color: white;
//   vertical-align: middle;
//   padding-top: 5px;
//   padding-bottom: 5px;
//   padding-right: 10px;
//   padding-left: 10px;
// `

const Wrapper = styled.div`
	margin-bottom: 1.5rem;
	padding: 3vw;
	margin-top: 1rem;
	box-shadow: 5px 5px 10px ${props => props.theme.lightGray};
	border: 1px solid ${props => props.theme.lightGray};
`
const TextDiv = styled.div `
	width: 70%;

	@media only screen and (max-width: 767px) {
		width: 100%;
		margin-top: 5px;
	}
	text-align: left; 
`

const LinkDiv = styled.a`
	text-decoration: none;
	color: black;
`

class SidebarItem extends Component {
    render(){
    	return (
			<LinkDiv target="_blank" rel="noopener noreferrer" href={this.props.url}>
				<SmallWrapper>
					<ImageContainer>
						<Image src={this.props.img_src}/>
					</ImageContainer>
					<TextDiv>
						<Title>{this.props.title}</Title>
						<Hr></Hr>
						<AuthorLine>{this.props.author}</AuthorLine>
						<AuthorLine>{this.props.date}</AuthorLine>
					</TextDiv>
				</SmallWrapper>
			</LinkDiv>
    	);
    }
}

class SpectrumSidebar extends Component {

	articleMap(){
		const articleData = this.props.spectrumSidebarData;
		return (
			articleData.map((data, index) =>{
					return <SidebarItem 
						key={index}
						title={data.title} 
						img_src={data.img_src} 
						author = {data.author}
						date = {data.date}
						url = {data.url}
						/>
				}
			)
		)
	}

    render(){
        return(
			<SpectrumContainer>
				<Wrapper>
					{this.articleMap()[0]}
				</Wrapper>
				<LinkButton href="https://www.columbiaspectator.com/spectrum/shaft/">Read More</LinkButton>
			</SpectrumContainer> 
		);
	}
}

export default SpectrumSidebar