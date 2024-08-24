import Contact from "../Contact/Contact";

export default function ContactList({ contact, handleDelete }) {
  return (
    <ul>
      {contact.map((contact) => (
        <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}