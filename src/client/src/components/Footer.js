import React from "react";
import '../css/Footer.css';

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
                <div class="footer">
                    <div class="footerTitle_phone">
                        Page Credits
                    </div>
                    <div class="footerRow">
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Authorship</strong>
                            </div>
                            <div class="secBody">
                                <strong>Jaz</strong><br></br>Deputy Editor Spectrum<br></br><br></br>
                                <strong>Ariana</strong><br></br>Deputy Editor Spectrum<br></br><br></br>
                            </div> 
                            <div class="secTitle">
                                <strong>Design</strong>
                            </div>
                            <div class="secBody">
                                <strong>David Wang</strong><br></br>Head of Product<br></br><br></br>
                                <strong>Cindy Espinosa</strong><br></br>Product Manager<br></br><br></br>
                                <strong>Cecilia Orduña</strong><br></br>Product Manager<br></br><br></br>
                                <strong>Mirah Shi</strong><br></br>Lead Product Designer<br></br><br></br>
                                <strong>Trang Nyugen</strong><br></br>Product Designer<br></br><br></br>
                                <strong>Rachel Bakke</strong><br></br>Product Designer<br></br><br></br>
                                <strong>April Lin</strong><br></br>Product Designer<br></br><br></br>
                            </div> 
                        </div>
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Development</strong>
                            </div>
                            <div class="secBody">
                                <strong>Karlo Dobrovic</strong><br></br>Head of Engineering<br></br><br></br>
                                <strong>McKenna Gillard</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Amina Assal</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Caroline Hoang</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Elaine Wang</strong><br></br>Engineering Manager<br></br><br></br>
                            </div>
                            <div class="secTitle">
                                <strong>Editing</strong>
                            </div>
                            <div class="secBody">
                                <strong>Sarah Braka</strong><br></br>Head of Copy<br></br><br></br>
                            </div>  
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div class="footer">
                    <div class="footerTitle">
                        Page Credits
                    </div>
                    <div class="footerRow">
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Authorship</strong>
                            </div>
                            <div class="secBody">
                                <strong>Jaz</strong><br></br>Deputy Editor Spectrum<br></br><br></br>
                                <strong>Ariana</strong><br></br>Deputy Editor Spectrum<br></br><br></br>
                            </div> 
                        </div>
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Design</strong>
                            </div>
                            <div class="secBody">
                                <strong>David Wang</strong><br></br>Head of Product<br></br><br></br>
                                <strong>Cindy Espinosa</strong><br></br>Product Manager<br></br><br></br>
                                <strong>Cecilia Orduña</strong><br></br>Product Manager<br></br><br></br>
                                <strong>Mirah Shi</strong><br></br>Lead Product Designer<br></br><br></br>
                                <strong>Trang Nyugen</strong><br></br>Product Designer<br></br><br></br>
                                <strong>Rachel Bakke</strong><br></br>Product Designer<br></br><br></br>
                                <strong>April Lin</strong><br></br>Product Designer<br></br><br></br>
                            </div> 
                        </div>
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Development</strong>
                            </div>
                            <div class="secBody">
                                <strong>Karlo Dobrovic</strong><br></br>Head of Engineering<br></br><br></br>
                                <strong>McKenna Gillard</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Amina Assal</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Caroline Hoang</strong><br></br>Engineering Manager<br></br><br></br>
                                <strong>Elaine Wang</strong><br></br>Engineering Manager<br></br><br></br>
                            </div> 
                        </div>
                        <div class="secColumn">
                        <div class="secTitle">
                                <strong>Editing</strong>
                            </div>
                            <div class="secBody">
                                <strong>Sarah Braka</strong><br></br>Head of Copy<br></br><br></br>
                            </div> 
                        </div>
                    </div>
                </div>
            );
        }
    }
}