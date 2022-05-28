const screenSm = () => {
  return `@media screen and ( min-width: 480px ) and ( max-width: 1024px )`
}

const screenLap = () => {
  return `@media screen and ( min-width: 1024px )`
}

export const mixins = {
  screenSm,
  screenLap,
}