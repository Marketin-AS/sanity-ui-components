import PropTypes from 'prop-types'
import { FaQuoteRight } from 'react-icons/fa'
import { BlockContent } from '../_helpers/blockContent'
import styles from './style.module.scss'

function CustomComponent(props) {
  const { quote, tagline, style, background } = props

  return (
    <div
      className={styles.root}
      style={
        background && style == 'full' ? { background: `var(--color-${background})` } : {}
      }>
      <div className={styles[style]}>
        {style == 'full' && (
          <div className={styles.illustration}>
            <FaQuoteRight />
          </div>
        )}

        <div className={styles.wrapper}>
          <div className={styles.quote}>
            <BlockContent blocks={quote} />
          </div>
          <p className={styles.tagline}>&mdash; {tagline}</p>
        </div>
      </div>
    </div>
  )
}

CustomComponent.propTypes = {
  quote: PropTypes.array,
  tagline: PropTypes.string,
  style: PropTypes.string,
  background: PropTypes.string,
}

export default CustomComponent
