import Head from "next/head";
import Image from "next/image";
import TopNavigation from "../../components/top-nav";
import {
  PageWrapper,
  ContentWrapper,
  Wrapper,
} from "../../components/page-layout";
import { styled } from "../../stitches.config";

const Title = styled("h1", {
  fontSize: "30px",
  paddingTop: "10px",
});

const Text = styled("div", {
  fontSize: "20px",
  flex: "1 1 0",
  "@md": {
    paddingRight: "$9",
    paddingLeft: "$9",
  },
});

const Container = styled("div", {
  display: "flex",
  padding: "5rem",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "@md": { flexDirection: "row" },
  "@sm": { marginRight: "$12", marginLeft: "$12" },
});

const src = [
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1574740637579-9ca0a610e491?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbGxhYm9yYXRpb258ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
];
const Page = () => (
  <>
    <PageWrapper>
      <Head>
        <title>how it works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper>
        <TopNavigation />
        <main>
          <Wrapper direction="column">
            <Title>how it works</Title>
            <Container>
              <Text>
                <strong>
                  Remote work is here to stay. So how do we keep employees well
                  when we dont see them every day?
                </strong>
                <br />
                <br />
                According to recent studies at Oxford, employee happiness
                increases productivity by 15%. Rethink gives you a tool to
                quantify and improve employee wellness and gives employees a
                voice.
              </Text>
              <div>
                <Image
                  width={400}
                  height={300}
                  objectFit="cover"
                  alt="Headshot"
                  src={src[0]}
                />
              </div>
            </Container>
            <Container>
              <div>
                <Image
                  width={400}
                  height={300}
                  objectFit="cover"
                  alt="Headshot"
                  src={src[1]}
                />
              </div>
              <Text>
                Rethink uses predictive analytics and machine learning to help
                your employees understand when they might need a day off or
                reach out to friends.
              </Text>
            </Container>
            <Container>
              <Text>
                By evaluating employee surveys, Rethink analyzes wellness
                metrics with machine learning to predict burnout, provide
                personalized steps to improve wellness, and provide data to
                allow for more voices to be heard.
              </Text>
              <div>
                <Image
                  width={430}
                  height={300}
                  objectFit="cover"
                  alt="Headshot"
                  src={src[2]}
                />
              </div>
            </Container>
          </Wrapper>
        </main>
      </ContentWrapper>
    </PageWrapper>
  </>
);

export default Page;
