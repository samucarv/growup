import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sistema de Caixa - GrowUp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo a <font color="#716147">Grow Up!</font>
        </h1>

        <hr />

        <Image src="/gup.jpg" alt="Logo" width={200} height={200} />
      
      </main>

      <footer className={styles.footer}>
 
          Powered by Samuel bueno{' '}
          
      
      </footer>
    </div>
  )
}
