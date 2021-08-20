import styled from '@emotion/styled'

const setBigInput = (isBig) => {
  return isBig && `
    padding: 12px 45px;
    font-size: var(--fontSize-md);
    text-align: center;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    -moz-appearance: textfield;
  `
}

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: var(--fontSize-sm);
  margin: 10px 0;
  `

export const InputBox = styled.input`
  padding: 8px 10px;
  font-size: var(--fontSize-sm);
  border-radius: 5px;
  box-shadow: 0px 0px 4px var(--colors-brand-gray);
  border: 1px solid var(--colors-transparent);
  outline: none;
  ${({ isBig }) => setBigInput(isBig)}

  &:focus {
    border: 1px solid var(--colors-brand-primary)
  }
`
