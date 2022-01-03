import { FiLink } from 'react-icons/fi'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  fieldsets: [],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
    {
      title: 'External link',
      name: 'link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
    },
    {
      title: 'Style',
      name: 'style',
      type: 'string',
      options: {
        list: [
          { title: 'Button (primary color)', value: 'buttonPrimary' },
          { title: 'Button (secondary color)', value: 'buttonSecondary' },
          { title: 'Link (primary color)', value: 'linkPrimary' },
          { title: 'Link (secondary color)', value: 'linkSecondary' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      pageTitle: 'page.title',
      slug: 'page.slug.current',
      link: 'link',
    },
    prepare({ title, pageTitle = '', slug, link }) {
      const subtitleExtra = slug
        ? `(slug: /${slug}/)`
        : link
        ? `Link: ${link}`
        : 'Not set'
      return {
        title: `${title}`,
        subtitle: `${pageTitle} ${subtitleExtra}`,
        media: FiLink,
      }
    },
  },
}
