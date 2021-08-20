import { Heading } from '../../atoms/Heading/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default heading',
}

export const Big = Template.bind({})
Big.args = {
  children: 'Big heading',
  color: 'white',
  size: 'lg',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary heading',
  color: 'primary',
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small heading',
  color: 'primary',
  size: 'sm',
}
