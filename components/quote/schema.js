import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Quote',
      name: 'quote',
      type: 'simpleTexteditor',
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'string',
    },
    {
      title: 'Style',
      name: 'style',
      type: 'string',
      options: [
        { title: 'Fullwidth with background', value: 'full' },
        { title: 'Outlined speech bubble', value: 'bubble' },
      ],
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Background',
      name: 'background',
      type: 'string',
      options: [
        { title: 'Primary (main)', value: 'primary' },
        { title: 'Primary (light)', value: 'primary-light' },
        { title: 'Primary (dark)', value: 'primary-dark' },
        { title: 'Secondary (main)', value: 'secondary' },
        { title: 'Secondary (light)', value: 'secondary-light' },
        { title: 'Secondary (dark)', value: 'secondary-dark' },
      ],
      hidden: ({ document }) => !document?.style == 'full',
    },
  ],
  preview: {
    select: {
      tagline: 'tagline',
    },
    prepare(selection) {
      const { tagline } = selection
      return {
        title: 'Quote',
        subtitle: tagline,
        media: FiType,
      }
    },
  },
}
