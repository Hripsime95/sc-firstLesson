import { styled } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Card = styled.div`
    width:300px;
    height: 350px;
    border: none;
    border-radius: 5%;
    box-shadow: 3px 3px 25px ${myTheme.colors.shadow};
    background-color: ${myTheme.colors.secondary};

    section {
        margin: 10px 20px;

        h3{
            font-family: 'Inter';
            font-size: 16px;
            color: ${myTheme.colors.text.headerColor}
        }

        article {
            font-family: 'Inter';
            font-size: 12px;
            color: ${myTheme.colors.text.textColor};
            margin: 20px 0;
        }

        button + button {
            margin-left: 10px;
        }
    }
`;