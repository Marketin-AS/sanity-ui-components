import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'texteditor',
    },
    {
      title: 'Questions',
      name: 'questions',
      type: 'array',
      validation: (Rule) => Rule.required().error('This field is required'),
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {
              title: 'Question',
              name: 'question',
              type: 'string',
              validation: (Rule) => Rule.required().error('This field is required'),
            },
            {
              title: 'Answer',
              name: 'answer',
              type: 'texteditor',
              validation: (Rule) => Rule.required().error('This field is required'),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      questions: 'questions',
    },
    prepare(selection) {
      const { questions } = selection
      return {
        title: 'FAQ',
        subtitle: `${questions.length} questions`,
        media: FiType,
      }
    },
  },
}
