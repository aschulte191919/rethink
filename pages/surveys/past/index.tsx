import Head from "next/head";
import TopNavigation from "../../../components/top-nav";
import EmployeeSubNav from "../../../components/employee-sub-nav";
import { PageWrapper, ContentWrapper } from "../../../components/page-layout";

const Page = () => (
  <>
    <PageWrapper>
      <Head>
        <title>surveys</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <ContentWrapper>
        <TopNavigation />
        <main>
          <EmployeeSubNav />
        </main>
      </ContentWrapper>
    </PageWrapper>
  </>
);

export default Page;
