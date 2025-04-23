import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../features/filter/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div
      css={css`
        margin-bottom: 40px;
        display: flex;
        gap: 40px;
      `}
    >
      <label
        css={css`
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding-left: 24px;

          &::before {
            content: "All";
            color: #ffffff;
            position: absolute;
            left: 0;
            top: 0;
          }
        `}
      >
        <input
          type="radio"
          css={css`
            opacity: 0;
            width: 0;
            height: 0;
          `}
          name="filter"
          defaultChecked
          onClick={() => dispatch(setFilter("all"))}
        />
      </label>
      <label
        css={css`
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding-left: 24px;

          &::before {
            content: "Active";
            color: #ffffff;
            position: absolute;
            left: 0;
            top: 0;
          }
        `}
      >
        <input
          type="radio"
          css={css`
            opacity: 0;
            width: 0;
            height: 0;
          `}
          name="filter"
          onClick={() => dispatch(setFilter("active"))}
        />
      </label>
      <label
        css={css`
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding-left: 24px;

          &::before {
            content: "Complete";
            color: #ffffff;
            position: absolute;
            left: 0;
            top: 0;
          }
        `}
      >
        <input
          type="radio"
          css={css`
            opacity: 0;
            width: 0;
            height: 0;
          `}
          name="filter"
          onClick={() => dispatch(setFilter("complete"))}
        />
      </label>
    </div>
  );
};

export default Filter;
