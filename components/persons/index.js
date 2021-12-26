import styles from './style.module.scss'
import PropTypes from 'prop-types'

function Persons(props) {
  if (!props.data) return null
  const {} = props.data

  return (
    <div className={styles.root}>
      <div className={styles.container}></div>
    </div>
  )
}

Persons.propTypes = {}

export default Persons
