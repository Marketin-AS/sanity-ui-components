import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'hero-3',
  title: 'Hero (fullscreen with form)',
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
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'CTAs',
      name: 'ctas',
      type: 'array',
      of: [
        {
          type: 'cta',
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare(selection) {
      const { heading } = selection
      return {
        title: 'Hero (fullscreen with form)',
        subtitle: heading,
        media: FiType,
      }
    },
  },
}
