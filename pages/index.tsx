import type { NextPage } from 'next';
import styles from '@styles/Home.module.css';
import { Heading as Head } from '@components/Header/Head';
import { Footer } from '@components/Footer/Footer';
import { Container, Divider } from '@chakra-ui/react'
import { Header } from '@components/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header component={<Head title="New title"/>} />
      <main>
        <Container>
          Container
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Home
