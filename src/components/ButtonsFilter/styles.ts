import { ThemeType } from "styled-components";
import styled, { css, DefaultTheme } from "styled-components/native";
import theme from "../../theme";

interface IButtonFilter {
  finished: number;
}

export const Container = styled.View`
  flex-direction: row;

  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: transparent;
  align-items: center;
`;

export const TextButton = styled.Text<IButtonFilter>`
  margin-right: 8px;
  font-size: 18px;
  font-weight: bold;

  ${({ theme, finished }: ThemeType) => css`
    color: ${finished === 1 ? theme.colors.blue : theme.colors.purple};
  `}
`;

export const ContainerCount = styled.View`
  background-color: ${() => theme.colors.gray300};
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 8px;
  min-width: 25px;
  align-items: center;
  justify-content: center;
`;

export const TextCount = styled.Text`
  color: ${() => theme.colors.gray100};
  font-size: 16px;
  font-weight: bold;
`;
