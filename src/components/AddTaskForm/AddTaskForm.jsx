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
        <input
          type="text"
          placeholder="Add task"
          value={inputValue}
          onChange={handleChange}
          required
          css={css`
            flex: 1;
            min-width: 0;
          `}
        />
        <button
          variant="contained"
          type="submit"
          css={css`
            width: 114px;
            display: block;
            padding: 5px 15px;
            background-color: #6c5dd3;
            color: #ffffff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.3s ease, background-color 0.3s ease;

            &:hover {
              transform: translateY(-5px);
              background-color: #7b6ee3;
            }

            &:active {
              transform: translateY(-2px);
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
