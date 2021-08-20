import styled from '@emotion/styled'

const typeRadius = {
  full: `var(--borderRadius-full)`,
  primary: `15px`,
  default: `0px`,
}

const typeSize = {
  sm: `37px`,
  md: `49px`,
  xl: `168px`,
}

const setRadius = (type) => {
  return typeRadius[`${type}`] || typeRadius.default
}

const setSize = (type) => {
  return typeSize[`${type}`]
}

export const Image = styled.img`
  ${({ radius }) => `border-radius: ${setRadius(radius)};`}
  ${({ size }) => `width: ${setSize(size)};`};
`
