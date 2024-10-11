import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const links = [{
        id: 1,
        title: 'Home',
        href: '/'
    },
    {
        id: 2,
        title: 'Portfolio',
        href: '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        href: '/blog'
    },
    {
        id: 4,
        title: 'About',
        href: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        href: '/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        href: '/dashboard'
    },
]
  return (
    <div>
        <Link href='/'>METAN</Link>
        <div>
            {links.map((link) => {
                return (<Link key={link.id} href={link.href}>{link.title}</Link>)
            })}
        </div>
    </div>
  )
}

export default Navbar