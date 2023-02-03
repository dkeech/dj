import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link legacyBehavior href="/">
                <a>Header Copy</a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link legacyBehavior href="/events">
                            <a>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    
    </header>
  )
}
