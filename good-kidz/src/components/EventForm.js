import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EventForm = () => {
  const initialValues = {
    eventName: '',
    date: '',
    description: ''
  };

  const validationSchema = Yup.object({
    eventName: Yup.string().required('Required'),
    date: Yup.date().required('Required'),
    description: Yup.string().required('Required')
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post('/api/events', values); // Ajusta esta URL a tu API real
      resetForm();
      alert('Event created successfully!');
    } catch (error) {
      console.error('Error creating event:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="eventName">Event Name</label>
            <Field type="text" name="eventName" />
            <ErrorMessage name="eventName" component="div" />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="div" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field as="textarea" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>Create Event</button>
        </Form>
      )}
    </Formik>
  );
};

export default EventForm;
