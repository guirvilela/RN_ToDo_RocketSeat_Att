import React from "react";
import { ICard } from "../Card";
import {
  Container,
  ContainerButton,
  ContainerCount,
  TextButton,
  TextCount,
} from "./styles";

interface IButtonsFilter {
  tasks: ICard[];
}

const ButtonsFilter: React.FC<IButtonsFilter> = ({ tasks }) => {
  const taskDone = tasks.filter((task) => task.done === true);
  const createdTasks = tasks.filter((task) => task.done === false);

  return (
    <Container>
      <ContainerButton>
        <TextButton finished={1}>Criadas</TextButton>

        <ContainerCount>
          <TextCount>{createdTasks.length}</TextCount>
        </ContainerCount>
      </ContainerButton>

      <ContainerButton>
        <TextButton finished={0}>Concluídas</TextButton>

        <ContainerCount>
          <TextCount>{taskDone.length}</TextCount>
        </ContainerCount>
      </ContainerButton>
    </Container>
  );
};

export default ButtonsFilter;
