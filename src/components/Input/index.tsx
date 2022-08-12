import React, { useState } from "react";
import theme from "../../theme";
import { ButtonAdd, Container, InputNewTask } from "./styles";
import { AntDesign } from "@expo/vector-icons";

interface IInputProps {
  handleAddNewTask: (task: string) => void;
}

const NewTaskInput: React.FC<IInputProps> = ({ handleAddNewTask }) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = (task: string) => {
    handleAddNewTask(task);
    setTask("");
  };
  return (
    <Container>
      <InputNewTask
        placeholderTextColor={theme.colors.gray300}
        placeholder="Adicione uma tarefa"
        onSubmitEditing={() => handleAddTask(task)}
        onChangeText={setTask}
        value={task}
      />
      <ButtonAdd activeOpacity={0.9} onPress={() => handleAddTask(task)}>
        <AntDesign name="pluscircleo" size={20} color={theme.colors.gray100} />
      </ButtonAdd>
    </Container>
  );
};

export default NewTaskInput;
