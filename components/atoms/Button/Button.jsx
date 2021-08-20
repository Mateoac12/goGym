import PropTypes from 'prop-types'
import { ButtonStyled } from './styles'

export const TYPES = {
  primary: 'primary',
  primaryWhite: 'primary-white',
  secondary: 'secondary',
  tertiary: 'tertiary'
}

export const SIZES = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg'
}

export const Button = ({ children, label, type = TYPES.primary, size = SIZES.lg, isInline = false }) => {
  return (
    <ButtonStyled
      type={type}
      size={size}
      isInline={isInline}
    >
      {label}
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(TYPES)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  isInline: PropTypes.bool,
  children: PropTypes.node
}
