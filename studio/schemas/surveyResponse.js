import React from 'react'

export default {
  name: 'surveyResponse',
  title: 'React Survey',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: "What's your name?",
      type: 'string',
    },
    {
      name: 'yearsProgrammingReact',
      title: 'Number of years programming using React',
      type: 'number',
    },
    {
      title: 'Are you interested in attending an in-person React workshop?',
      name: 'workshopInterest',
      type: 'string',
      options: {
        list: ['yes', 'no', 'maybe'],
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }
  ],

  preview: {
    select: {
      title: 'name',
      yearsProgrammingReact: 'yearsProgrammingReact',
      workshopInterest: 'workshopInterest',
    },
    prepare(selection) {
      const { title, yearsProgrammingReact, workshopInterest } = selection;
      const EMOJIS = {
        yes: '✔',
        no: '❌',
        maybe: '🤷‍♂️',
      }
      return {
        title: title,
        subtitle: `Years programming React: ${yearsProgrammingReact}`,
        // Remember to import React from 'react' if you are rendering React components like below
        media: <span style={{fontSize: '1.5rem'}}>{workshopInterest ? EMOJIS[workshopInterest] : '❔'}</span>
      }
    },
  },
}
