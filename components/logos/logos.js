import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'logos',
  title: 'Logos',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Logos',
      name: 'logos',
      type: 'array',
      validation: (Rule) => Rule.required().error('This field is required'),
      of: [
        {
          title: 'Logo',
          name: 'logo',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required().error('This field is required'),
            },
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'figure',
              validation: (Rule) => Rule.required().error('This field is required'),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      logos: 'logos',
    },
    prepare(selection) {
      const { logos } = selection
      return {
        title: 'Logos',
        subtitle: `${logos.length} logos`,
        media: FiType,
      }
    },
  },
}
