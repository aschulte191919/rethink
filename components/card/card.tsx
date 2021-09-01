import { styled } from '../../stitches.config'

const Card = styled('div', {
  display: 'flex',
  padding: '$6',
  margin: '$4',
  borderRadius: '$2',
  minWidth: '150px',
  maxWidth: '900px',
  backgroundColor: '#f8f6f0',

  variants: {
    hover: {
      true: {
        '&:hover': {
          boxShadow:
            '3px 3px 7px 0 rgba(0, 0, 0, 0.2), -4px -4px 9px 0 rgba(255, 255, 255, 0.55)',
          cursor: 'pointer'
        }
      },
      false: {
        '&:hover': {
          boxShadow: 'none',
          cursor: 'none'
        }
      }
    },
    direction: {
      column: {
        flexDirection: 'column'
      },
      row: { flexDirection: 'row' }
    }
  },

  defaultVariants: {
    direction: 'column'
  }
})

export default Card
