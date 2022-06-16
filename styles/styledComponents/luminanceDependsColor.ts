/**
  背景色から輝度を求め、テキストのカラーを返す関数
  参考: https://zenn.dev/mryhryki/articles/2020-11-12-hatena-background-color
*/

import colors from "./colors"

export default function dependsLuminanceColor (backgroundColor: string /*white*/) {
  const backgroundColorCode = colors(backgroundColor)
  const red = backgroundColorCode.substring(1, 3)
  const green = backgroundColorCode.substring(3, 5)
  const blue = backgroundColorCode.substring(5, 7)

  let luminance = Math.floor((parseInt(red, 16) * 0.299) + (parseInt(green, 16) * 0.587) + (parseInt(blue, 16) * 0.114))
  luminance = luminance / 255

  const isWhite = luminance < 0.4

  return isWhite ? colors('white') : colors('black')
}
