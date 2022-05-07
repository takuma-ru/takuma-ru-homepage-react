/**
  _variables.scssで定義した変数を取得
**/
import _variables from '../styles/scss/_variables.module.scss'

export default function scssVariable (variables: string) {
  const color: string = _variables[variables] ? _variables[variables] : variables
  return color
}
