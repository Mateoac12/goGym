import { Avatar } from "../../atoms/Avatar/Avatar";
import img from '../../assets/avatars/user.png'

export default {
  title: 'Atoms/Avatar',
  component: Avatar
}

const Template = (args) => <Avatar {...args} />

export const SmallUser = Template.bind({})
SmallUser.args = {
  src: img,
  alt: 'user',
  size: 'sm',
  radius: 'xl'
}

export const BigUser = Template.bind({})
BigUser.args = {
  src: img,
  alt: 'user',
  size: 'xl',
  radius: 'xl'
}