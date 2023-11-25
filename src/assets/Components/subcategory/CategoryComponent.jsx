// CategoryComponent.js
import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  width: 100%;
  height: 110vh;
  background-size: cover; /* Ensure the background image covers the entire container */
  background-position: center; /* Adjust the position based on your preference */
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-top : 15px;

  h2 {
    color: #fff;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  @media (min-width: 768px) {
    background-image: url(${(props) => props.horizontalImage});
  }

  @media (max-width: 767px) {
    background-image: url(${(props) => props.verticalImage});
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width : 100vw;
`;

const CategoryComponent = ({ category, horizontalImage, verticalImage, shopNowLink }) => {
  return (
    <CategoryContainer
     horizontalImage={horizontalImage} 
     verticalImage={verticalImage}>
      <ContentWrapper>
        <h2 className='text-3xl md:text-6xl lg:text-5xl text-gray-100 font-bold'>{category}</h2>
      </ContentWrapper>
    </CategoryContainer>
  );
};

export default CategoryComponent;
