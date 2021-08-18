import nyan from '../../Assets/PNG/nyan.gif'
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: 100vh;
background-color: gray;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
height: 150px;
width: 180px;
}
`

const Credits = () => {

    return (
        <Wrapper>
            <div>
                <img src={nyan}/>
            </div>
            <h1>Credits to:</h1>
            <p>Valentina</p>
            <p>Bolor</p>
            <p>Robert</p>
            <p>Fabien</p>
            <p>Nenad</p>
        </Wrapper>
        
    )
}

export default Credits

