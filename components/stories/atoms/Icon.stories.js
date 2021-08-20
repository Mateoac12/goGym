import { Icon } from '../../atoms/Icon/Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'm',
  type: 'close'
}
