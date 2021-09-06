import { styled, css } from '../../stitches.config'
import { PopupButton } from '@typeform/embed-react'

const Text = styled('div', {
  fontSize: '$90',
  textAlign: 'center',
  paddingBottom: '$10',
  variants: {
    color: {
      white: {
        color: '$white500'
      },
      black: {
        color: '$black500'
      }
    }
  }
})

const SubText = styled('div', {
  fontSize: '$60',
  textAlign: 'center'
})

const HomeWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px',
  paddingTop: '200px',
  '@md': {
    paddingRight: '200px',
    paddingLeft: '200px'
  }
})

const formButton = css({
  border: 'none',
  backgroundColor: '$black500',
  fontSize: '$30',
  color: '$white500',
  borderRadius: '$2',
  height: '60px',
  marginTop: '100px',
  width: '260px',
  cursor: 'pointer'
})

const Home = () => {
  return (
    <HomeWrapper>
      <Text>Wellness in the workpace for any employee</Text>
      <SubText>Measure, predict, and analyze wellness with ease</SubText>
      <PopupButton id='epMlQXpM' className={formButton()}>
        Try one of our employee forms
      </PopupButton>
    </HomeWrapper>
  )
}

export default Home
