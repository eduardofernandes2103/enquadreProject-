import styled from 'styled-components';

export const Container = styled.div`
  
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    text-align: center;

    h2{ 
        margin-bottom: 2rem;
        font-size: 3rem;
    }

    h3{
        margin: 1rem;
    }
`
export const CartPlace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
    font-size: 2rem;
    color: #00cc00;
    
    .icon{
        color: #00cc00;
    }
    
`