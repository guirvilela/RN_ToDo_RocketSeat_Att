import { ThemeType } from "styled-components";
import styled, { css } from "styled-components/native";
import theme from "../../theme";

interface ICard {
  selected: boolean;
}

export const Container = styled.View`
  background-color: ${() => theme.colors.gray400};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${() => theme.colors.gray300};
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  min-height: 64px;
  margin-bottom: 10px;
`;

export const ContainerRadioButton = styled.TouchableOpacity<ICard>`
  height: 20px;
  width: 20px;
  border-radius: 12px;
  border-width: 2px;
  margin-right: 10px;

  ${({ theme, selected }: ThemeType) => css`
    border-color: ${() =>
      selected ? theme.colors.purple_dark : theme.colors.blue};
    background-color: ${() =>
      selected ? theme.colors.purple_dark : "transparent"};
  `}
`;

export const CardTextDone = styled.Text`
  flex: 1;
  margin-right: 8px;
  font-size: 16px;
  color: ${() => theme.colors.gray100};
`;

export const CardTextNotDone = styled.Text`
  flex: 1;
  margin-right: 8px;
  text-decoration-line: line-through;
  font-size: 16px;
  color: ${() => theme.colors.gray100};
`;
