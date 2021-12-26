import styles from './style.module.scss'
import PropTypes from 'prop-types'
import RenderBlockContent from '../../lib/BlockContent'

function TextNormal(props) {
  if (!props.data) return null
  const { content, width = '100' } = props.data

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div style={{ margin: '0 auto', width: `${width}%` }}>
          <RenderBlockContent blocks={content} />
        </div>
      </div>
    </div>
  )
}

TextNormal.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.string,
}

export default TextNormal
