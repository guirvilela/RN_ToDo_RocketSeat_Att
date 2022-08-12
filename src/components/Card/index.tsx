import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  CardTextDone,
  CardTextNotDone,
  Container,
  ContainerRadioButton,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import theme from "../../theme";

interface ICardProps {
  item: ICard;
  handleSelectTaskDone: () => void;
  handleRemoveTask: () => void;
}

export type ICard = {
  id: number;
  done: boolean;
  text: string;
};

const Card: React.FC<ICardProps> = ({
  item: { done, text },
  handleSelectTaskDone,
  handleRemoveTask,
}) => {
  return (
    <Container>
      <ContainerRadioButton selected={done} onPress={handleSelectTaskDone}>
        {done && <Entypo name="check" size={16} color="white" />}
      </ContainerRadioButton>

      {done ? (
        <CardTextNotDone>{text}</CardTextNotDone>
      ) : (
        <CardTextDone>{text}</CardTextDone>
      )}

      <TouchableOpacity onPress={handleRemoveTask}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={theme.colors.gray300}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default Card;
