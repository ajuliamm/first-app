import styled from "styled-components";
import Background from "./assets/bg-image-1.svg"

export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:44px;
    min-height: 100vh;

`

export const Image = styled.img`
    margin-top: 30px;

`
export const TextContainer = styled.div `
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;    
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    
    


`
export const H1 = styled.h1 `
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: #FFFFFF;
    margin-bottom: 80px;
    text-align: center;
`
export const Label = styled.p `
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    padding-left: 25px;

    color: #EEEEEE;

`
export const Input = styled.input `
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: calc(342px - 25px);
    height: 58px;
    border: none;
    outline: none;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    padding-left:25px;
    margin-bottom: 35px;
    

`
export const Button = styled.button `
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    width: 342px;
    height: 74px;
    border: none;

    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
    gap:14px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    &:active{
        opacity: 0.5;
    }
`