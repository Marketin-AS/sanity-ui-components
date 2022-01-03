import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'bannerColor',
  title: 'Banner (color)',
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
      title: 'CTAs',
      name: 'ctas',
      type: 'array',
      of: [
        {
          type: 'cta',
        },
      ],
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      options: {
        providers: ['fi', 'fa'],
        outputFormat: 'react',
      },
    },
    {
      title: 'Background',
      name: 'background',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (main)', value: 'primary' },
          { title: 'Primary (light)', value: 'primary-light' },
          { title: 'Primary (dark)', value: 'primary-dark' },
          { title: 'Secondary (main)', value: 'secondary' },
          { title: 'Secondary (light)', value: 'secondary-light' },
          { title: 'Secondary (dark)', value: 'secondary-dark' },
        ],
      },
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare(selection) {
      const { heading } = selection
      return {
        title: 'Banner (color)',
        subtitle: heading,
        media: FiType,
      }
    },
  },
}
