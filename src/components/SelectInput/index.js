import { useStyles } from "./styles";

function SelectInput({ selectValue, handleChangeSelect }) {
  const classes = useStyles();
  const list = [
    { value: "newest", title: "Newest first" },
    { value: "oldest", title: "Oldest first" },
    { value: "relevance", title: "Most Popular" },
  ];

  return (
    <div className={classes.selectInputContainer}>
      <select value={selectValue} onChange={handleChangeSelect}>
        {list.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}
export default SelectInput;
