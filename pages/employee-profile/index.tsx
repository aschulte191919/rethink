import Head from "next/head";
import TopNavigation from "../../components/top-nav";
import EmployeeProfile from "../../components/employee-profile";
import { PageWrapper, ContentWrapper } from "../../components/page-layout";
import React, { useContext } from "react";
import { UserContext } from "../../lib/UserContext";

const HomePage = () => {
  const [user] = useContext(UserContext);
  return (
    <React.Fragment>
      {user?.loading ? (
        <div></div>
      ) : user?.issuer ? (
        <React.Fragment>
          <PageWrapper>
            <Head>
              <title>profile</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentWrapper>
              <TopNavigation />
              <main>
                <EmployeeProfile />
              </main>
            </ContentWrapper>
          </PageWrapper>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default HomePage;
