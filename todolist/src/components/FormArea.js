import { Fab, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

const FormArea = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function clickHandler() {
    addNote(note);
    setNote({ title: "", content: "" });
  }

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  }
  console.log(note);
  return (
    <>
      <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
        <form>
          <TextField
            onChange={changeHandler}
            name="title"
            value={note.title}
            label="Title"
            fullWidth
            autoComplete="off"
          />
          <TextField
            onChange={changeHandler}
            name="content"
            value={note.content}
            label="Content"
            fullWidth
            autoComplete="off"
            multiline
            rows={4}
          />
          <Fab onClick={clickHandler} style={{ margin: "20px 0" }}>
            <AddIcon />
          </Fab>
        </form>
      </Paper>
    </>
  );
};

export default FormArea;
