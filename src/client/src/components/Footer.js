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
                    <div class="footerTitle">
                        Page Credits
                    </div>
                    <div class="footerRow">
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Authorship</strong>
                            </div>
                            <div class="secBody">
                                <strong>Jaz</strong><b></b>Deputy Editor Spectrum<b></b><b></b>
                                <strong>Ariana</strong><b></b>Deputy Editor Spectrum<b></b><b></b>
                            </div> 
                        </div>
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Design</strong>
                            </div>
                            <div class="secBody">
                                <strong>David Wang</strong><b></b>Head of Product<b></b><b></b>
                                <strong>Cindy Espinosa</strong><b></b>Product Manager<b></b><b></b>
                                <strong>Cecilia Orduña</strong><b></b>Product Manager<b></b><b></b>
                                <strong>Mirah Shi</strong><b></b>Lead Product Designer<b></b><b></b>
                                <strong>Trang Nyugen</strong><b></b>Product Designer<b></b><b></b>
                                <strong>Rachel Bakke</strong><b></b>Product Designer<b></b><b></b>
                                <strong>April Lin</strong><b></b>Product Designer<b></b><b></b>
                            </div> 
                        </div>
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Development</strong>
                            </div>
                            <div class="secBody">
                                <strong>Karlo Dobrovic</strong><b></b>Head of Engineering<b></b><b></b>
                                <strong>McKenna Gillard</strong><b></b>Engineering Manager<b></b><b></b>
                                <strong>Amina Assal</strong><b></b>Engineering Manager<b></b><b></b>
                                <strong>Caroline Hoang</strong><b></b>Engineering Manager<b></b><b></b>
                                <strong>Elaine Wang</strong><b></b>Engineering Manager<b></b><b></b>
                            </div> 
                        </div>
                        <div class="secColumn">
                        <div class="secTitle">
                                <strong>Editing</strong>
                            </div>
                            <div class="secBody">
                                <strong>Sarah Braka</strong><b></b>Head of Copy<b></b><b></b>
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
                                <strong>Jaz</strong><b></b>Deputy Editor Spectrum<b></b><b></b>
                                <strong>Ariana</strong><b></b>Deputy Editor Spectrum<b></b><b></b>
                            </div> 
                        </div>
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Design</strong>
                            </div>
                            <div class="secBody">
                                <strong>David Wang</strong><b></b>Head of Product<b></b><b></b>
                                <strong>Cindy Espinosa</strong><b></b>Product Manager<b></b><b></b>
                                <strong>Cecilia Orduña</strong><b></b>Product Manager<b></b><b></b>
                                <strong>Mirah Shi</strong><b></b>Lead Product Designer<b></b><b></b>
                                <strong>Trang Nyugen</strong><b></b>Product Designer<b></b><b></b>
                                <strong>Rachel Bakke</strong><b></b>Product Designer<b></b><b></b>
                                <strong>April Lin</strong><b></b>Product Designer<b></b><b></b>
                            </div> 
                        </div>
                        <div class="secColumn">
                            <div class="secTitle">
                                <strong>Development</strong>
                            </div>
                            <div class="secBody">
                                <strong>Karlo Dobrovic</strong><b></b>Head of Engineering<b></b><b></b>
                                <strong>McKenna Gillard</strong><b></b>Engineering Manager<b></b><b></b>
                                <strong>Amina Assal</strong><b></b>Engineering Manager<b></b><b></b>
                                <strong>Caroline Hoang</strong><b></b>Engineering Manager<b></b><b></b>
                                <strong>Elaine Wang</strong><b></b>Engineering Manager<b></b><b></b>
                            </div> 
                        </div>
                        <div class="secColumn">
                        <div class="secTitle">
                                <strong>Editing</strong>
                            </div>
                            <div class="secBody">
                                <strong>Sarah Braka</strong><b></b>Head of Copy<b></b><b></b>
                            </div> 
                        </div>
                    </div>
                </div>
            );
        }
    }
}