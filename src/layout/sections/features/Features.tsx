import React from 'react';
import styled from "styled-components";
import {BigSectionTitle, SmallSectionTitle, UsImage} from "../about/About";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";


type Features = {
    title: string
    text: string
}
export const Features = () => {

    const features: Features[] = [
        {
            title: 'стиль',
            text: 'Использование современных стилей и элементов дизайна придает домам стильный и современный внешний вид. Использование современных элементов дизайна придает домам стильный внешний вид.'
        },
        {
            title: 'экологичность',
            text: 'Современные загородные дома строятся с использованием экологически чистых материалов, таких как древесина, стекло, а также современные технологии энергосбережения.'
        },
        {
            title: 'красота',
            text: 'Эстетичные решения, большие панорамные окна, современные ландшафтные решения – все это привлекает внимание соседей, создавая впечатление о высоком уровне комфорта и стиля.'
        },
        {
            title: 'доступность',
            text: 'Использование инновационных материалов, требующих минимального обслуживания, также способствует упрощению процесса ухода за домом, делая его более доступным в эксплуатации.'
        }
    ]
    return (
        <StyledFeatures>
            <Container>
                <FlexWrapper direction={'column'} align={'flex-start'} justify={'center'} style={{height: '100vh'}}>
                    <BlackSmallSectionTitle bgc={'white'}>Особенности</BlackSmallSectionTitle>
                    <BigSectionTitle style={{color: 'white'}}>причины заслуженного внимания</BigSectionTitle>
                    <FlexWrapper>
                        <Fade cascade>
                            {features.map((el, index) => {
                                return (
                                    <CardWrap key={el.title}>
                                        <BigNumnber>0{index + 1}</BigNumnber>
                                        <CardTitle>{el.title}</CardTitle>
                                        <CardText>{el.text}</CardText>
                                    </CardWrap>
                                )
                            })}
                        </Fade>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledFeatures>
    );
};

const StyledFeatures = styled.section`
  height: 100vh;
  background: black;
`

const BlackSmallSectionTitle = styled(SmallSectionTitle)`
  color: white;

  &:before{
   left: -40%;
 }

`

const CardTitle = styled.h4`
  text-transform: uppercase;
  color: white;

  letter-spacing: 2px;
  margin: 25px 0 15px;
`
const CardText = styled.p`
  color: white;

  line-height: 22px;
  margin: 15px 0;
  opacity: 0.5;
  font-weight: 300;
`
const CardWrap = styled.div`
  width: 18vw;
  height: 55vh;
  outline: 1px solid rgba(255, 255, 255, 0.22);
  padding: 30px;
  text-align: left;
  margin-right: 50px;
`

const BigNumnber = styled.span`
  font-size: 50px;
  color: white;

`

