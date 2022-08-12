import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerList = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${() => theme.colors.gray600};
`;

export const Divider = styled.View`
  border-bottom-color: ${() => theme.colors.gray300};
  border-bottom-width: 1px;
  margin-bottom: 24px;
`;
