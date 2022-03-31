import styled from "styled-components/native";
import {Dimensions} from 'react-native';
import { css } from "styled-components";

const {width} = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;
const BORDER_RADIUS = 20;
const CURRENT_ITEM_TRANSLATE_Y = 48;

interface StyleProps {
  isDisabled: boolean;
}

export const Container = styled.View`
flex: 1;
background-color: #32B768;
/* padding: 32px 16px; */
`;

export const Item = styled.View`
  width: ${ITEM_LENGTH}px;
  height: 100%;
`;

export const ImageItem = styled.Image`
  width: 100%;
  height: ${ITEM_LENGTH}px;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-top-right-radius: ${BORDER_RADIUS}px;

`

export const Title = styled.Text`
  color: #52665A;
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.P_TITLE};
  text-align: center;
  margin-top: 16px;

`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity<StyleProps>`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background-color: #fff;
  justify-content: center;
  align-items: center;

  ${({ isDisabled }) => isDisabled && css `
    opacity: 0.5;
  `}
`;

export const ButtonTextPrev = styled.Text`
  color: #52665A;
  font-size: 44px;
  flex: 1;
  width: 100%;
  font-family: ${({ theme }) => theme.FONTS.P_TEXT};
  text-align: center;
  margin-right: 6px;
`;

export const ButtonTextNext = styled.Text`
  color: #52665A;
  font-size: 44px;
  flex: 1;
  width: 100%;
  font-family: ${({ theme }) => theme.FONTS.P_TEXT};
  text-align: center;
  margin-left: 6px;
`;

export const Text = styled.Text`
  color: #5C6660;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.P_TEXT};
  text-align: center;
  margin: 15px 20px;
`;

export const TestView = styled.View`
  width: 100%;
  height: 200px;
  background-color: #Fff;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  `