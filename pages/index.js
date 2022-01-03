import styles from '../styles/app.module.scss'
import Link from 'next/link'

function Home() {
  return (
    <>
      <div className={styles.topNav}>
        <p>Sanity UI Components</p>
        <img src='/marketin-logo.png' height={40} />
      </div>
      <div className={styles.container}>
        <h2>Innledning</h2>
        <p>
          Dette komponent-biblioteket er utviklet av Marketin SEO- og webbyrå for bruk med
          Sanity IO eller andre web-applikasjoner. Benytt linkene under for å navigere til
          en demo av de forskjellige komponentene.
        </p>
        <p>Kildekoden ligger fritt til gjengelig for bruker her:</p>

        <h2>Komponenter</h2>
        <ul className={styles.links}>
          <li>
            <Link href='/demo/Hero1'>Hero 1</Link>
          </li>
          <li>
            <Link href='/demo/Hero2'>Hero 2</Link>
          </li>
          <li>
            <Link href='/demo/Hero3'>Hero 3</Link>
          </li>
          <li>
            <Link href='/demo/TextNormal'>Text normal</Link>
          </li>
          <li>
            <Link href='/demo/TextSplit'>Text split</Link>
          </li>
          <li>
            <Link href='/demo/TextColumns'>Text columns</Link>
          </li>
          <li>
            <Link href='/demo/TextWithImage'>Text with image</Link>
          </li>
          <li>
            <Link href='/demo/TextWithPoints'>Text with points</Link>
          </li>
          <li>
            <Link href='/demo/LazyImage'>Image (lazyload)</Link>
          </li>
          <li>
            <Link href='/demo/Quote'>Quote</Link>
          </li>
          <li>
            <Link href='/demo/Cards'>Cards</Link>
          </li>
          <li>
            <Link href='/demo/BannerImage'>Image banner</Link>
          </li>
          <li>
            <Link href='/demo/BannerColor'>Color banner</Link>
          </li>
          <li>
            <Link href='/demo/Faq'>FAQ</Link>
          </li>
          <li>
            <Link href='/demo/Features'>Features</Link>
          </li>
          <li>
            <Link href='/demo/FeaturesAnimated'>Animated features</Link>
          </li>
          <li>
            <Link href='/demo/Tabs'>Tabs</Link>
          </li>
          <li>
            <Link href='/demo/Logos'>Logos</Link>
          </li>
          <li>
            <Link href='/demo/Persons'>Persons</Link>
          </li>
        </ul>

        <h2>Kontaktinformasjon</h2>
        <p>
          Biblioteket er utviklet av Daniel Martinsen, utvikler og partner i Marketin SEO-
          og webbyrå. Telefon, e-post og mer informasjon om Marketin er tilgjengelig på
          <Link href='https://marketin.no'>vår nettside</Link>.
        </p>
      </div>
    </>
  )
}

export default Home
