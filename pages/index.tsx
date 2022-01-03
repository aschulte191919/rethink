import Head from "next/head";
import Home from "../components/home";

import TopNavigation from "../components/top-nav";
import { PageWrapper, ContentWrapper } from "../components/page-layout";
import Footer from "../components/footer";
import Switch from "../components/switch";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Page = () => {
  const [admin, setAdmin] = useLocalStorage("admin", true);
  return (
    <>
      <PageWrapper>
        <Head>
          <title>rethink</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContentWrapper>
          <TopNavigation />
          <main>
            <Home />
          </main>
        </ContentWrapper>
      </PageWrapper>
      <Switch
        label={`switch to ${!admin ? "admin" : "employee"} view`}
        id="test-switch"
        onChange={() => setAdmin(!admin)}
        toggled={undefined}
      />
      <Footer />
    </>
  );
};

export default Page;
