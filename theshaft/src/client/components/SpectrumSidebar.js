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

const Wrapper = styled.div`
	width: 100%;
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

const Logo = styled.img `
	display: block;
  	margin: 20px auto;
  	width: 55%;

  	@media only screen and (max-width: 767px) {
  		width: 80%;
			margin-bottom: 20px;
			margin-top: 0;
  	}
`

let LogoLink = styled.a``

const TextDiv = styled.div `
	width: 70%;

	@media only screen and (max-width: 767px) {
		width: 100%;
		margin-top: 5px;
	}
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
	        <Wrapper >
				<LogoLink href="https://www.columbiaspectator.com/spectrum/shaft/" target="_blank">
					<Logo src="https://www.columbiaspectator.com/pb/resources/img/spectrum-logo-NEW.png"/>
				</LogoLink>
				{this.articleMap()}
			</Wrapper>
		);
	}
}

export default SpectrumSidebar