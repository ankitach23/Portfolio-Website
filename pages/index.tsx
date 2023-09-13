import React from 'react'
import {Navbar}  from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/footer'
import Layout from '@/components/Layout'
import Head from 'next/head'
export default function index() {
  return (
    
    <Layout>
    <div suppressHydrationWarning={true} className='font-sans  bg-gradient-to-l from-gray-100 to-gray-100 h-full'> 
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
    </Layout>
  )
}


