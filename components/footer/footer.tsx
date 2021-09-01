import Image from 'next/image'
import { styled } from '@stitches/react'
import FooterImage from '../../assets/images/footer.png'

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
  bottom: -50,
  zIndex: -1
})

const Footer = () => {
  return (
    <Container>
      <Image objectFit='cover' alt='plants' src={FooterImage} />
    </Container>
  )
}

export default Footer
