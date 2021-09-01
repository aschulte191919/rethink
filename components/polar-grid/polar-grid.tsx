import {
  Radar,
  RadarChart,
  PolarGrid as Polar,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    subject: 'Physical',
    A: 120,
    fullMark: 150
  },
  {
    subject: 'Mental',
    A: 98,
    fullMark: 150
  },
  {
    subject: 'Spiritual',
    A: 86,
    fullMark: 150
  },
  {
    subject: 'Environmental',
    A: 99,
    fullMark: 150
  },
  {
    subject: 'Social',
    A: 85,
    fullMark: 150
  },
  {
    subject: 'Intellectual',
    A: 65,
    fullMark: 150
  }
]

const PolarGrid = () => {
  return (
    <ResponsiveContainer width={500} height={300}>
      <RadarChart
        cx={250}
        cy={125}
        outerRadius={100}
        width={100}
        height={200}
        data={data}
      >
        <Polar />
        <PolarAngleAxis dataKey='subject' />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name='Mike'
          dataKey='A'
          stroke='#511442'
          fill='#511442'
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default PolarGrid
