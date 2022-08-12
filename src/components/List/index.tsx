import React from "react";
import { FlatList, View } from "react-native";
import Card, { ICard } from "../Card";
import NotFoundTask from "../NotFoundTask";

interface IListProps {
  tasks: ICard[];
  handleDoneTask: (item: ICard) => void;
  handleRemoveTask: (item: ICard) => void;
}

const List: React.FC<IListProps> = ({
  tasks,
  handleDoneTask,
  handleRemoveTask,
}) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Card
          item={item}
          handleSelectTaskDone={() => handleDoneTask(item)}
          handleRemoveTask={() => handleRemoveTask(item)}
        />
      )}
      ListEmptyComponent={NotFoundTask}
    />
  );
};

export default List;
