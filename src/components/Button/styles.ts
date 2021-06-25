import styled from 'styled-components';

interface ButtonStyledProps {
    setColor: string;
    setFontColor: string;
    setSize: string;
  }

const MyButton = styled.button<ButtonStyledProps>`
    width: ${props=> {if(props.setSize === "large") {return "9em"}     
        else if (props.setSize === "medium") { return "7em"} 
        else {return "5em"}
    }};
    height: 2rem;
    background-color: ${props=>props.setColor};
    color: ${props=>props.setFontColor};
    border: 0.5px solid black;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${props=> {if(props.setSize === "large") {return "0.8rem"}     
        else if (props.setSize === "medium") { return "0.7rem"} 
        else {return "0.5rem"}
    }};
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    transition: 0.2s;
    :hover{
        opacity: 50%;
        background-color: gray;
        color: black;
    }
`

export default MyButton;
