import React from 'react';
import styled from "styled-components";
import {UsImage} from "../about/About";
import {FlexWrapper} from "../../../components/FlexWrapper";
import house1 from '../../../assets/collection/house1fin.webp'
import house2 from '../../../assets/collection/house3fin.webp'
import house3 from '../../../assets/collection/house4fin.webp'

export const Piccollection = () => {
    return (
        <StyledPicCollection>
            <FlexWrapper gap={'0px'}>
                <CollectionImage photo={house1}>
                    <Title>                    элегантная сдержанность
                    </Title>
                </CollectionImage>
                <CollectionImage photo={house3}><Title>cмелые формы</Title></CollectionImage>
                <CollectionImage photo={house2}><Title>запредельный уют</Title></CollectionImage>
            </FlexWrapper>
            <Dec/>
        </StyledPicCollection>
    );
};

const StyledPicCollection = styled.section`
  height: 130vh;
`

const CollectionImage = styled.div<UsImage>`
  background-image: url(${props => props.photo});
  width: 33vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  padding: 40px;
  display: flex;
  align-items: flex-end;
  position: relative;
  
  &:before, &:after{
    content: '';
    position: absolute;
    width: 60px;
    height: 1px;
    background-color: white;
    top: 50%;
    left: 50%;
    display: none;
  }
  
  &:after{
    transform: rotate(90deg);
  }
  
  &:hover{
    cursor: pointer;
    filter: brightness(60%);
    &:before, &:after{
      display: block;
    }
  }
`

const Title = styled.h4`
font-size: 18px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 1;
  letter-spacing: 2px;
  width: 10vw;
  text-align: left;
  line-height: 30px;
`

const Dec = styled.div`
height: 30vh;
  background-color: black;
`