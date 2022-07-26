import * as yup from 'yup';

export const validationSchema = yup.object({
    likes: yup
    .string('Enter what you like about React.')
    .strict()
    .min(2, 'Answer must be at least 2 characters long')
    .max(50, 'The maximum number of characters is 1000')
    .required('Answer is required'),
});
