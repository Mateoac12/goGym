const { choices } = require('../utils/designTokens')
const fs = require('fs')

const buildStyledStr = (object, parentCurr = []) => {
  const objectKeys = Object.keys(object)

  const stylesStr = objectKeys.reduce((prev, currObj) => {
    const valueCurr = object[currObj]
    if (typeof valueCurr === 'object') {
      return `${prev}
      ${buildStyledStr(valueCurr, parentCurr.concat(currObj))}`
    }

    return (
    `${prev}
  --${parentCurr.join('-')}-${currObj}: ${valueCurr};`
    )
  }, '')

  return stylesStr
}

const buildCustomProperties = () => {
  const choicesStr = buildStyledStr(choices)

  const STYLE_STRUCTURE = (
    `:root {${choicesStr}
}`
  )

  fs.writeFile('tokens.css', STYLE_STRUCTURE, 'utf8', (err) => {
    console.log(err)
  })
}

buildCustomProperties()
