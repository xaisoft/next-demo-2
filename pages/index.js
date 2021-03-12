import Head from 'next/head'
import InformationCard from '../components/InformationCard'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  console.log(data.Data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <InformationCard info={data.Data.OfficialCaseName} />
    </div>
  )
}

export async function getStaticProps() {

    const response = await fetch('https://apiwww.simpluris.com/api/case?caseUrl=qaclient.simpluris.com&lang=us');

    const data = await response.json();

    return {
      props: {
        data
      }
    }
}


