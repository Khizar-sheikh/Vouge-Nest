// CategoryComponent.js
import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  width: 100%;
  height: 100vh; /* Adjust height as needed */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  cursor : pointer;

  h2{
    color : #fff;
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
`;

const CategoryComponent = ({ category, horizontalImage, verticalImage, shopNowLink }) => {
  return (
    <CategoryContainer horizontalImage={horizontalImage} verticalImage={verticalImage}>
      <ContentWrapper >
        <h2 className='text-3xl md:text-6xl sm:text-5xl text-gray-100  font-bold'>{category}</h2>
      </ContentWrapper>
    </CategoryContainer>
  );
};

export default CategoryComponent;
