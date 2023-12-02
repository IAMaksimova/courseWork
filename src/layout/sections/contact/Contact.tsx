import React from 'react';
import styled from "styled-components";
import cover from '../../../assets/contact/test.jpg'
import {BigSectionTitle} from "../about/About";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {DecButton} from "../main/Main";
import {NavLink} from "react-router-dom";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper direction={'column'} justify={'center'} style={{height: '55vh'}}>
                    <BigSectionTitle style={{margin: 0, letterSpacing: '3px', fontSize: '35px', textAlign: 'center', color: 'white'}}>давайте работать вместе</BigSectionTitle>
                    <Text>
                        Хотите обсудить сотрудничество? Смело кликайте на кнопку под этим текстом,
                        указывайте контактные данные, мы с вами обязательно свяжемся.</Text>
                    <NavLink to={ 'contact'}>
                        <ContactButton>contact us</ContactButton>
                    </NavLink>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  height: 55vh;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
`

const Text = styled.p`
  font-size: 20px;
  width: 70%;
  text-align: center;
  margin: 40px auto;
  font-weight: 400;
  line-height: 30px;
  color: white;

`

const ContactButton = styled(DecButton)`
  outline: 2px solid rgba(255, 255, 255, 0.41);
  color: white;
  margin: 0 auto;

  &:hover {
    background-color: rgba(128, 128, 128, 0.46);
  }
`