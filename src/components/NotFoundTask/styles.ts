import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${() => theme.colors.gray300};
  font-weight: bold;
  margin-top: 18px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${() => theme.colors.gray300};
  margin-top: 4px;
  text-align: center;
`;
