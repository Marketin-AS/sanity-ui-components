import styles from '../styles/app.module.scss'

function Home() {
  return (
    <div className={styles.container}>
      <img src='/marketin-logo.png' width={300} />
      <h1>Sanity UI Components</h1>
      <p>
        Dette komponent-biblioteket er utviklet av Marketin SEO- og webbyrå for bruk med
        Sanity IO eller andre web-applikasjoner. Benytt linkene under for å navigere til
        en demo av de forskjellige komponentene.
      </p>
      <p>Kildekoden ligger fritt til gjengelig for bruker her:</p>

      <h2>Komponenter</h2>
      <ul className={styles.links}>
        <li>
          <a href='/demo/hero-1'>Hero 1</a>
        </li>
        <li>
          <a href='/demo/hero-2'>Hero 2</a>
        </li>
        <li>
          <a href='/demo/hero-3'>Hero 3</a>
        </li>
        <li>
          <a href='/demo/text-normal'>Text normal</a>
        </li>
        <li>
          <a href='/demo/text-split'>Text split</a>
        </li>
        <li>
          <a href='/demo/text-columns'>Text columns</a>
        </li>
        <li>
          <a href='/demo/text-with-image'>Text with image</a>
        </li>
        <li>
          <a href='/demo/text-with-points'>Text with points</a>
        </li>
        <li>
          <a href='/demo/image'>Image</a>
        </li>
        <li>
          <a href='/demo/quote'>Quote</a>
        </li>
        <li>
          <a href='/demo/cards'>Cards</a>
        </li>
        <li>
          <a href='/demo/banner-image'>Image banner</a>
        </li>
        <li>
          <a href='/demo/banner-color'>Color banner</a>
        </li>
        <li>
          <a href='/demo/faq'>FAQ</a>
        </li>
        <li>
          <a href='/demo/features'>Features</a>
        </li>
        <li>
          <a href='/demo/features-animated'>Animated features</a>
        </li>
        <li>
          <a href='/demo/tabs'>Tabs</a>
        </li>
        <li>
          <a href='/demo/logos'>Logos</a>
        </li>
        <li>
          <a href='/demo/persons'>Persons</a>
        </li>
      </ul>

      <h2>Kontaktinformasjon</h2>
      <p>
        Biblioteket er utviklet av Daniel Martinsen, utvikler og partner i Marketin SEO-
        og webbyrå. Telefon, e-post og mer informasjon om Marketin er tilgjengelig på{' '}
        <a href='https://marketin.no'>vår nettside</a>.
      </p>
    </div>
  )
}

export default Home
