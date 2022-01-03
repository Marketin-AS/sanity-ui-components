import styles from './style.module.scss'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
// import { urlForImage } from '../../lib/sanity'

function Persons(props) {
  const { heading, columns, persons } = props

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}

        <div className={styles.persons}>
          {persons.map((person) => (
            <Link href={person.slug.current} key={person._id} passHref>
              <a className={styles.person}>
                <div className={styles.image}>
                  <Image
                    src={
                      person.image.asset.url
                        ? person.image.asset.url
                        : typeof urlForImage == 'function'
                        ? urlForImage(person.image).url()
                        : ''
                    }
                    alt={person.image.alt}
                    height={180}
                    width={180}
                    objectFit='cover'
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{person.name}</h3>
                  <p className={styles.title}>{person.title}</p>
                  <p className={styles.contact}>
                    <a href={`tel:${person.phone}`}>{person.phone}</a> /{' '}
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

Persons.propTypes = {
  heading: PropTypes.string,
  columns: PropTypes.number,
  persons: PropTypes.array,
}

export default Persons
