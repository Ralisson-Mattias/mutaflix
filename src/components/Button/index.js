import styled from "styled-components";

const Button = styled.button`
 color: rgba(30, 39, 46,1.0);
    border: 1px solid rgba(72, 84, 96,1.0);
    box-sizing: border-box;
    background-color: rgba(5, 196, 107,1.0);
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
  } 
`;

export default Button;