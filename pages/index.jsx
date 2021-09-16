import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/pedir')
  }, [])

  return (
    <div className="homePage">
      <Head>
        <title>Moinho Restaurante</title>
        <meta
          name="description"
          content="Pedidos de marmita - Moinho Restaurante"
        />
      </Head>
    </div>
  )
}
