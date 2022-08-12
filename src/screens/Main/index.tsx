import React, { useState } from "react";
import { Alert } from "react-native";
import ButtonsFilter from "../../components/ButtonsFilter";
import { ICard } from "../../components/Card";
import Header from "../../components/Header";
import NewTaskInput from "../../components/Input";
import List from "../../components/List";
import { Container, ContainerList, Divider } from "./styles";

const Main: React.FC = () => {
  const [tasks, setTasks] = useState<ICard[]>([]);

  const handleAddTask = async (task: string) => {
    if (task) {
      setTasks((prevState) => [
        ...prevState,
        { id: tasks.length + 1, text: task, done: false },
      ]);
    }
  };

  const handleRemoveTask = (task: ICard) => {
    Alert.alert("Tarefa", "Tem certeza que deseja excluir essa tarefa?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => setTasks(tasks.filter((tasks) => tasks.id !== task.id)),
      },
    ]);
  };

  const handleDoneTask = (item: ICard) => {
    const updateTask = tasks.map((task) => ({ ...task }));

    const specificItem = updateTask.find((task) => task.id === item.id);

    if (!specificItem) {
      return;
    }

    specificItem.done = !specificItem.done;

    setTasks(updateTask);
  };

  return (
    <Container>
      <Header />

      <ContainerList>
        <NewTaskInput
          handleAddNewTask={(task: string) => handleAddTask(task)}
        />

        <ButtonsFilter tasks={tasks} />

        <Divider />

        <List
          tasks={tasks}
          handleDoneTask={handleDoneTask}
          handleRemoveTask={(task) => handleRemoveTask(task)}
        />
      </ContainerList>
    </Container>
  );
};

export default Main;
