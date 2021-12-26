import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'

function RenderBlockContent(props) {
  const { blocks } = props

  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  return <BlockContent blocks={blocks} />
}

RenderBlockContent.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
}

export default RenderBlockContent
