import React from "react";
import Carousel from "../../components/Carousel";
import {Container} from './styles'
import { data } from "./mock";



const CarouselPage = () => {
  return (
    <Container>
      <Carousel data={data} />
    </Container>
  )
}

export default CarouselPage