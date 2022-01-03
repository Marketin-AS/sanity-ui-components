import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'textSplit',
  title: 'Text (split)',
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
      title: 'Style',
      name: 'style',
      type: 'string',
      options: {
        list: [
          { title: 'Heading on left side', value: 'left' },
          { title: 'Heading on right side', value: 'right' },
        ],
      },
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
      style: 'style',
    },
    prepare(selection) {
      const { style } = selection
      return {
        title: 'Text (split)',
        subtitle: `Heading on ${style} side`,
        media: FiType,
      }
    },
  },
}
