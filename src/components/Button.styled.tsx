import styled from "styled-components";
import { css } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type BtnPropsType = {
    primary?: boolean;
    outlined?: boolean;
}

export const StyledBtn = styled.button<BtnPropsType>`
    border-radius: 5px;
    width: 86px;
    height: 30px;
    padding: 5px 5px;
    font-size: 10px;
    font-family: 'Inter';
    
    ${props => props.primary && css<BtnPropsType>`
        border: none;
        background-color: ${myTheme.colors.button.bgColor};
        color: ${myTheme.colors.secondary}
    `}

    ${props => props.outlined && css<BtnPropsType>`
        border: 2px solid ${myTheme.colors.button.bgColor};
        background-color: ${myTheme.colors.secondary};
        color: ${myTheme.colors.button.textColor};
    `}
`