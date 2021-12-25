import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'features',
  title: 'Features',
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
      title: 'Features',
      name: 'features',
      type: 'array',
      validation: (Rule) => Rule.required().error('This field is required'),
      of: [
        {
          title: 'Feature',
          name: 'feature',
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
              title: 'Icon',
              name: 'icon',
              type: 'iconPicker',
              options: {
                providers: ['fi', 'fa'],
                outputFormat: 'react',
              },
              validation: (Rule) => Rule.required().error('This field is required'),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      features: 'features',
    },
    prepare(selection) {
      const { features } = selection
      return {
        title: 'Features',
        subtitle: `${features.length} features`,
        media: FiType,
      }
    },
  },
}
