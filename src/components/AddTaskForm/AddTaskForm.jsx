import TextField from "@mui/material/TextField";
import { css } from "@emotion/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTask } from "../../features/tasks/tasksSlice";

const AddTaskForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title: inputValue, complete: false, id: nanoid() }));
    setInputValue("");
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        css={css`
          margin-bottom: 40px;
          display: flex;
          gap: 30px;
        `}
      >
        <TextField
          id="standard-basic"
          label="Add Task"
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button
          variant="contained"
          type="submit"
          css={css`
            padding: 8px 25px;
            border: none;
            border-radius: 20px;
            background-color: #5d2de6;
            color: #ffffff;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
            :hover {
              background-color: #5419f5;
            }
          `}
        >
          + Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
