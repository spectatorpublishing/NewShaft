import React from "react";
import '../css/Footer.css';
import styled from 'styled-components';

let FooterWrapper = styled.div`
  background-color: grey;
  z-index: 1rem;
  padding-bottom: 2rem;
  position: relative;
`;

let FooterTitle = styled.div`
  color: transparent;
  font-family: 'Archivo Black';
  font-size: 3.5rem;
  padding-left: 1.9rem;
  padding-top: 3.5rem;
  margin-left: 3%;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
`;

let FooterTitlePhone = styled.div`
  color: transparent;
  font-family: 'Archivo Black';
  font-size: 3.5rem;
  padding-left: 3rem;
  text-align: left;
  padding-top: 3.5rem;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
`;

let FooterRow = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  flex-direction: row;
`;

let FooterRowPhone = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  flex-direction: row;
`;

let SecColumn = styled.div`
  padding: 0.6rem;
  padding-right: 2rem;
  padding-left: 2rem;
`;

let SecTitle = styled.div`
  color:white;
  font-family: 'Raleway';
  font-size: 1.5rem;
  padding-bottom: 1.8rem;
  padding-top: 1.8rem;
`;

let SecBody = styled.div`
  color:white;
  font-family: 'Raleway';
  font-size: 1.3rem;
`;

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        }
    }
    
    componentDidMount() {
        if (window.innerWidth <= 768) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
        window.addEventListener("resize", this.handleResize);
    }
    
    handleResize = () => {
        if (window.innerWidth <= 768) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    }
    
    render() {
        if (this.state.isMobile) {
            return (
                <FooterWrapper>
                    <FooterTitlePhone>Page Credits</FooterTitlePhone>
                    <FooterRowPhone>
                        <SecColumn>
                            <SecTitle><strong>Authorship</strong></SecTitle>
                            <SecBody>
                                <strong>Jaz Salam</strong><br></br>Deputy Editor Spectrum<br></br><br></br>
                                <strong>Ariana</strong><br></br>Deputy Editor Spectrum<br></br><br></br>
                            </SecBody> 
                            <SecTitle><strong>Design</strong></SecTitle>
                            <SecBody>
                                <strong>David Wang</strong><br></br>Head of Product<br></br><br></br>
                                <strong>Cindy Espinosa</strong><br></br>Product Manager<br></br><br></br>
                                <strong>Cecilia Orduña</strong><br></br>Product Manager<br></br><br></br>
                                <strong>Mirah Shi</strong><br></br>Lead Product Designer<br></br><br></br>
                                <strong>Trang Nyugen</strong><br></br>Product Designer<br></br><br></br>
                                <strong>Rachel Bakke</strong><br></br>Product Designer<br></br><br></br>
                                <strong>April Lin</strong><br></br>Product Designer<br></br><br></br>
                            </SecBody> 
                        </SecColumn>
                        <SecColumn>
                            <SecTitle><strong>Development</strong></SecTitle>
                            <SecBody>
                                <strong>Karlo Dobrovic</strong><br></br>Head of Engineering<br></br><br></br>
                                <strong>McKenna Gillard</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Amina Assal</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Caroline Hoang</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Elaine Wang</strong><br></br>Engineering Manager<br></br><br></br>
                            </SecBody>
                            <SecTitle><strong>Editing</strong></SecTitle>
                            <SecBody>
                                <strong>Sarah Braka</strong><br></br>Head of Copy<br></br><br></br>
                                <strong>Joyce Liu</strong><br></br>Deputy Copy Editor<br></br><br></br>
                            </SecBody>  
                        </SecColumn>
                    </FooterRowPhone>
                </FooterWrapper>
            );
        }
        else {
            return (
                <FooterWrapper>
                    <FooterTitle>Page Credits</FooterTitle>
                    <FooterRow>
                        <SecColumn>
                            <SecTitle><strong>Authorship</strong></SecTitle>
                            <SecBody>
                                <strong>Jaz Salam</strong><br></br>Spectrum Deputy Editor<br></br><br></br>
                                <strong>Ariana</strong><br></br>Spectrum Deputy Editor<br></br><br></br>
                            </SecBody> 
                        </SecColumn>
                        <SecColumn>
                            <SecTitle><strong>Design</strong></SecTitle>
                            <SecBody>
                                <strong>David Wang</strong><br></br>Head of Product<br></br><br></br>
                                <strong>Cindy Espinosa</strong><br></br>Product Manager<br></br><br></br>
                                <strong>Cecilia Orduña</strong><br></br>Product Manager<br></br><br></br>
                                <strong>Mirah Shi</strong><br></br>Lead Product Designer<br></br><br></br>
                                <strong>Trang Nyugen</strong><br></br>Product Designer<br></br><br></br>
                                <strong>Rachel Bakke</strong><br></br>Product Designer<br></br><br></br>
                                <strong>April Lin</strong><br></br>Product Designer<br></br><br></br>
                            </SecBody> 
                        </SecColumn>
                        <SecColumn>
                            <SecTitle><strong>Development</strong></SecTitle>
                            <SecBody>
                                <strong>Karlo Dobrovic</strong><br></br>Head of Engineering<br></br><br></br>
                                <strong>McKenna Gillard</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Amina Assal</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Caroline Hoang</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Elaine Wang</strong><br></br>Engineering Manager<br></br><br></br>
                            </SecBody> 
                        </SecColumn>
                        <SecColumn>
                            <SecTitle><strong>Editing</strong></SecTitle>
                            <SecBody>
                                <strong>Sarah Braka</strong><br></br>Head of Copy<br></br><br></br>
                                <strong>Joyce Liu</strong><br></br>Deputy Copy Editor<br></br><br></br>
                            </SecBody> 
                        </SecColumn>
                    </FooterRow>
                </FooterWrapper>
            );
        }
    }
}