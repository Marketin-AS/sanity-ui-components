import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'textWithPoints',
  title: 'Text (with points)',
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
      title: 'Points',
      name: 'points',
      type: 'array',
      validation: (Rule) => Rule.required().error('This field is required'),
      of: [
        {
          title: 'Point',
          name: 'point',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required().error('This field is required'),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      points: 'points',
    },
    prepare(selection) {
      const { points } = selection
      return {
        title: 'Text (with points)',
        subtitle: `${points.length} points`,
        media: FiType,
      }
    },
  },
}
