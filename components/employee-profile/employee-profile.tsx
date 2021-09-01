import PolarGrid from '../polar-grid'
import EmployeeCard from '../employee-card'
import BubbleChart from '../bubble-chart'
import { Wrapper } from '../page-layout'

const employee = [
  {
    name: 'Sarah Smith',
    position: 'Software Engineer',
    wellnessScore: 100,
    src: 'https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
  }
]

const EmployeeProfile = () => {
  return (
    <Wrapper direction='column'>
      <EmployeeCard
        key={1}
        name={employee[0].name}
        position={employee[0].position}
        src={employee[0].src}
      />
      <PolarGrid />
      <BubbleChart />
    </Wrapper>
  )
}

export default EmployeeProfile
