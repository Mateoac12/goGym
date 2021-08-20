import PropTypes from 'prop-types'
import { Title } from './styles'

const COLOR = {
  primary: 'primary',
  white: 'white',
}

const SIZE = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
}

export const Heading = ({
  children,
  color = COLOR.primary,
  size = SIZE.md,
}) => {
  return (
    <>
      <Title color={color} size={size}>
        {children}
      </Title>
    </>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.values(COLOR)),
  size: PropTypes.oneOf(Object.values(SIZE)),
}
