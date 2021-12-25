import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'text-with-image',
  title: 'Text (with image)',
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
      title: 'Style',
      name: 'style',
      type: 'string',
      options: [
        { title: 'Image on left side', value: 'left' },
        { title: 'Image on right side', value: 'right' },
      ],
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
        title: 'Text (with image)',
        subtitle: `Image on ${style} side`,
        media: FiType,
      }
    },
  },
}
