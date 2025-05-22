import * as mars3d from "mars3d"

let map: mars3d.Map // 地图对象
let labelEntity: mars3d.graphic.LabelEntity // 标签对象

// 初始化当前业务
export function onMounted(mapInstance: mars3d.Map): void {
  map = mapInstance
  console.log("文本标签")
  
//   // 绑定鼠标点击事件
//   map.on(mars3d.EventType.click, (event: any) => {
//     console.log("点击事件", event)
//     const position = new mars3d.LngLatPoint(event.point.lng, event.point.lat)
    
//     if (labelEntity) {
//       // 如果已经存在标签，则更新位置
//       labelEntity.position = position
//     } else {
//       // 创建新的标签
//       labelEntity = new mars3d.graphic.LabelEntity({
//         position,
//         style: {
//           text: "示例标注",
//           font_size: 20,
//           color: "#ffffff",
//           outline: true,
//           outlineColor: "#000000",
//           outlineWidth: 2,
//           horizontalOrigin: 1, // CENTER
//           verticalOrigin: 2, // BOTTOM
//           pixelOffsetY: -10,
//           distanceDisplayCondition: {
//             near: 0.0,
//             far: 200000
//           },
//           clampToGround: true, // 贴地
//           visibleDepth: false // 是否被遮挡
//         }
//       })
//       map.graphicLayer.addGraphic(labelEntity)
//     }
//   })
}

// 销毁当前业务
export function onUnmounted(): void {
  if (labelEntity) {
    map.graphicLayer.removeGraphic(labelEntity)
    labelEntity = null
    console.log("销毁文本")
  }
} 
