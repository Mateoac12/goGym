import styled from '@emotion/styled'

const COLOR_STYLE = {
  primary: 'var(--colors-brand-primary)',
  white: 'var(--colors-brand-white)'
}

const SIZE_STYLE = {
  lg: 'var(--fontSize-3xl)',
  md: 'var(--fontSize-md)',
  sm: 'var(--fontSize-sm)'
}

const setColor = (color) => {
  return COLOR_STYLE[`${color}`] || COLOR_STYLE.primary
}

const setFontSize = (size) => {
  return SIZE_STYLE[`${size}`]
}

export const Title = styled.h1`
  color: ${({ color }) => setColor(color)};
  font-size: ${({ size }) => setFontSize(size)}
`
