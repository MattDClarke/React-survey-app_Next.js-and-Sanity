// import React from "react";

// const JOB_TYPES = [
//   {title: 'Full-time', value: 'fulltime'},
//   {title: 'Freelance', value: 'freelance'},
//   {title: 'Student', value: 'student'},
//   {title: 'Hobby', value: 'hobby'}
// ];

export default {
  name: "surveyResponse",
  title: "React Survey",
  type: "document",
  fields: [
    // {
    //   title: 'Are you a professional programmer or a student?',
    //   name: 'jobType',
    //   type: 'string',
    //   options: {
    //     list: JOB_TYPES, // <-- predefined values
    //     layout: 'radio' // <-- defaults to 'dropdown'
    //   },
    // },
    // {
    //   name: 'yearsProgramming',
    //   title: 'Number of years programming',
    //   type: 'number',
    // },
    // {
    //   name: 'yearsProgrammingReact',
    //   title: 'Number of years programming using React',
    //   type: 'number',
    // },
    {
      name: "likes",
      title: "What do you like about React?",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(1000),
    },
    // {
    //   name: 'dislikes',
    //   title: "What don't you like about React?",
    //   type: 'string',
    // },
    // {
    //   title: 'Are you interested in attending an in-person React workshop?',
    //   name: 'workshopInterest',
    //   type: 'string',
    //   options: {
    //     list: ['yes', 'no', 'maybe'],
    //     layout: 'radio' // <-- defaults to 'dropdown'
    //   }
    // }
  ],

  // preview: {
  //   select: {
  //     yearsProgramming: 'yearsProgramming',
  //     yearsProgrammingReact: 'yearsProgrammingReact',
  //     jobType: 'jobType',
  //     workshopInterest: 'workshopInterest',
  //   },
  //   prepare(selection) {
  //     const { yearsProgramming, yearsProgrammingReact, jobType, workshopInterest } = selection;
  //     const jobName = jobType && JOB_TYPES.flatMap(option => option.value === jobType ? [option.title] : [])
  //     const EMOJIS = {
  //       yes: '✔',
  //       no: '❌',
  //       maybe: '🤷‍♂️',
  //     }
  //     return {
  //       title: `${jobName} developer`,
  //       subtitle: `Years programming: ${yearsProgramming}. Years programming React: ${yearsProgrammingReact}`,
  //       // Remember to import React from 'react' if you are rendering React components like below
  //       media: <span style={{fontSize: '1.5rem'}}>{workshopInterest ? EMOJIS[workshopInterest] : '❔'}</span>
  //     }
  //   },
  // },
};
