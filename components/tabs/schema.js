import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'tabs',
  title: 'Tabs',
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
      title: 'Tabs',
      name: 'tabs',
      type: 'array',
      validation: (Rule) => Rule.required().error('This field is required'),
      of: [
        {
          title: 'Item',
          name: 'item',
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
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      tabs: 'tabs',
    },
    prepare(selection) {
      const { tabs } = selection
      return {
        title: 'Tabs',
        subtitle: `${tabs.length} tabs`,
        media: FiType,
      }
    },
  },
}
