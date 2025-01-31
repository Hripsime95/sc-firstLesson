import './App.css';
import { StyledBtn } from './components/Button.styled';
import { RectangleImg } from './components/RectangleImg.styled';
import { Card } from './components/Card.styled';
import { Box } from './components/Box.styled';

function App() {
    return (
      <Box>
        <Card>
          <RectangleImg src="../public/Rectangle1.svg"/>
          
          <section>
            
            <h3>Headline</h3>
            
            <article>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            </article>
            
            <StyledBtn primary>See more</StyledBtn>
            <StyledBtn outlined>Save</StyledBtn>

          </section>
        </Card>
      </Box>        
      )
    }
    
    export default App;