import { createPortableTextComponent } from 'next-sanity'
// import { sanityConfig } from '../../lib/sanity.server'

// Serializers
import EmbedHTML from './serializers/embedHTML'

export const BlockContent = createPortableTextComponent({
  // ...sanityConfig,
  serializers: {
    types: {
      embedHTML: EmbedHTML,
    },
    marks: {
      internalLink: ({ mark, children }) => {
        const { slug = {} } = mark
        const href = slug.current == '/' ? '/' : `/${slug.current}`
        return <a href={href}>{children}</a>
      },
      link: ({ mark, children }) => {
        const { blank, href } = mark
        return blank ? (
          <a href={href} target='_blank' rel='noopener noreferrer'>
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        )
      },
    },
  },
})
