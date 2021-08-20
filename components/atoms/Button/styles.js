import styled from '@emotion/styled'
import { SIZES } from './Button'

const STYLES_OF_TYPE = {
  primary: `
    background-color: var(--colors-brand-primary);
    color: var(--colors-brand-white);
    border: 1px solid var(--colors-brand-white);
  `,
  'primary-white': `
    background-color:var(--colors-brand-white);
    color: var(--colors-brand-primary);
    border: 1px solid var(--colors-brand-primary);
  `,
  secondary: `
    background-color: var(--colors-brand-primary);
    color: var(--colors-brand-white);
    border: 1px dashed var(--colors-brand-white);
  `,
  tertiary: `
    color: var(--colors-brand-primary);
    background-color: var(--colors-transparent);
    border: none;
    text-decoration: underline;
    font-size: var(--fontSize-sm);
  `,
}

const setType = (type) => {
  return STYLES_OF_TYPE[`${type}`] || STYLES_OF_TYPE.primary
}

const setSize = (size) => {
  return Object.values(SIZES).includes(size)
    ? `font-size: var(--fontSize-${size});`
    : `font-size: var(--fontSize-${SIZES.lg});`
}

const setInline = (isInline) => {
  return isInline ? 'width: max-content;' : 'width: 100%;'
}

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;

  padding: var(--spacing-2) var(--spacing-4);
  max-width: 320px;
  border-radius: 15px;
  cursor: pointer;

  filter: brightness(1);
  transition: filter 0.1s ease-in-out;

  ${({ type }) => setType(type)}
  ${({ size }) => setSize(size)}
  ${({ isInline }) => setInline(isInline)}

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    filter: brightness(0.9);
  }
`
