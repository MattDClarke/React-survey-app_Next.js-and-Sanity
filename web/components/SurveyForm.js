import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { client } from '../utils/apiClient';
import { validationSchema } from '../helpers/validationSchema';
import { JOB_TYPES } from '../constants';
import styles from '../styles/SurveyForm.module.css';

export default function SurveyForm() {
  const [hasSubmitCompleted, setHasSubmitCompleted] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          jobType: '',
          yearsProgramming: '',
          yearsProgrammingReact: '',
          likes: '',
          dislikes: '',
          workshopInterest: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          client('/api/createResponse', { body: values }).then(
            (data) => {
              // console.log('here is the data', data);
              setHasSubmitCompleted(true);
              setResponseMessage('Thanks for your response!');
              resetForm();
            },
            (error) => {
              // console.error('oh no, submission failed', error);
              setSubmitting(false);
              setHasSubmitCompleted(true);
              setResponseMessage(
                'There was an error submitting your response. Try again please.'
              );
            }
          );
        }}
      >
        {({ isSubmitting }) => {
          if (isSubmitting) {
            return <div>Submitting comment…</div>;
          }
          if (hasSubmitCompleted) {
            return (
              <>
                <div>{responseMessage}</div>
              </>
            );
          }
          return (
            <Form className={styles.form}>
              <label htmlFor="jobType">
                Are you a professional programmer or a student?
              </label>
              <Field as="select" name="jobType">
                {JOB_TYPES.map((job) => (
                  <option key={job.value} value={job.value}>
                    {job.title}
                  </option>
                ))}
              </Field>
              <small>
                <ErrorMessage name="jobType" />
              </small>

              <label htmlFor="likes">What do you like about React?</label>
              <Field id="likes" name="likes" placeholder="Add your answer" />
              <small>
                <ErrorMessage name="likes" />
              </small>

              <button
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
