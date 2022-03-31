import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs({
  colors: ["#B83341", "#E03F50"],
  start: { x: 1, y: 1 },
  end: { x: 0, y: 0 },
})`
  flex: 1;
  align-items: center;
  /* padding: 32px 16px; */
  
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.P_TITLE};
  text-align: center;
  margin-top: 16px;
`