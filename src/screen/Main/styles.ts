import styled from "styled-components/native";
import { Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
`

export const Title = styled.Text`
  color: #52665A;
  font-size: 28px;
  font-family: ${({ theme }) => theme.FONTS.P_TITLE};
  text-align: center;
  margin-top: 16px;
  max-width: 300px;
`

export const HomeImage = styled(Image)`

  /* margin-top: 4px; */
`;



export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #32B768;
  border-radius: 16px;
  margin-top: 16px;
  padding: 16px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.P_TITLE};
  text-align: center;
`;

export const Text = styled.Text`
  color: #5C6660;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.P_TEXT};
  text-align: center;
  margin-top: 16px;
  max-width: 288px;
`