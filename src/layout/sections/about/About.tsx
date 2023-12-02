import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {DecButton} from "../main/Main";
import house1About from '../../../assets/about/house1.webp'
import house2About from '../../../assets/about/house2end.webp'
import {NavLink} from "react-router-dom";
import {Fade} from "react-awesome-reveal";

export type UsImage = {
    photo: string
}
export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={'center'} style={{height: '100vh'}}>

                    <FlexWrapper>
                            <Image photo={house1About}/>
                            <Image photo={house2About}/>

                    </FlexWrapper>

                    <FlexWrapper direction={'column'} align={'flex-start'} style={{width: '30vw', marginLeft: '100px'}}>
                        <SmallSectionTitle>Суть</SmallSectionTitle>
                        <BigSectionTitle>Коллекция актуальных архитектурных решений</BigSectionTitle>
                        <SectionText style={{fontWeight: 500}}>Архитектурные решения в загородном строительстве сегодня ориентированы на создание уникальных пространств.</SectionText>
                        <SectionText>Современное загородное строительство воплощает в себе синтез функциональности, инноваций и гармонии с окружающей средой, создавая уникальные архитектурные решения, которые отвечают потребностям и предпочтениям современного образа жизни</SectionText>
                        <NavLink to={'projects'}>
                            <AboutButton>смотреть</AboutButton>
                        </NavLink>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    overflow: hidden;
`
export const SmallSectionTitle = styled.h4<{bgc?: string}>`
text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 2px;
  position: relative;
  color: black;
  
  &:before{
    position: absolute;
    content: '';
    width: 35px;
    height: 1px;
    background: ${props => props.bgc || 'black'};
    top: 50%;
    left: -110%;
  }
`
export const BigSectionTitle = styled.h4`
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
  margin: 20px 0 30px;
  line-height: 35px;
  color: black;


`
const SectionText = styled.p`
font-weight: 300;
  text-align: left;
  line-height: 22px;
  margin-bottom: 15px;
  color: black;

`
const Image = styled.div<UsImage>`
  background-image: url(${props => props.photo});
  width: 18vw;
  height: 65vh;
  margin: 0 20px;
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: cover;

  & + & {
    margin-top: 100px;
  }
`

const AboutButton = styled(DecButton)`
  outline: 2px solid rgba(128, 128, 128, 0.42);
  color: black;
  margin: 30px 0;

  &:hover {
    background-color: rgba(128, 128, 128, 0.07);
  }
`