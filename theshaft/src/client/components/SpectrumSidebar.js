import React, { Component } from 'react'
import styled from 'styled-components'

const SmallWrapper = styled.div `
	width: 100%;
	display: flex;
	margin-bottom: 15px;

	@media only screen and (max-width: 767px) {
		display: block;
	}
`
const ImageDiv = styled.div `
	width: 40%;
	margin-right: 15px;
	
	@media only screen and (max-width: 767px) {
		width: 100%;
		margin-right: 0px;
	}
`

const Image = styled.img `
	width: 100%;
	height: auto;
	object-fit: cover;
`
const Title = styled.h3 `
	margin-top: -3px;

	@media only screen and (max-width: 767px) {
		font-size: 18px;
	}
`

const AuthorLine = styled.p `
    color: grey;
  `

const Wrapper = styled.div `
	width: 100%;
`

const SectionHeader = styled.div `
  border-radius: 3px;
  background: #00BFFF;
  text-align: center;
  font-size: 20px;
  color: white;
  vertical-align: middle;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
`

const Logo = styled.img `
	display: block;
  	margin-left: auto;
  	margin-right: auto;
  	margin-bottom: 50px;
  	margin-top: 20px;
  	width: 40%;

  	@media only screen and (max-width: 767px) {
  		width: 80%;
		margin-bottom: 20px;
		margin-top: 0;
  	}
`

const TextDiv = styled.div `
	width: 70%;

	@media only screen and (max-width: 767px) {
		width: 100%;
		margin-top: 5px;
	}
`

class SidebarItem extends Component {
    render(){
    	return (
	        <SmallWrapper>
				<ImageDiv>
					<Image src={this.props.img_src}/>
				</ImageDiv>
				<TextDiv>
					<Title>{this.props.title}</Title>
					<hr/>
					<AuthorLine>{this.props.author}</AuthorLine>
					<AuthorLine>{this.props.date}</AuthorLine>
				</TextDiv>
			</SmallWrapper>
    	);
    }
}

class SpectrumSidebar extends Component {

	articleMap(){
		const articleData = this.props.spectrumSidebarData;
		return (
			articleData.map(data =>{
					return <SidebarItem 
						title={data.title} 
						img_src={data.img_src} 
						author = {data.author}
						date = {data.date}/>
				}
			)
		)
	}

    render(){
        return(
	        <Wrapper>
				<Logo src="https://www.columbiaspectator.com/pb/resources/img/spectrum-logo-NEW.png"/>
				{this.articleMap()}
			</Wrapper>
		);
	}
}

export default SpectrumSidebar