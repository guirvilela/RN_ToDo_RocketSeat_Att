import React from "react";
import { View, Image } from "react-native";

import ClipBoardImg from "../../../assets/Clipboard.png";
import { Container, SubTitle, Title } from "./styles";

const NotFoundTask: React.FC = () => {
  return (
    <Container>
      <Image source={ClipBoardImg} />

      <Title>Você ainda não tem tarefas cadastradas</Title>
      <SubTitle>Crie tarefas e organize seus itens a fazer</SubTitle>
    </Container>
  );
};

export default NotFoundTask;
