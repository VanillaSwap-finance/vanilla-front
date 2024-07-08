import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Home - VanillaSwap',
  }
}

export default function Home() {
  return <><h1>Home</h1></>
}
