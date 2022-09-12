import styled from "styled-components";

export const Main = styled.div`

    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    box-sizing: border-box;

    background-color: #8C11BE;

    h1 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFF;
    }

    .exit {
        font-size: 30px;
        font-weight: 700;
        color: #FFF;
        cursor: pointer;
    }

    form {
        height: auto;
        margin-top: 90px;
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

`
export const Top = styled.div`

    width: 326px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const Container = styled.div`

    width: 326px;
    height: calc(100vh - 230px);
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: #FFF;
    border-radius: 5px;

    p {

        width: 60%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        align-self:center;
        text-align: center;
        color: #868686;

    }

    > div {
        width: 95%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
    }

    .container {
        width: 100%;
        margin-top: 10px;
        overflow-y: auto;

        padding-bottom: 50px;
    }

    .balance {
        position: absolute;
        bottom: 0;

        background-color: #FFF;

        span:first-child {
            font-weight: 700;
        }

        span:last-child {
            color: ${({ total }) => (total > 0 ? '#03AC00' : '#C70000')};
        }
    }

`

export const Bottom = styled.div`

    width: 326px;
    margin: 13px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >div {
        width: 155px;
        min-height: 114px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #A328D6;
        border: none;
        border-radius: 5px;

        :hover {
            filter: brightness(120%);
        }

        span {
            width: 50%;
            padding: 10px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 20px;
            color: #FFF;
        }

        .icon {
            font-size: 25px;
            padding: 10px;
            font-weight: 700;
            color: #FFF;
            cursor: pointer;
        }
    }

`
export const Transaction = styled.div`

    width: 100%;
    height: auto;
    padding: 10px 0;
    display: flex;
    align-items: center;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    position: relative;

    .date {
        color: #C6C6C6;
    }

    .description {
        width: 60%;
        word-break: break-word;
    }

    span:nth-child(1) {
        margin-right: 8px;
    }

    span:last-child {
        position: absolute;
        right: 10px;

        color: ${({ type }) => (type === 'in' ? '#03AC00' : '#C70000')};
    }

`