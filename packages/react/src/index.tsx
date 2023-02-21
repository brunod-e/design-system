import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
  height: '$10',
})

export const App = () => <Button>Oi</Button>
