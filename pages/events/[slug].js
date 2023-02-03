import React from 'react'
import {useRouter} from 'next/router'
import Layout from '@/components/layout'

export default function EventPage() {
    const router = useRouter()
    console.log(router)
  return (
   <Layout>
        <h1>My Event</h1>
        {router.query.slug}
        <button onClick={() => router.push('/')}>Go Back</button>
   
    </Layout>
  )
}
