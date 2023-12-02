import React from 'react';
import {Header, HeaderTitle} from "./Contacts";
import styled from "styled-components";
import {FlexWrapper} from "../components/FlexWrapper";
import {Container} from "../components/Container";
import house1 from '../assets/projects/house1.webp'
import house from '../assets/projects/house.webp'
import house2 from '../assets/projects/house2.webp'
import house3 from '../assets/projects/house3.webp'
import house5 from '../assets/projects/house5.webp'
import house6 from '../assets/projects/house6.webp'
import {Fade} from "react-awesome-reveal";

export const ProjectsCollection = () => {

    const projects = [
        {text: 'Первый', photo: house1},
        {text: 'Второй', photo: house2},
        {text: 'Третий', photo: house3},
        {text: 'Четвертый', photo: house},
        {text: 'Пятый', photo: house5},
        {text: 'Шестой', photo: house6},
    ]

    return (
        <StyledProjectsCollection>
            <Header>
                <HeaderTitle>Галерея проектов.</HeaderTitle>
            </Header>
            <Container>
            <FlexWrapper style={{padding: '22vh 0', gap: '44px'}} wrap={'wrap'}>
                <Fade cascade>
                    {projects.map((el, index) => {
                        return(
                            <FlexWrapper key={index} direction={'column'} align={'flex-start'} style={{width: '25vw'}}>
                                <ImageProject photo={el.photo}/>
                                <ImageTitle>{el.text} проект</ImageTitle>
                                <ImageSmallTitle>Architecture</ImageSmallTitle>
                            </FlexWrapper>
                        )
                    })}
                </Fade>

            </FlexWrapper>
            </Container>

        </StyledProjectsCollection>
    );
};

const StyledProjectsCollection = styled.section`
  height: fit-content;
  background: #f6f6f6;
`
const ImageTitle = styled.h4`
  font-weight: 600;
  color: black;
  font-size: 20px;
  margin: 15px 0 10px; 
`
const ImageSmallTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 600;
  color: black;
  font-size: 12px;
`
const ImageProject = styled.div<{ photo: string }>`
  background-image: url(${props => props.photo});
  background-size: cover;
  background-repeat: no-repeat;
  width: 25vw;
  height: 65vh;
  filter: brightness(70%);
`