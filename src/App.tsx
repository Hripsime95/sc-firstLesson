import './App.css';
import styled from 'styled-components';
import { myTheme } from './styles/Theme.styled';


function App() {
    return (
      <Box>
        <Card>
          <RectangleImg src="./img/Rectangle.png"/>
        </Card>
      </Box>        
      )
    }
    
    export default App;

    const Box = styled.div`
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    
    const Card = styled.div`
      width:300px;
      height: 350px;
      border: none;
      border-radius: 5%;
      box-shadow: 3px 3px 25px ${myTheme.colors.shadow};
      background-color: ${myTheme.colors.secondary};
    `;

    const RectangleImg = styled.img.attrs(props => ({
      src: props.src,
    }))`
      width: 280px;
      height: 170;
      margin: 10px 10px;
      border-radius: 10px;
    `
