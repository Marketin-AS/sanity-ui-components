import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'textColumns',
  title: 'Text (columns)',
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
      title: 'Columns',
      name: 'columns',
      type: 'string',
      options: {
        list: [
          { title: '2', value: '2' },
          { title: '3', value: '3' },
        ],
      },
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      title: 'Columns',
      name: 'columns',
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
            {
              title: 'Additional media',
              name: 'additionalMedia',
              type: 'string',
              options: {
                list: [
                  { title: 'Icon', value: 'icon' },
                  { title: 'Image', value: 'image' },
                ],
              },
            },
            {
              title: 'Icon',
              name: 'icon',
              type: 'iconPicker',
              options: {
                providers: ['fi', 'fa'],
                outputFormat: 'react',
              },
              hidden: ({ document }) =>
                document.additionalMedia == 'icon' ? false : true,
            },
            {
              title: 'Image',
              name: 'image',
              type: 'figure',
              hidden: ({ document }) =>
                document.additionalMedia == 'media' ? false : true,
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      columns: 'columns',
    },
    prepare(selection) {
      const { heading, columns } = selection
      return {
        title: 'Text (columns)',
        subtitle: `${columns} columns ${heading && ` | ${heading}`}`,
        media: FiType,
      }
    },
  },
}
