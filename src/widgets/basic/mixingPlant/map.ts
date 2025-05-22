import * as mars3d from "mars3d"
import styles from './index.module.less'

let map: mars3d.Map // 地图对象
let mixingPlant: mars3d.graphic.ModelEntity
import { activate } from "@mars/common/store/widget"
let animation: any
let isForward = true // 控制移动方向


// 初始化当前业务
export function onMounted(mapInstance: mars3d.Map): void {
  map = mapInstance
  initMixingPlant()
}

// 销毁当前业务
export function onUnmounted(): void {
  if (mixingPlant) {
    map.graphicLayer.removeGraphic(mixingPlant)
    mixingPlant = null
  }
  if (animation) {
    animation = null
  }
}

// 初始化压路机
function initMixingPlant() {
  try {
    console.log("开始创建搅拌站模型")
    
    // 设置压路机位置（在道路上）
    const startPoint = new mars3d.LngLatPoint(116.388396, 39.921385)
    const endPoint = new mars3d.LngLatPoint(116.394292, 39.921385) 
    // 进一步增加移动距离
    
    // 创建压路机模型
    mixingPlant = new mars3d.graphic.ModelEntity({
      name: "压路机",
      position: startPoint,
      style: {
        url: "/models/roller/Road_Roller_SF.gltf",
        scale: 20.0,
        minimumPixelSize: 200,
        maximumScale: 20000,
        clampToGround: true,
        heading: 0,
        pitch: 0,
        roll: 0,
        debugShowBoundingVolume: true,
        debugShowModelMatrix: true
      }
    })
const test='12'
const customCard = new mars3d.graphic.DivGraphic({
  position:new mars3d.LngLatPoint(116.388386, 39.921385),
  
  style:{
    html:()=>{
    return `<div>
    <div>今日出料</div>
    <div>xxx吨</div>
    </div>`
  },
  offsetY:-100,
  className:styles.circleTag
}
})
    console.log("压路机模型创建完成，准备添加到地图")
    // 将模型添加到地图
    map.graphicLayer.addGraphic(mixingPlant)
    map.graphicLayer.addGraphic(customCard)
    console.log("压路机模型已添加到地图")
    customCard.on('click',()=>{
      console.log('点击')
      activate('discharge-details')
    })

    

  } catch (error) {
    console.error("初始化失败:", error)
  }
}

// 设置压路机位置
function setPosition(position: mars3d.LngLatPoint) {
  if (mixingPlant) {
    mixingPlant.position = position
  }
}


