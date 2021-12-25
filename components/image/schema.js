import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'image',
  title: 'Image',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
    {
      title: 'Width',
      name: 'width',
      type: 'string',
      options: [
        { title: 'Fullscreen', value: 'fullscreen' },
        { title: '100%', value: '100' },
        { title: '75%', value: '75' },
        { title: '50%', value: '50' },
      ],
    },
  ],
  preview: {
    select: {
      width: 'width',
    },
    prepare(selection) {
      const { width } = selection
      return {
        title: 'Image',
        subtitle: `Width: ${width}`,
        media: FiType,
      }
    },
  },
}
