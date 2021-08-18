import styled from "styled-components"
import restaurant1 from '../../Assets/PNG/restaurant1.png'

const RestaurantTileMain = styled.div`
width: 271px;
height: 410px;
border: 1px solid ${props => props.theme.DetailsLightGrey};
border-radius: 3px;
display: flex;
position: relative;
flex-direction: column;
background-color: ${props => props.theme.backgroundWhite};

`
const TopBorder = styled.div`
height: 8px;
width: 100%;
position: absolute;
top: 0;
left: 0;
background-color: ${props => props.theme.orange};
border-radius: 3px 3px 0px 0px;
`

const RestBody = styled.div`
margin-top: 8px;
width: 100%;
display: flex;
flex-direction: column;
position: relative;
`
const RestTitle = styled.p`
width: 100%;
margin-top: 11px;
padding-left: 13px;
font-size: ${props => props.theme.textSizeM};
`

const RestAddress = styled.p`
width: 100%;
margin-top: 6px;
padding-left: 13px;
font-size: ${props => props.theme.textSizeDefault};
`

const RestImg = styled.img`
position: absolute;
bottom: 0px;
width: 100%;
height: 288px;
border-radius: 0px 0px 3px 3px;
object-fit: cover;
object-position: center top;
`

const RestaurantTile = ({ data }) => {
    return (
        <RestaurantTileMain>
            <TopBorder />
            <RestBody>
                <RestTitle>{data.name}</RestTitle>
                <RestAddress>{data.street}</RestAddress>
            </RestBody>
            <RestImg src={data.image}/>
        </RestaurantTileMain>
    )
}

export default RestaurantTile