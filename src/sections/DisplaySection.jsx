import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;


  background-color: var(--dark);
  color: var(--white);

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;
  }

  & > *:nth-child(odd) {
    align-self: flex-start;
    margin-left: 4rem;
    text-align: left;
  }
`;

const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;
const Title = styled.h2`
  font-size: var(--fontlg);
  margin-bottom: 1rem;
`;
const Text = styled.p`
  font-size: var(--fontxs);
  color: var(--greyLight);
  margin-bottom: 0.5rem;
  width: 55%;
`;

const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
  align-items: center;
`;

const MovingText = styled.h2`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`;
const DisplaySection = () => {

    const container = useRef(null)
    const textOne = useRef(null)
    const textTwo = useRef(null)

    useLayoutEffect(() => {

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: container.current, 
                start: "top-=500 top", 
                end: "bottom top", scrub: true
            }
        }).fromTo(textOne.current, {x:"20%"}, {x:0}, "key1").fromTo(textTwo.current, {x:"-20%"},{x:0}, "key1")

        return () => {
            if(t1) t1.kill()
        }

    }, [])

  return (
    <Container>
      <MainTitle>
        Immersive <br /> Display
      </MainTitle>
      <TextBlockRight>
        <Title>Super Retina XDR Display</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus, praesentium!
        </Text>
      </TextBlockRight>
      <TextBlockLeft>
        <Title>Big is better</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus, praesentium!
        </Text>
      </TextBlockLeft>
      <TextContainer ref={container}>
        <MovingText ref={textOne}>Tougher than ever</MovingText>
        <MovingText ref={textTwo}>Every touch matters!</MovingText>
      </TextContainer>
    </Container>
  );
};

export default DisplaySection;
