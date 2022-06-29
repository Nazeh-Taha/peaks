import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  titleHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 40,
    "& h1": {
      margin: "5px 0",
    },
  },
  flexBoxContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
  },
  searchResultContainer: {
    display: "grid",
    gap: 30,
    margin: "30px 0",
    "@media (max-width:900px)": {
      gap: 15,
    },
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
