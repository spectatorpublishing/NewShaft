import React, { Component } from "react";
import styled from 'styled-components';

let Table = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${props => props.theme.lightGray};
	padding-bottom: 0.5rem;
	margin-bottom: 0.5rem;
    margin-right: 1.5rem;
    overflow-y: scroll;
`
let Wrapper = styled.div`
`

let TitleText = styled.div`
    display: flex;
`
let LeftTitle = styled.h4`
    margin-right: 4rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.columbiaBlue}
`
let RightTitle = styled.h4`
    margin-bottom: 1rem;
    color: ${props => props.theme.columbiaBlue}
`
let Content = styled.span`
	margin-left: 1rem;
	text-align: right;
`

export default class WhiteboardTable extends Component {
    constructor(props) {
        super(props);

    }

    sidebarModification(thing) {
        //update whiteboard with sidebar changes
    }

    render() {
        return (
			<div>
                <TitleText>
                    <LeftTitle>Room Number</LeftTitle>
                    <RightTitle>Lottery Number</RightTitle>
                </TitleText>
                
                <Table>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae iaculis nunc. Duis in ligula dictum, fermentum sem ut, dignissim nisi. In volutpat varius nisl sed vulputate. Integer ut cursus ligula. Maecenas bibendum augue lorem, ut tristique ligula lacinia nec. Proin ornare eget leo ut sagittis. Cras ullamcorper pulvinar velit, ut vulputate elit maximus condimentum. Curabitur ac nulla sed libero cursus dignissim ut nec enim. Integer iaculis iaculis sapien a congue. Cras laoreet pellentesque nulla et vulputate.

Etiam facilisis orci vel ornare commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc fringilla vel ipsum quis consectetur. Nullam nec nisi vel velit consectetur fringilla. Ut mattis nisl urna, eget tincidunt turpis tempor sed. Etiam ut rhoncus neque. Vestibulum scelerisque leo sed sem tempor maximus.

Nunc consequat accumsan elit in efficitur. Maecenas efficitur magna ipsum, ac porttitor libero finibus dignissim. Donec blandit nulla non ante accumsan, vel venenatis dolor sodales. Nam lacinia nisl id fringilla ultrices. Suspendisse dapibus malesuada eros, sed bibendum augue suscipit sed. Duis placerat lacinia erat, vitae placerat lorem sollicitudin non. Sed non consectetur nibh, eget porta lectus. Donec at mauris sodales, ornare tellus quis, convallis nunc. Vestibulum vitae molestie ligula. Ut porttitor sed ex id consectetur. Vivamus porta varius elit ac vulputate. Vestibulum a massa nec ipsum lobortis viverra a quis ligula. Cras rhoncus vehicula gravida. Maecenas dui tortor, convallis ac lacinia at, rutrum eget neque.

Vivamus ligula quam, bibendum eget venenatis ac, vehicula eu tortor. Donec fermentum elit a suscipit blandit. Etiam et faucibus justo. Ut aliquam sapien eu mauris accumsan viverra. Donec ut libero sit amet dui ultricies suscipit. Curabitur suscipit posuere viverra. Aliquam malesuada dui vel eros viverra euismod. Donec condimentum aliquam dui eget viverra. Donec malesuada risus justo, vitae scelerisque mi fringilla sit amet. Sed aliquet, ligula molestie hendrerit pulvinar, ante lacus blandit nulla, vel lacinia nisi nisl id urna. Fusce eleifend mauris a ullamcorper suscipit. Proin semper congue leo sagittis viverra. Ut libero elit, blandit non tincidunt eget, viverra mollis dolor. Nulla vitae ligula at sem rhoncus vehicula nec non tellus.

Ut congue leo non dolor molestie, a efficitur justo elementum. Morbi ac dapibus libero. Curabitur accumsan ipsum vitae lectus accumsan pellentesque vitae et mauris. Fusce in convallis orci, ac pharetra tellus. Quisque nibh sapien, ornare eget dolor vitae, commodo posuere dolor. Duis ullamcorper congue turpis a condimentum. Sed facilisis leo non eros ultrices, et sodales augue commodo. Integer in eros ullamcorper, ornare ante at, rhoncus lorem. Duis iaculis turpis et dictum sollicitudin.
                </h5>
                </Table>
				
			</div>
        );
    }
}