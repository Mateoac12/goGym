import '../tokens.css'
import '../main.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'primary',
    values: [
      {
        name: 'primary',
        value: '#68d391',
      },
      {
        name: 'secondary',
        value: '#ffffff',
      },
    ]
  }
}