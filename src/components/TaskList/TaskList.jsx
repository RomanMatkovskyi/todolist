import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../../features/tasks/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter.filter === "active") return !task.complete;
    if (filter.filter === "complete") return task.complete;
    return true;
  });

  return (
    <div>
      {filteredTasks &&
        filteredTasks.map((task) => {
          return (
            <div
              key={task.id}
              css={css`
                display: flex;
                gap: 10px;
                align-items: center;
                justify-content: space-between;
              `}
            >
              <Checkbox
                checked={task.complete}
                onClick={() => dispatch(toggleComplete(task.id))}
              />
              <p>{task.title}</p>
              <button
                type="button"
                onClick={() => dispatch(deleteTask(task.id))}
                css={css`
                  padding: 5px;
                  border: none;
                  background-color: transparent;
                  :hover {
                    border: none;
                  }
                `}
              >
                <ClearIcon />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TaskList;
