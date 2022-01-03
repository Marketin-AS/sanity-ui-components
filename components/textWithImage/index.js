import Image from 'next/image'
import PropTypes from 'prop-types'
import Cta from '../cta'
import { BlockContent } from '../_helpers/blockContent'
import styles from './style.module.scss'
// import { urlForImage } from '../../lib/sanity'

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

function TextWithImage(props) {
  const { content, image, style = 'left', ctas } = props

  if (!content) {
    console.error('Missing content')
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles[`image-${style}`]}>
          {image && (
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
              width={16}
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(10, 16))}`}
            />
          )}
        </div>
        <div className={styles.content}>
          <BlockContent blocks={content} />
          <div className={styles.ctas}>
            {ctas?.map((cta) => {
              return <Cta key={cta._key} {...cta} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

TextWithImage.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.array,
  style: PropTypes.string,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default TextWithImage
