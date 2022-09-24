import React from 'react'
import NavBar from './navbar'


interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }:ILayoutProps) {
  return (
    <>
        <NavBar />
        <main className="bg-blue-50">
            {children}
        </main>
    </>
  )
}
