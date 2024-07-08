import { APP_NAME } from '@/utils/constant'

import Header from '@/components/Header'

import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: `Home - ${APP_NAME}`,
  }
}

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Home</h1>
    </main>
  )
}
