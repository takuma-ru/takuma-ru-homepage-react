/*
  _variables.scssで定義した変数の値を返す関数
*/

import _variables from '../../styles/scss/_variables.module.scss'

export default function colors (variables: string) {
  const color: string = _variables[variables] ? _variables[variables] : variables
  return color
}
