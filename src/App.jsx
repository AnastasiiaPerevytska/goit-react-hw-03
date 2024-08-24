import { useEffect, useState } from "react";
import contacts from "./contact.json";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  const getLocaleContacts = () => {
    const savedContacts = localStorage.getItem("Contacts");
    return savedContacts ? JSON.parse(savedContacts) : contacts;
  };

  const [contact, setContact] = useState(getLocaleContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("Contacts", JSON.stringify(contact));
  }, [contact]);

  const addContact = (newContact) => {
    setContact((prevContact) => [...prevContact, newContact]);
  };

  const handleDelete = (contactId) => {
    setContact((prevContact) => prevContact.filter((contact) => contact.id !== contactId));
  };

  const searchContact = contact.filter((cont) =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );

  const changeFilter = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div className="card">
        <ContactForm addContact={addContact} />
        <SearchBox changeFilter={changeFilter} filter={filter} />
      </div>
      <ContactList handleDelete={handleDelete} contact={searchContact} />
    </div>
  );
}

