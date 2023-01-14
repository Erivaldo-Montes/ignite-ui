import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  getCssText,
  globalCss,
  theme,
  createTheme,
  keyframes,
  config,
} = createStitches({
  themeMap: {
    // copia as propriedades css já existentes
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    space,
    radii,
  },
})
