
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   
      <main className="h-full">
        <Layout>
          <Banner/>
        </Layout>
      </main>
    </>
  )
}
