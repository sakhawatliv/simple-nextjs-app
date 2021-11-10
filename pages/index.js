import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Next app</h1>
      </div>
    </Layout>
    
  )
}
