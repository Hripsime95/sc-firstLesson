import { styled } from "styled-components";

export const RectangleImg = styled.img.attrs(props => ({
    src: props.src,
  }))`
    width: 280px;
    height: 170;
    margin: 10px 10px;
    border-radius: 10px;
`