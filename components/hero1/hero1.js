import { FiLayout } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'hero1',
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
    {
      title: 'With contact form',
      name: 'withContactForm',
      type: 'boolean',
    },
    {
      title: 'Text on image',
      name: 'textOnImage',
      type: 'boolean',
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
        media: FiLayout,
      }
    },
  },
}
