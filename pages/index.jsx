import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div className="homePage">
      <Head>
        <title>Pedidos Moinho</title>
        <meta
          name="description"
          content="Pedidos de marmita - Moinho Restaurante"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
