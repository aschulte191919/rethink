import Head from "next/head";
import TopNavigation from "../../components/top-nav";
import { PageWrapper, ContentWrapper } from "../../components/page-layout";
import EmployeeProfile from "../../components/employee-profile";
import { styled } from "../../stitches.config";

const Title = styled("h1", {
  fontSize: "30px",
  paddingTop: "10px",
  textAlign: "center",
});
const Page = () => (
  <>
    <PageWrapper>
      <Head>
        <title>wellness report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper>
        <TopNavigation />
        <main>
          <Title>my wellness</Title>
          <EmployeeProfile />
        </main>
      </ContentWrapper>
    </PageWrapper>
  </>
);

export default Page;
