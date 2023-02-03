import { FaExclamationTriangle } from 'react-icons/fa'
import React from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import Link from 'next/link'

export default function PageNotFound() {
  return (
    <Layout>
        <div className={styles.error}>
            <h1><FaExclamationTriangle /> 404</h1>
            <h4>Sorry, nothing here</h4>
            <Link href="/">Go Home</Link>
        </div>
    </Layout>
  )
}
