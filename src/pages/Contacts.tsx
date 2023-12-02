import React from 'react';
import styled from "styled-components";
import {Menu} from "../layout/menu/Menu";
import {FlexWrapper} from "../components/FlexWrapper";
import {Container} from "../components/Container";
import {DecButton} from "../layout/sections/main/Main";
import map from '../assets/map.webp'
import {NavLink} from "react-router-dom";

export const Contacts = () => {

    const contacts = [
        {title: 'Address', info: '127994 Moscow, RUT (MIIT)'},
        {title: 'Phone', info: '+7 569 841 52 36'},
        {title: 'Email', info: 'olga@profi.com'},
        {title: 'Fax', info: '+7 495 681-13-40'},
    ]
    return (
        <StyledContacts>
            <Header>
                <HeaderTitle>На связи.</HeaderTitle>
            </Header>
            <Container>
                <InfoWrap>
                    <FlexWrapper style={{width: '100%'}} align={'center'}>
                        <MapPhoto src={map}/>
                        <FlexWrapper direction={'column'}>
                            <FlexWrapper direction={'column'} style={{width: '28vw'}} align={'flex-start'}>
                                <Title>Contact Info:</Title>
                                <Text>Let us know what you're looking for in an agency.
                                    We'll take a look and see if this could be the
                                    start of something beautiful. Please get in touch
                                    and let's schedule time to talk!</Text>
                                {contacts.map(el => {
                                    return (
                                        <SmallAddressText>
                                            <b style={{color: 'black'}}>{el.title} :</b> {el.info}
                                        </SmallAddressText>
                                    )
                                })}
                            </FlexWrapper>
                            <FlexWrapper direction={'column'} style={{width: '28vw', margin: '20px 0'}}
                                         align={'flex-start'}>
                                <Title>Get in touch:</Title>
                                <StyledForm>
                                    <FlexWrapper style={{gap: '25px'}}>
                                        <StyledInput placeholder={'Your Name'}/>
                                        <StyledInput placeholder={'Your Email'} type={'email'}/>
                                    </FlexWrapper>
                                    <StyledInput width={'100%'} placeholder={'Your Title'}/>
                                    <StyledInput as={'textarea'} style={{padding: '20px', resize: 'none'}}
                                                 width={'100%'}
                                                 height={'20vh'} placeholder={'Your Comment'}/>
                                    <ContactButton>send message</ContactButton>
                                </StyledForm>
                            </FlexWrapper>
                        </FlexWrapper>


                    </FlexWrapper>
                </InfoWrap>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  height: 140vh;
  background: #f6f6f6;
`
export const Header = styled.header`
  height: 13vh;
  right: 0;
  top: 0;
  left: 0;
  background: black;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  z-index: 55;
`

export const HeaderTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: white;

`
const Title = styled.h3`
  font-weight: 600;
  font-size: 35px;
  color: black;
`

const InfoWrap = styled.div`
  //margin: 13vh 0;
  padding: 18vh 0;
`

const Text = styled.p`
  color: rgba(128, 128, 128, 0.93);
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin: 30px 0;
`

const SmallAddressText = styled(Text)`
  margin: 10px 0;
`

const StyledInput = styled.input<{ width?: string, height?: string }>`
  width: ${props => props.width || '20vw'};
  height: ${props => props.height || '6vh'};
  border: none;
  padding: 0 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`
const StyledForm = styled.form`
  display: flex;
  gap: 25px;
  flex-direction: column;
  margin: 30px 0;
`

const ContactButton = styled(DecButton)`
  outline: none;
  background: black;
`

const MapPhoto = styled.img`
  width: 25vw;
  height: 70vh;
  margin-right: 10vw;
`