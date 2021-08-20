import PropTypes from 'prop-types'
import { FieldContainer, Label, InputBox } from './styles'

const TYPES = {
  text: 'text',
  email: 'email',
  password: 'password',
  number: 'number'
}

export const Input = ({ label, type, placeholder, isBig = false }) => {
  return (
    <FieldContainer>
      {label && <Label>{label}</Label>}
      <InputBox
        isBig={isBig}
        type={TYPES[type]}
        placeholder={placeholder}
        autoComplete="off"
      />
    </FieldContainer>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(TYPES)),
  placeholder: PropTypes.string,
  isBig: PropTypes.bool
}
