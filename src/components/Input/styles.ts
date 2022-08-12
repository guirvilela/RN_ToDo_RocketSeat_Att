import { ThemeType } from "styled-components";
import styled, { css } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  top: -30px;
`;

export const InputNewTask = styled.TextInput`
  font-size: 16px;
  padding-left: 15px;

  flex: 1;
  height: 56px;
  border-radius: 6px;
  margin-right: 8px;
  border-width: 1.5px;

  ${({ theme }: ThemeType) => css`
    background-color: ${theme.colors.gray500};
    color: ${theme.colors.gray100};
    border-color: ${theme.colors.gray500};
  `}
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${() => theme.colors.blue_dark};
`;
