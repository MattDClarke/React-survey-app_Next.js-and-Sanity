import * as yup from 'yup';
import { CODING_EXPERIENCE, JOB_TYPES, WORKSHOP_INTEREST } from '../constants';

export const validationSchema = yup.object({
  jobType: yup
    .string()
    .strict()
    .required('Answer is required')
    .test('validJob', 'Invalid job type', function (value) {
      const validJobTypes = JOB_TYPES.map((job) => job.value);
      return validJobTypes.includes(value);
    }),
  yearsProgramming: yup
    .string()
    .strict()
    .required('Answer is required')
    .test(
      'validYearsProgramming',
      'Invalid number of years programming range',
      function (value) {
        return CODING_EXPERIENCE.includes(value);
      }
    ),
  yearsProgrammingReact: yup
    .string()
    .strict()
    .required('Answer is required')
    .test(
      'validYearsProgrammingReact',
      'Invalid number of years programming React range',
      function (value) {
        return CODING_EXPERIENCE.includes(value);
      }
    ),
  likes: yup
    .string('Enter what you like about React.')
    .strict()
    .min(2, 'Answer must be at least 2 characters long')
    .max(1000, 'The maximum number of characters is 1000')
    .required('Answer is required'),
  dislikes: yup
    .string('Enter what you dislike about React.')
    .strict()
    .min(2, 'Answer must be at least 2 characters long')
    .max(1000, 'The maximum number of characters is 1000')
    .required('Answer is required'),
  workshopInterest: yup
    .string()
    .strict()
    .required('Answer is required')
    .test(
      'validWorkshopInterest',
      'Invalid workshop interest',
      function (value) {
        return WORKSHOP_INTEREST.includes(value);
      }
    ),
});
