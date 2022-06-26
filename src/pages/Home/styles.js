import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  topStoriesContainer: {
    display: "grid",
    gap: 30,
    margin: "30px 0",
    gridTemplateColumns: "repeat(4,  1fr)",
    "@media (max-width:780px)": {
      gridTemplateColumns: "repeat(2,  1fr)",
    },
    "@media (max-width:500px)": {
      gridTemplateColumns: "repeat(1,  1fr)",
    },
    "& div:nth-child(1)": {
      "@media (max-width:780px)": {
        gridRow: "span 1",
      },
      "@media (max-width:500px)": {
        gridColumn: "span 1",
      },
      gridColumn: "span 2",
      gridRow: "span 2",
    },
  },
  lastStoriesContainer: {
    display: "grid",
    gap: 30,
    marginBottom: 30,
    gridTemplateColumns: "repeat(3,  1fr)",
    "@media (max-width:780px)": {
      gridTemplateColumns: "repeat(2,  1fr)",
    },
    "@media (max-width:500px)": {
      gridTemplateColumns: "repeat(1,  1fr)",
    },
    "& div:nth-child(1)": {
      "@media (max-width:780px)": {
        gridColumn: "span 2",
      },
      "@media (max-width:500px)": {
        gridColumn: "span 1",
      },
    },
  },
}));
