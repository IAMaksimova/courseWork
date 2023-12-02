import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import homeMain from '../../../assets/mainHome.jpg'
import {Menu} from "../../menu/Menu";

export const Main = () => {
    return (
        <StyledMain>
            <Container>

                <FlexWrapper align={'center'} style={{height: '100vh'}}>
                    <FlexWrapper style={{width: '100%'}} justify={'space-between'}>
                    <FlexWrapper  style={{height: '100vh'}} justify={'center'} direction={'column'} align={'flex-start'} >
                        <SmallTitle>архитектура / искусство</SmallTitle>
                        <MainTitle>Современная архитектура загородных домов</MainTitle>
                        <DecButton>Знакомство</DecButton>
                    </FlexWrapper>
                        <DecDigit>
                            <li>01</li>
                            <li>02</li>
                            <li>03</li>
                        </DecDigit>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-image: url(${homeMain});
  background-repeat: no-repeat;
  background-size: cover;
`

const SmallTitle = styled.h3`
display: inline-block;
  font-weight: 300;
  letter-spacing: 2px;
  color: white;

`
const MainTitle = styled.h2`
  //display: inline-block;
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;
  font-size: 45px;
  width: 52vw;
  letter-spacing: 2px;
  line-height: 55px;
  margin: 30px 0;
  color: white;


`
export const DecButton = styled.button`
  width: 200px;
  height: 50px;
  outline: 2px solid white;
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  font-weight: 500;

  &:hover {
    background-color: rgba(128, 128, 128, 0.6);
  }
`

const DecDigit = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-weight: 500;
  position: relative;
  //outline: 1px solid pink;
  justify-content: center;
  font-size: 20px;
  color: white;


  &::before{
    position: absolute;
    content: '';
    width: 35px;
    height: 1px;
    background-color: white;
    left: -60px;
    top: 43.3vh;
    
  }
  
  li{
    opacity: 0.5;
    &:nth-child(1){
      opacity: 1;
    }
  }
  
`