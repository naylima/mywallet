import styled from 'styled-components';

const MainContent = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    background-color: #8C11BE;

    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFF;
    }

    form {
        height: auto;
        margin: 25px 0;
        display: flex;
        flex-direction: column;
        font-family: 'Raleway';
        font-style: normal;
    }

    input {
        width: 326px;
        height: 58px;
        padding-left: 10px;
        margin-bottom: 13px;
        font-family: 'Raleway';
        font-style: normal;
        font-size: 20px;
        background: #FFFF;
        border: none;
        border-radius: 5px;

        ::placeholder {
            font-size: 20px;
            line-height: 25px;
            color: #000;
            opacity: 1;
        }
        
        :focus {
            outline: none;
        }  
    }

    button {
    
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Raleway';
        font-style: normal;
        font-size: 21px;
        font-weight: 700;
        color: #FFF;
        background: #A328D6;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        :hover {
            filter: brightness(120%);
        }

        :active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        }
        
        :disabled {
            opacity: .7;
        }
    
    }

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        color: #FFF;

        :hover {
            text-decoration-line: underline;
        }        
    }

    a {
        text-decoration: none;
    }

`
export default MainContent;