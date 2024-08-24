import styles from "./Contact.module.css";

export default function Contact({ contact, handleDelete }) {
  return (
    <li className={styles.contact}>
      <p className={styles.title}>{contact.name}</p>
      <p className={styles.telefon}>{contact.number}</p>
      <button type="button" className={styles.button} onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
}