import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavBar from "../../../components/navbar/navBar";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions, Typography } from "@mui/material";
import CustomButton from "../../../components/button/Button";
import classes from "./home.module.css";
import TaskList from "../../../components/task-list/taskList";

export default function Home() {
  const [open, setOpen] = useState(false);

   // Controlled Forms
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTaskAdded, setTaskAdded] = useState({});



  // Uncontrolled Forms (document.getElementBYId);
  // But its not a good practice
  // const titleRef = useRef(null);
  // const descriptionRef = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

      const newTask = {
        title,
        description
     }

    let taskList = JSON.parse(localStorage.getItem('tasklist')) || [];
    taskList.push(newTask);
    localStorage.setItem('tasklist', JSON.stringify(taskList));
    setTaskAdded(newTask);
    handleClose();

  }

  return (
    <>
      <NavBar />
      <TaskList isTaskAdded={isTaskAdded} />
      <div className={classes.addButton}>
        <Fab
          color="warning"
          aria-label="add"
          onClick={handleClickOpen}
          open={open}
          onClose={handleClose}
        >
          <AddIcon />
        </Fab>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent >
          <Typography variant="h5">Enter your task here!</Typography>
          <TextField
            fullWidth
            id="standard-basic"
            label="Title"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
            // inputRef={titleRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}

            // inputRef={descriptionRef}
          />
        </DialogContent>

        <DialogActions>
          <CustomButton title="Add Task " handleClick={handleAddTask} />
          <CustomButton title="Cancel" color="error" handleClick={handleClose} />
        </DialogActions>
      </Dialog>
    </>
  );
}
