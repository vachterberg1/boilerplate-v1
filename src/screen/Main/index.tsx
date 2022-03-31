import React from "react";
import {Container, HomeImage, Title, Button, TextButton, Text} from './styles'
import Welcome from '../../assets/ilustra.png'
import { useNavigation } from '@react-navigation/core'

const Main = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Title>Flower's Carousel</Title>
      <HomeImage source={Welcome} />
      <Text>Discover the most exotics flowers in the world in a beautiful carousel</Text>
        <Button onPress={() => navigation.navigate('Carousel')}>
          <TextButton>
            Discover now
          </TextButton>
        </Button>
    </Container>
  )
}

export default Main;