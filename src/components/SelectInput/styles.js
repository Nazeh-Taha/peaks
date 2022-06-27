import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  selectInputContainer: {
    "& select": {
      background: `url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat`,
      backgroundPosition: "calc(100% - 0.75rem) center !important",
      "-moz-appearance": "none !important",
      "-webkit-appearance": "none !important",
      appearance: "none !important",
      padding: 10,
      border: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
      width: "100%",
      outline: "none",
      minWidth: 300,
    },
  },
}));
