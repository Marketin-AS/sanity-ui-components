import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'text-normal',
  title: 'Text (normal)',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'texteditor',
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Width',
      name: 'width',
      type: 'string',
      options: [
        { title: '100%', value: '100' },
        { title: '75%', value: '75' },
        { title: '50%', value: '50' },
      ],
      validation: (Rule) => Rule.required().error('This field is required'),
    },
  ],
  preview: {
    select: {
      width: 'width',
    },
    prepare(selection) {
      const { width } = selection
      return {
        title: 'Text (normal)',
        subtitle: `Width: ${width} %`,
        media: FiType,
      }
    },
  },
}
