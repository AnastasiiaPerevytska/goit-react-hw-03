import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <label htmlFor={nameId} className={styles.label}>
          Name:
          <Field id={nameId} type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="p" />
        </label>

        <label htmlFor={numberId} className={styles.label}>
          Number:
          <Field id={numberId} type="text" name="number" className={styles.input} />
          <ErrorMessage name="number" component="p" />
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}