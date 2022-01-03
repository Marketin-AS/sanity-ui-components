import { FiUsers } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'persons',
  title: 'Persons',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Columns',
      name: 'columns',
      type: 'string',
      options: {
        list: [
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
        ],
      },
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Persons',
      name: 'persons',
      type: 'array',
      validation: (Rule) => Rule.required().error('This field is required'),
      of: [
        {
          name: 'person',
          title: 'Person',
          type: 'reference',
          to: { type: 'employee' },
        },
      ],
    },
  ],
  preview: {
    select: {
      persons: 'persons',
    },
    prepare(selection) {
      const { persons } = selection
      return {
        title: 'Persons',
        subtitle: `${persons.length} selected persons`,
        media: FiUsers,
      }
    },
  },
}
