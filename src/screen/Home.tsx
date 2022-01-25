import React from "react";
import styled from 'styled-components/native'
import theme from "../utils/styles/theme";


const HomePage = () => {
  return (
    <Container>
      <Title>Sample boilerplate - React Native, TypeScript, Styled Components</Title>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #1E192C;
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.white};
`

export default HomePage