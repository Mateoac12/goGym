import { Button, TYPES } from '../../atoms/Button/Button'

export default {
  title: 'Atoms/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary Button',
  type: TYPES.primary
}

export const PrimaryWhite = Template.bind({})
PrimaryWhite.args = {
  label: 'Primary Button White',
  type: TYPES.primaryWhite
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  type: TYPES.secondary
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  label: 'Tertiary Button',
  type: TYPES.tertiary,
  isInline: true
}
