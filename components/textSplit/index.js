import styles from './style.module.scss'
import PropTypes from 'prop-types'
import Cta from '../cta'
import { BlockContent } from '../_helpers/blockContent'

function TextSplit(props) {
  const { heading, content, style = 'left', ctas } = props

  if (!content) {
    console.error('Missing content')
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles[`heading-${style}`]}>
          <h2>{heading}</h2>
          <div
            className={styles.ctas}
            style={{ justifyContent: style == 'right' ? 'flex-end' : 'flex-start' }}>
            {ctas?.map((cta) => {
              return <Cta key={cta._key} {...cta} />
            })}
          </div>
        </div>
        <div className={styles.content}>
          <BlockContent blocks={content} />
        </div>
      </div>
    </div>
  )
}

TextSplit.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.string,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default TextSplit
