import * as mars3d from "mars3d"

let map: mars3d.Map 
export function onMounted(mapInstance: mars3d.Map): void {
  map = mapInstance // 记录map
  console.log("展示弹窗")
}

export function onUnmounted(): void {
    map = null
    console.log("地图销毁")
}
