import { FiType } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'component-name',
  title: 'Component Name',
  type: 'object',
  fieldsets: [],
  fields: [],
  preview: {
    select: {},
    prepare(selection) {
      const {} = selection
      return {
        title: '',
        subtitle: '',
        media: FiType,
      }
    },
  },
}
