import Head from "next/head";
import TopNavigation from "../../../components/top-nav";
import { PageWrapper, ContentWrapper } from "../../../components/page-layout";
import EmployeeProfile from "../../../components/employee-profile";
import EmployeeSubNav from '../../../components/employee-sub-nav'

const Page = () => (
    <>
      <PageWrapper>
        <Head>
          <title>dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContentWrapper>
          <TopNavigation />
          <main>
            <EmployeeSubNav />
            <EmployeeProfile />
          </main>
        </ContentWrapper>
      </PageWrapper>
    </>
  );

export default Page;
