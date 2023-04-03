import React, { useEffect, useState } from "react";
import TaskCard from "../task-card/taskCard";
import { Box } from "@mui/material";

export default function TaskList(props) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTaskList();
  }, [props.isTaskAdded]);

  const getTaskList = () => {
    const tasks = JSON.parse(localStorage.getItem("tasklist"));
    setTaskList(tasks);
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="20px"
      margin="20px"
    >
      {taskList.map((task) => {
        return <TaskCard data={task} />;
      })}
    </Box>
  );
}
