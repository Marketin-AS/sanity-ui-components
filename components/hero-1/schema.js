import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'hero-1',
  title: 'Hero (just heading and image)',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'texteditor',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
      validation: (Rule) => Rule.required().error('This field is required'),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare(selection) {
      const { heading } = selection
      return {
        title: 'Hero (just heading and image)',
        subtitle: heading,
        media: FiType,
      }
    },
  },
}
