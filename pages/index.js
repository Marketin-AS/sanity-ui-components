import styles from '../styles/app.module.scss'

function Home() {
  return (
    <>
      <div className={styles.topNav}>
        <p>Sanity UI Components</p>>
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
            <a href='/demo/Hero1'>Hero 1</a>
          </li>
          <li>
            <a href='/demo/Hero2'>Hero 2</a>
          </li>
          <li>
            <a href='/demo/Hero3'>Hero 3</a>
          </li>
          <li>
            <a href='/demo/TextNormal'>Text normal</a>
          </li>
          <li>
            <a href='/demo/TextSplit'>Text split</a>
          </li>
          <li>
            <a href='/demo/TextColumns'>Text columns</a>
          </li>
          <li>
            <a href='/demo/TextWithImage'>Text with image</a>
          </li>
          <li>
            <a href='/demo/TextWithPoints'>Text with points</a>
          </li>
          <li>
            <a href='/demo/Image'>Image</a>
          </li>
          <li>
            <a href='/demo/Quote'>Quote</a>
          </li>
          <li>
            <a href='/demo/Cards'>Cards</a>
          </li>
          <li>
            <a href='/demo/BannerImage'>Image banner</a>
          </li>
          <li>
            <a href='/demo/BannerColor'>Color banner</a>
          </li>
          <li>
            <a href='/demo/Faq'>FAQ</a>
          </li>
          <li>
            <a href='/demo/Features'>Features</a>
          </li>
          <li>
            <a href='/demo/FeaturesAnimated'>Animated features</a>
          </li>
          <li>
            <a href='/demo/Tabs'>Tabs</a>
          </li>
          <li>
            <a href='/demo/Logos'>Logos</a>
          </li>
          <li>
            <a href='/demo/Persons'>Persons</a>
          </li>
        </ul>

        <h2>Kontaktinformasjon</h2>
        <p>
          Biblioteket er utviklet av Daniel Martinsen, utvikler og partner i Marketin SEO-
          og webbyrå. Telefon, e-post og mer informasjon om Marketin er tilgjengelig på{' '}
          <a href='https://marketin.no'>vår nettside</a>.
        </p>
      </div>
    </>
  )
}

export default Home
