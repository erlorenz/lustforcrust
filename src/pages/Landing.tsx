import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Landing: FC = () => {
  return (
    <>
      <Title>This is the landing page</Title>
      <Link to="/order">click me</Link>
    </>
  );
};

export default Landing;

const Title = styled.h1`
  color: white;
`;
