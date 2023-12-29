import React from "react";
import styled from "styled-components";
import v1 from "../assets/video/Scuba Diving - 699.mp4";
import v2 from "../assets/video/Skate - 49791.mp4";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
  background-color: var(--white);
`;

const V1 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;

const V2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: auto;
  z-index: 1;
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  &>*:nth-child(2) {
    margin-left: 8rem ;
  }
  &>*:nth-child(3) {
    margin-left: 16rem ;
  }
`;
const Title = styled.h2`
  font-size: var(--fontBig);
  z-index: 5;
  text-transform: capitalize;
`;
const CameraSection = () => {
  const containerRef = useRef(null);
  const videoOne = useRef(null);
  const videoTwo = useRef(null);
  const titleRef = useRef(null);
  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    let containerElem = containerRef.current;
    let vidoeOneElem = videoOne.current;
    let videoTwoElem = videoTwo.current;

    gsap.to(containerElem, {
      scrollTrigger: {
        trigger: containerElem,
        start: "top top",
        end: "bottom+=500 bottom",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerElem,
          start: "top top",
          end: "bottom+=500 bottom",
          scrub: true,
        },
      })
      .to(vidoeOneElem, { scale: 0.3 }, "key1")
      .to(videoTwoElem, { scale: 0.6 }, "key1");

    elements("h2").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
          x: 100,
          opacity: 0,
        },
        { x: 0, opacity: 1 }
      )
    );
  }, []);

  return (
    <Section ref={containerRef}>
      <V1 ref={videoOne} src={v1} type="video/mp4" autoPlay muted loop />
      <V2 ref={videoTwo} src={v2} type="video/mp4" autoPlay muted loop />
      <TitleContainer ref={titleRef}>
        <Title>Ready.</Title>
        <Title>Steady.</Title>
        <Title>Action.</Title>
      </TitleContainer>
    </Section>
  );
};

export default CameraSection;
