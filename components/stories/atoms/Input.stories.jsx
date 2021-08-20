import { Input } from '../../atoms/Input/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const Email = Template.bind({})
Email.args = {
  label: 'Email:',
  type: 'email',
  placeholder: 'voyalgym@gmail.com',
}

export const Password = Template.bind({})
Password.args = {
  label: 'Contraseña:',
  type: 'password',
  placeholder: '********',
}

export const FullName = Template.bind({})
FullName.args = {
  label: 'Nombre y apellido:',
  type: 'text',
  placeholder: 'ej. Leonel Messi',
}

export const Big = Template.bind({})
Big.args = {
  type: 'number',
  placeholder: 'ej. #1234',
  isBig: true,
}
