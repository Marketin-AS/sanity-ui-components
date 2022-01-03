import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'features-animated',
  title: 'Features (animated)',
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
      title: 'Steps',
      name: 'steps',
      type: 'array',
      validation: (Rule) => Rule.required().error('This field is required'),
      of: [
        {
          title: 'Step',
          name: 'step',
          type: 'object',
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
        },
      ],
    },
  ],
  preview: {
    select: {
      steps: 'steps',
    },
    prepare(selection) {
      const { steps } = selection
      return {
        title: 'Features (animated)',
        subtitle: `${steps.length} steps`,
        media: FiType,
      }
    },
  },
}
