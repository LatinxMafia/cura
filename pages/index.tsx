import Head from 'next/head'
import React from 'react'
import Feature from '../components/feature'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Stats from '../components/stats'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'
import Cta from '../components/cta'
import { CMS_NAME } from '../lib/constants'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Hero />
        <Feature />
        <Stats />
        <Testimonials />
        <Contact />
        <Cta />
      </Layout>
    </>
  )
}

export default Index
