import "./App.css";
import { css } from "@emotion/react";
import Filter from "./components/Filter/Filter";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div
      css={css`
        max-width: 700px;
        margin-left: auto;
        margin: auto;
        padding: 15px;
        padding-top: 150px;
        background-color: #202b44;
      `}
    >
      <h1
        css={css`
          color: #ffffff;
        `}
      >
        Hello, Roman
      </h1>
      <p
        css={css`
          color: #9197a3;
          margin-bottom: 20px;
        `}
      >
        Welcome back
      </p>
      <AddTaskForm />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
