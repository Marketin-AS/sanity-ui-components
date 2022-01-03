import Image from 'next/image'
import PropTypes from 'prop-types'
// import { urlForImage } from '../../lib/sanity'
import { BlockContent } from '../_helpers/blockContent'
import styles from './style.module.scss'

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

function Hero1(props) {
  const { heading, content, image, textOnImage, withContactForm } = props

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={textOnImage ? styles.contentOnImage : styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          {content && <BlockContent blocks={content} />}
        </div>
        <Image
          src={
            image.asset.url
              ? image.asset.url
              : typeof urlForImage == 'function'
              ? urlForImage(image).url()
              : ''
          }
          alt={image?.alt}
          height={10}
          width={20}
          objectFit='cover'
          priority={true}
          layout='responsive'
          className={styles.image}
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(10, 16))}`}
        />
      </div>
    </div>
  )
}

Hero1.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.array,
  image: PropTypes.object,
  textOnImage: PropTypes.bool,
  withContactForm: PropTypes.bool,
}

export default Hero1
