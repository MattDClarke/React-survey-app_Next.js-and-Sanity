import React from 'react';

const JOB_TYPES = [
  { title: 'Full-time', value: 'fulltime' },
  { title: 'Freelance', value: 'freelance' },
  { title: 'Student', value: 'student' },
  { title: 'Hobby', value: 'hobby' },
];

const WORKSHOP_INTEREST = ['yes', 'no', 'maybe'];

export default {
  name: 'surveyResponse',
  title: 'React Survey',
  type: 'document',
  fields: [
    {
      title: 'Are you a professional programmer or a student?',
      name: 'jobType',
      type: 'string',
      options: {
        list: JOB_TYPES, // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
      validation: (Rule) =>
        Rule.required().custom((jobType) => {
          const validJobTypes = JOB_TYPES.map((job) => job.value);
          return validJobTypes.includes(jobType) ? true : 'Invalid job type';
        }),
    },
    {
      name: 'yearsProgramming',
      title: 'Number of years programming',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(2).precision(1),
    },
    {
      name: 'yearsProgrammingReact',
      title: 'Number of years programming using React',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(2).precision(1),
    },
    {
      name: 'likes',
      title: 'What do you like about React?',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(1000),
    },
    {
      name: 'dislikes',
      title: "What don't you like about React?",
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(1000),
    },
    {
      title: 'Are you interested in attending an in-person React workshop?',
      name: 'workshopInterest',
      type: 'string',
      options: {
        list: WORKSHOP_INTEREST,
        layout: 'radio', // <-- defaults to 'dropdown'
      },
      validation: (Rule) =>
        Rule.required().custom((workshopInterest) => {
          return WORKSHOP_INTEREST.includes(workshopInterest)
            ? true
            : 'Invalid workshop interest';
        }),
    },
  ],

  preview: {
    select: {
      yearsProgramming: 'yearsProgramming',
      yearsProgrammingReact: 'yearsProgrammingReact',
      jobType: 'jobType',
      workshopInterest: 'workshopInterest',
    },
    prepare(selection) {
      const {
        yearsProgramming,
        yearsProgrammingReact,
        jobType,
        workshopInterest,
      } = selection;
      const jobName =
        jobType &&
        JOB_TYPES.flatMap((option) =>
          option.value === jobType ? [option.title] : []
        );
      const EMOJIS = {
        yes: '✔',
        no: '❌',
        maybe: '🤷‍♂️',
      };
      return {
        title: `${jobName} developer`,
        subtitle: `Years programming: ${yearsProgramming}. Years programming React: ${yearsProgrammingReact}`,
        // Remember to import React from 'react' if you are rendering React components like below
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {workshopInterest ? EMOJIS[workshopInterest] : '❔'}
          </span>
        ),
      };
    },
  },
};
