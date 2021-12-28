import styles from './style.module.scss'
import PropTypes from 'prop-types'
import Image from 'next/image'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#cecece" offset="20%" />
      <stop stop-color="#b5b5b5" offset="50%" />
      <stop stop-color="#cecece" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#cecece" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

function CustomComponent(props) {
  if (!props.data) return null
  const { image, caption, width = '100%' } = props.data

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {image && (
          <div className={styles.image} style={{ width: width }}>
            <Image
              src={image?.asset?.url}
              alt={image?.alt}
              height={10}
              width={16}
              layout='responsive'
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(10, 16))}`}
            />
            {caption && <p className={styles.caption}>{caption}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

CustomComponent.propTypes = {
  image: PropTypes.object,
  caption: PropTypes.string,
  width: PropTypes.string,
}

export default CustomComponent
