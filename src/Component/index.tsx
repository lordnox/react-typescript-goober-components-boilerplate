import { styled } from 'goober'
const ComponentWrapper = styled('div')`
  background-color: greenyellow;
`

export const Component = ({ name }: { name: string }) => (
  <ComponentWrapper>Hello {name}!</ComponentWrapper>
)

export default Component
