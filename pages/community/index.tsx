import Head from 'next/head'
import TopNavigation from '../../components/top-nav'
import {
  PageWrapper,
  ContentWrapper,
  Wrapper
} from '../../components/page-layout'
import Card from '../../components/card'

const Page = () => (
  <>
    <PageWrapper>
      <Head>
        <title>community</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContentWrapper>
        <TopNavigation />
        <main>
          <Wrapper>
            {[...Array(8)].map((e, i) => (
              <Card key={i} hover>
                <div>To: Kate</div>
                <div>From: Ann</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
              </Card>
            ))}
          </Wrapper>
        </main>
      </ContentWrapper>
    </PageWrapper>
  </>
)

export default Page
