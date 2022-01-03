import styles from './style.module.scss'
import PropTypes from 'prop-types'

function CustomComponent(props) {
  const {} = props

  return (
    <div className={styles.root}>
      <div className={styles.container}></div>
    </div>
  )
}

CustomComponent.propTypes = {}

export default CustomComponent
