import Head from "next/head";
import TopNavigation from "../../../components/top-nav";
import EmployeeDashboard from "../../../components/employee-dashboard";
import EmployeeSubNav from "../../../components/employee-sub-nav";
import { PageWrapper, ContentWrapper } from "../../../components/page-layout";

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
          <EmployeeDashboard />
        </main>
      </ContentWrapper>
    </PageWrapper>
  </>
);

export default Page;
