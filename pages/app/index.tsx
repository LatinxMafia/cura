import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import NavBar from '../../components/navbar'
import Container from '../../components/container'
import { CMS_NAME } from '../../lib/constants'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <NavBar />
        <Container>
          <div className="py-10">
            <header>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                  Dashboard
                </h1>
              </div>
            </header>
            <main>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {/* <!-- Replace with your content --> */}
                <div className="px-4 py-8 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
                {/* <!-- /End replace --> */}
              </div>
            </main>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index
