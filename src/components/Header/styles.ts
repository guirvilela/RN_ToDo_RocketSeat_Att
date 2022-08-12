import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  background-color: ${() => theme.colors.gray700};
  padding-top: ${() => getStatusBarHeight() + 20}px;
  align-items: center;
  height: 173px;
`;
