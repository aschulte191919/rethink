import Head from 'next/head'
import Link from 'next/link'
import { styled } from '../../stitches.config'
import EmployeeCard from '../../components/employee-card'
import TopNavigation from '../../components/top-nav'
import {
  PageWrapper,
  ContentWrapper,
  Wrapper
} from '../../components/page-layout'

const Title = styled('h1', {
  fontSize: '30px',
  paddingTop: '10px',
  textAlign: 'center'
})

export interface IEmployee {
  hover?: boolean
  name: string
  position: string
  wellnessScore?: number
  src: string
}

const data: Array<IEmployee> = [
  {
    name: 'Sarah Smith',
    position: 'Software Engineer',
    wellnessScore: 100,
    src: 'https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
  },
  {
    name: 'Amy Smith',
    position: 'Product Manager',
    wellnessScore: 30,
    src: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
  },
  {
    name: 'Mike Smith',
    position: 'Senior Analyst',
    wellnessScore: 50,
    src: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
  },
  {
    name: 'Taylor Williams',
    position: 'Senior Manager',
    wellnessScore: 50,
    src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80'
  },
  {
    name: 'Oliver Scorr',
    position: 'UI/UX Lead',
    wellnessScore: 50,
    src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80'
  },
  {
    name: 'Scott Phillips',
    position: 'Senior Manager',
    wellnessScore: 50,
    src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
]

const Page = () => {
  return (
    <>
      <PageWrapper>
        <Head>
          <title>team</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <ContentWrapper>
          <TopNavigation />
          <main>
            <Title>team</Title>
            <Wrapper>
              {data.map((employee, index) => (
                <Link key={index} href='/employee-profile' passHref>
                  <a>
                    <EmployeeCard
                      hover
                      name={employee.name}
                      position={employee.position}
                      src={employee.src}
                    />
                  </a>
                </Link>
              ))}
            </Wrapper>
          </main>
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export default Page
