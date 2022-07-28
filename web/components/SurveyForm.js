import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { client } from '../utils/apiClient';
import { validationSchema } from '../helpers/validationSchema';
import { JOB_TYPES, CODING_EXPERIENCE, WORKSHOP_INTEREST } from '../constants';
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
            return <div>Submitting survey response…</div>;
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
                <option disabled defaultValue value="">
                  select an option
                </option>
                {JOB_TYPES.map((job) => (
                  <option key={job.value} value={job.value}>
                    {job.title}
                  </option>
                ))}
              </Field>
              <small>
                <ErrorMessage name="jobType" />
              </small>

              <label htmlFor="yearsProgramming">
                How many years have you been programming for?
              </label>
              <Field as="select" name="yearsProgramming">
                <option disabled defaultValue value="">
                  select an option
                </option>
                {CODING_EXPERIENCE.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Field>
              <small>
                <ErrorMessage name="yearsProgramming" />
              </small>

              <label htmlFor="yearsProgrammingReact">
                How many years have you been programming using React?
              </label>
              <Field as="select" name="yearsProgrammingReact">
                <option disabled defaultValue value="">
                  select an option
                </option>
                {CODING_EXPERIENCE.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Field>
              <small>
                <ErrorMessage name="yearsProgrammingReact" />
              </small>

              <label htmlFor="likes">What do you like about React?</label>
              <Field
                id="likes"
                name="likes"
                placeholder="Add your answer"
                as="textarea"
              />
              <small>
                <ErrorMessage name="likes" />
              </small>

              <label htmlFor="dislikes">What do you dislike about React?</label>
              <Field
                id="dislikes"
                name="dislikes"
                placeholder="Add your answer"
                as="textarea"
              />
              <small>
                <ErrorMessage name="dislikes" />
              </small>

              <label htmlFor="workshopInterest">
                Are you interested in attending an in-person React workshop?
              </label>
              <Field as="select" name="workshopInterest">
                {WORKSHOP_INTEREST.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Field>
              <small>
                <ErrorMessage name="workshopInterest" />
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
