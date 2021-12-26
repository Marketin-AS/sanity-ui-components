/* eslint-disable @next/next/no-html-link-for-pages */

import { useRouter } from 'next/router'
import React from 'react'
import * as Demodata from '../../components/demodata'
import * as Components from '../../components/list'
import styles from '../../styles/app.module.scss'

export default function Demo() {
  const router = useRouter()
  const { componentName } = router.query

  if (!componentName) {
    console.error('Missing component')
    return (
      <>
        <div className={styles.topNav}>
          <a href='/'>Tilbake til oversikten</a>
          <p>
            Komponent: <b>IKKE FUNNET</b>
          </p>
        </div>
        <p>Komponenten ble ikke funnet i biblioteket</p>
      </>
    )
  }

  const ResolveComponent = Components[componentName]
  const ResolveDemodata = Demodata[`Demodata_${componentName}`]

  if (!ResolveComponent || !ResolveDemodata) {
    console.error("Can't find component or demodata")
    return (
      <>
        <div className={styles.topNav}>
          <a href='/'>Tilbake til oversikten</a>
          <p>
            Komponent: <b>IKKE FUNNET</b>
          </p>
        </div>
        <p>Komponenten ble ikke funnet i biblioteket</p>
      </>
    )
  }

  return (
    <>
      <div className={styles.topNav}>
        <a href='/'>Tilbake til oversikten</a>
        <p>
          Komponent: <b>{componentName}</b>
        </p>
      </div>
      {ResolveDemodata.map((version) => {
        return <ResolveComponent key={version.id} {...version} />
      })}
    </>
  )
}
