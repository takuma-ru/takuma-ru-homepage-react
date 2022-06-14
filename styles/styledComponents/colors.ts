/*
  _variables.scssで定義した変数の値を返す関数
*/

import { colorTheme } from '../styledComponents/colorTheme'

export default function colors (variables: string) {
  const color: string = colorTheme[variables] ? colorTheme[variables] : variables
  return color
}
