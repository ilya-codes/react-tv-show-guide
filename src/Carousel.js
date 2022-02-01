import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Rerousel } from "rerousel";
import { useState } from "react";
import { useEffect } from "react";

const Shows = styled.div`
  /* height: 40vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;

  display: flex;
  justify-content: space-evenly;

  img {

    display: block;
    border-radius: 8px;
  } */
`;

const Overlay = styled.div`
  /* position: absolute;
  background-image: linear-gradient(to right, #000, transparent, transparent),
    linear-gradient(to left, #000, transparent, transparent);
  z-index: 3;
  width: 90%;
  height: 40vh;
  margin-left: 5vw;
  margin-top: 3rem;
  top: 0;
  left: 0; */
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  font-family: Signika;
  font-weight: bold;
  font-size: 1.5em;
  border: solid 1px black;
  background-color: #61dafb;
`;

const Carousel = () => {
  const ref = useRef(null);
  // const [images, setImages] = useState([]);
  // const imagesArr = [];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/schedule?country=${"US"}&date=${"2021-12-12"}`
        );

        if (response.ok) {
          const data = await response.json();

          const processedData = data
            .filter((item) => item.image)
            .map((item) => item.show.image.medium)
            .slice(0, 6);

          setImages(processedData);
        } else {
          console.log("Too many queries!");
        }
      } catch (err) {
        console.log(`Error while fetching: ${err}`);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Shows>
        <Rerousel itemRef={ref} interval="1000">
          {/* <Item ref={ref}>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item> */}
          {images.map((image, index) => {
            return (
              <Item key={index} ref={ref}>
                <img src={image} alt="" />
              </Item>
            );
          })}
          {/* {images.map((image, index) => {
            return <img src={image} alt="" key={index} ref={ref} />;
          })} */}
        </Rerousel>
      </Shows>
      <Overlay />
    </>
  );
};

export default Carousel;
