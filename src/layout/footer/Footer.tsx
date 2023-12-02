import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper style={{height: '15vh'}} justify={'space-around'} align={'center'}>
                    <Copyright>© 2023. Designed by Olga Gundina.</Copyright>
                    <Copyright>Made in Moscow.</Copyright>
                    <a href={'https://vk.com/prosto_olay_04'} target="_blank">
                        <FlexWrapper style={{gap: '15px'}}>
                            <InstagramIcon sx={{color: 'grey'}}/>
                            <FacebookIcon sx={{color: 'grey'}}/>
                            <TwitterIcon sx={{color: 'grey'}}/>
                        </FlexWrapper>
                    </a>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
  height: 15vh;
  background: black;
  font-weight: 600;
  font-size: 14px;
`
const Copyright = styled.span`
  color: grey;

`