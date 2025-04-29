import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/filter/filterSlice";

const Filter = () => {
  const currentFilter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <div
      css={css`
        margin-bottom: 40px;
        display: flex;
        gap: 40px;
        justify-content: center;
        align-items: center;
      `}
    >
      {["all", "active", "complete"].map((filter) => (
        <label
          key={filter}
          css={css`
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 8px 16px;
            background-color: #2c2c3a;
            border-radius: 8px;
            position: relative;
            color: #ffffff;
            font-weight: 500;
            font-size: 16px;
            transition: background-color 0.3s;

            &:hover {
              background-color: #6c5dd3;
            }

            input {
              opacity: 0;
              position: absolute;
              width: 0;
              height: 0;
            }

            input:checked + span {
              color: #6c5dd3;
              font-weight: 700;
            }
          `}
        >
          <input
            type="radio"
            name="filter"
            defaultChecked={filter === currentFilter}
            onClick={() => dispatch(setFilter(filter))}
          />
          <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
        </label>
      ))}
    </div>
  );
};

export default Filter;
