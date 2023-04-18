export * from './Avatar'
export * from './Button'

export type Size = keyof SizeClass

export type SizeClass = {
  sm: string
  md: string
  lg: string
}

export type Color = keyof ColorClass

export type ColorClass = {
  primary: string
  secondary: string
}
