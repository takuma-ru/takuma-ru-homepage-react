/*
  画面サイズからタイプを返す
*/

export default function returnDisplayType () {
  if (typeof window !== "undefined") {
    const displaySize = window.innerWidth
    const displayType = displaySize >= 768 ? 'lg' : 'sm'
    console.log(displayType)
    return displayType
  }
}