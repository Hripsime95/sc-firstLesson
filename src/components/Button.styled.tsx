import styled from "styled-components";
import { css } from "styled-components";

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string,
    btnType: 'primary' | 'outlined'
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 5px;
    padding: 5px 5px;
    align-self: center;
    font-size: ${props => props.fontSize};


    ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
        background-color: transparent;
        border: 2px solid red;
        color: red;
    `}

    ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
        background-color: ${props => props.color || 'red'};
        color: 'white';
    `}
`