import { styled } from '../../stitches.config'
import Image from 'next/image'
import Emoji from '../emoji'
import Card from '../card'
import { IEmployee } from '../../pages/team'

const Name = styled('h2', {
  fontSize: '20px'
})

const SubText = styled('div', {
  fontSize: '14px',
  color: 'gray'
})

// const Emotions = () => (
//   <div style={{ display: 'flex' }}>
//     <Emoji symbol='😡' />
//     <Emoji symbol='😩' />
//     <Emoji symbol='😳' />
//     <Emoji symbol='😐' />
//     <Emoji symbol='😀' label='value' />
//   </div>
// )

const EmployeeCard = (props: IEmployee) => {
  const { name, position, src, hover } = props
  return (
    <Card hover={hover}>
      <Image
        width={320}
        height={250}
        objectFit='cover'
        alt='Headshot'
        src={src}
      />
      <Name>{name}</Name>
      <SubText>{position}</SubText>
    </Card>
  )
}

export default EmployeeCard
