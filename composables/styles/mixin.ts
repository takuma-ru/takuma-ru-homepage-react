const screenSm = () => {
  return `@media screen and ( min-width: 240px ) and ( max-width: 768px )`
}
// ${mixins.screenSm} {}

const screenLap = () => {
  return `@media screen and ( min-width: 768px )`
}
// ${mixins.screenLap} {}

export const mixins = {
  screenSm,
  screenLap,
}