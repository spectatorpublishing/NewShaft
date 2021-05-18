import React, {Component} from "react";
import styled from "styled-components";


const PageWrapper = styled.div`
    background-color: rgba(0,0,0,0.85);
    z-index: 5;
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: block;
    padding: 2% 2% 2% 2%;
    box-sizing: border-box;
`;
//TOP
const ToolBar = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const CloseButton = styled.button`
  color: white;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 1rem;
  padding: 0.5em 2.5em;
`;

//BODY
const Body = styled.div`
    display: block;
    /* flex-direction: column; */
    margin: 0 auto;
    width: 50vw;
    /* align-items: center;
    justify-content: center; */
`;
let Carousel = styled.div`
  padding: 2% 0;
  display: flex;
  overflow: hidden;
`;
let CarouselImg = styled.img`
  height: 65vh;
  object-fit: cover;
  
`;

////////BOTTOM
let Preview = styled.div`
    display: flex;
    width: 66vw;
    padding: 1% 0;
    /* margin-left: 6%; */
`;
let PreviewImg = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  padding-right: 2rem;
`;
export default class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateModal: this.props.updateModal,
            images: this.props.images
        };
    }

    render(){
        return (
            <PageWrapper>
                <ToolBar>
                    <CloseButton onClick={()=>this.state.updateModal()}>Close</CloseButton>
                </ToolBar>
                <Body>
                    <Carousel>
                        {/* <button >next</button> */} 
                        {this.state.images.map((image, index)=>(
                            index==0 ? <CarouselImg key={index} src={image}/> : <></>
                        ))}
                    </Carousel>
                    <Preview>
                        {this.state.images.map((image, index)=>{
                            return(
                                <PreviewImg key={index} src={image}
                            />)
                        })}
                    </Preview>
                </Body>
                
            </PageWrapper>
        )
    }
}
