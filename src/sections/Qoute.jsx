import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--white);
`;
const moveUp = keyframes`
    100%{ 
        transform: translateY(0);
    }
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-delay: ${(props) => props.delay};
    animation-fill-mode: forwards;
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .author {
    width: 100%;
    text-align: right;
    background-image: linear-gradient(-180deg, var(--gradient));
  }
`;

const Qoute = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;
    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
    return () => {
      if (trigger) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <TextContainer>
        <Text delay="0s">
          <span>&#8220; You can't connect the dots looking forward;</span>
        </Text>
        <Text delay="0.4s">
          <span>
            &nbsp;&nbsp;&nbsp;You can only connect them looking backward.
          </span>
        </Text>
        <Text delay="0.8s">
          <span>&nbsp;&nbsp;&nbsp;So, you have to trust the dots</span>
        </Text>
        <Text delay="1.2s">
          <span>
            &nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8221;
          </span>
        </Text>
        <Text delay="1.6s">
          <span className="author">&#x23AF;&nbsp;Steve Jobs</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Qoute;
