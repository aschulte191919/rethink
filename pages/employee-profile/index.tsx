import Head from 'next/head'
import TopNavigation from '../../components/top-nav'
import EmployeeProfile from '../../components/employee-profile'
import { PageWrapper, ContentWrapper } from '../../components/page-layout'

const Page = () => (
  <>
    <PageWrapper>
      <Head>
        <title>profile</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContentWrapper>
        <TopNavigation />
        <main>
          <EmployeeProfile />
        </main>
      </ContentWrapper>
    </PageWrapper>
  </>
)

export default Page
