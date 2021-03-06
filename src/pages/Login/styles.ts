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
        margin: 3rem;
        font-size: 4rem;
    }

    .inputPlace{

        display: flex;
        flex-direction: column;

        input{
            margin: 0.7rem;
            border-radius: 5px;
            border: none;
            width: 15rem;
            height: 1.9rem;
            background: #7B7979;
            color: white;
            pading: 1.5rem;
            ::placeholder{
                color: #373535;
                padding: 1rem;
            }
        }

        span{
            color: red;
            font-size: 0.8rem;
        }
    }

    button{
        margin: 1rem;
    }

`
