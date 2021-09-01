import Head from 'next/head'
import Home from '../components/home'

import TopNavigation from '../components/top-nav'
import { PageWrapper, ContentWrapper } from '../components/page-layout'
import Footer from '../components/footer'

const Page = () => (
  <>
    <PageWrapper>
      <Head>
        <title>rethink</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContentWrapper>
        <TopNavigation />
        <main>
          <Home />
        </main>
      </ContentWrapper>
    </PageWrapper>
    <Footer />
  </>
)

export default Page
