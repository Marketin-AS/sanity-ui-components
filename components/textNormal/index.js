import styles from './style.module.scss'
import PropTypes from 'prop-types'
import { BlockContent } from '../_helpers/blockContent'

function TextNormal(props) {
  const { content, width = '100%' } = props

  if (!content) {
    console.error('Missing content')
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.container} style={{ '--width': width }}>
        <BlockContent blocks={content} />
      </div>
    </div>
  )
}

TextNormal.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.string,
}

export default TextNormal
