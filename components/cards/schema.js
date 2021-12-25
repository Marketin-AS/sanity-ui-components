import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'cards',
  title: 'Cards',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
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
      title: 'Columns',
      name: 'columns',
      type: 'string',
      options: [
        { title: '2', value: '2' },
        { title: '3', value: '3' },
        { title: '4', value: '4' },
      ],
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      validation: (Rule) => Rule.required().error('This field is required'),
      of: [
        {
          title: 'Card',
          name: 'card',
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
              validation: (Rule) => Rule.required().error('This field is required'),
            },
            {
              title: 'CTA',
              name: 'cta',
              type: 'cta',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'figure',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      cards: 'cards',
      columns: 'columns',
    },
    prepare(selection) {
      const { cards, columns } = selection
      return {
        title: 'Cards',
        subtitle: `${cards.length} cards | ${columns} columns`,
        media: FiType,
      }
    },
  },
}
