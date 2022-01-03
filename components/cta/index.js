import styles from './style.module.scss'
import Link from 'next/link'
import PropTypes from 'prop-types'

function Cta(props) {
  const { title, page = null, link = null, style = 'buttonPrimary' } = props

  if (page && page?.page?.slug?.current) {
    return (
      <Link href={page.page.slug.current}>
        <a className={styles[style]}>{title}</a>
      </Link>
    )
  }

  if (link) {
    return (
      <Link href={link}>
        <a className={styles[style]}>{title}</a>
      </Link>
    )
  }

  return <a className={styles[style]}>{title}</a>
}

Cta.propTypes = {
  title: PropTypes.string,
  page: PropTypes.any,
  link: PropTypes.any,
  style: PropTypes.string,
}

export default Cta
