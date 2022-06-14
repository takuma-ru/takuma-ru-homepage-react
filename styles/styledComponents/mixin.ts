/**
 * mixin
 */

const screenSm = () => {
  return `@media screen and ( min-width: 240px ) and ( max-width: 1024px )`
}
// ${mixins.screenSm} {}

const screenLap = () => {
  return `@media screen and ( min-width: 1024px )`
}
// ${mixins.screenLap} {}

export const mixins = {
  screenSm,
  screenLap,
}