import PropTypes from 'prop-types'
import { ICON_LIST, getIcon } from './iconList'

export const Icon = ({ size, type }) => {
  return (
    <>
      <img src={getIcon(type)} />
    </>
  )
}

Icon.propTypes = {
  size: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(ICON_LIST)),
}
