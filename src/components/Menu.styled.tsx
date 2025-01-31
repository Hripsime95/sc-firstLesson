import styled from "styled-components";

export const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 20px;

        li > a {
            color: green;
            &:hover{
                cursor: pointer;
            } 
        }

    @media screen and (max-width:800px) {
    flex-direction: column;
    }
  }

  

`