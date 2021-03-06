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

export const HeaderCart = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    button{
        background: #00cc00;
        margin-right: 2.5rem;
    }

`

export const ShoppingCart = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button{
        background: red;
    }

    @media (min-width: 720px){
        display: flex;
        flex-direction: row;
    }
`

export const TextPlace = styled.div`
    b{
        color: green;
    }
`

export const LogoutPlace = styled.div`

    margin: 4rem;

    button{
        background: red;
        width: 6rem;
    }
`