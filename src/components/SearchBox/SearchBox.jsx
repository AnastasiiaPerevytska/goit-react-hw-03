import styles from "./SearchBox.module.css";

export default function SearchBox({ changeFilter, filter }) {
  const handleChange = (event) => {
    changeFilter(event.target.value);
  };

  return (
    <div className={styles.form}>
      <p>Find contact by name:</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}