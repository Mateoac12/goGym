import PropTypes from 'prop-types'
import { Image } from './styles'

const SIZES = {
  sm: 'sm',
  md: 'ml',
  xl: 'xl',
}

const RADIUS = {
  full: 'full',
  primary: 'primary',
}

export const Avatar = ({
  src,
  alt,
  size = SIZES.sm,
  radius = RADIUS.primary,
}) => {
  return (
    <>
      <Image src={src} alt={alt} size={size} radius={radius} />
    </>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  radius: PropTypes.oneOf(Object.keys(RADIUS)),
}
