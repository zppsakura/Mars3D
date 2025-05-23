import * as mars3d from "mars3d"
import styles from './index.module.less'

let map: mars3d.Map // 地图对象
let mixingPlant: mars3d.graphic.ModelEntity
import { activate } from "@mars/common/store/widget"
let animation: any
let tiles3dLayer;


// 初始化当前业务
export function onMounted(mapInstance: mars3d.Map): void {
  map = mapInstance
  // initMixingPlant()
  showMaxShihuaDemo()
  initCard()
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
function removeLayer() {
  if (tiles3dLayer) {
    map.basemap = 2021 // 切换到默认影像底图

    map.removeLayer(tiles3dLayer, true)
    tiles3dLayer = null
  }
}
export function showMaxShihuaDemo() {
  removeLayer()
  // 116.388396, 39.921385
  tiles3dLayer = new mars3d.layer.TilesetLayer({
    name: "石化工厂",
    url: "https://data.mars3d.cn/3dtiles/max-shihua/tileset.json",
    position: { lng: 118.799080, lat: 31.967057, alt: 0 },
    maximumScreenSpaceError: 1,
    scale:0.8,
    rotation:{
      x:0,
      y:0,
      z:-165,
    },
    // shadows: Cesium.ShadowMode.DISABLED,
    // 以下参数可以参考用于3dtiles总数据大，清晰度过高情况下进行性能优化。这不是一个通用的解决方案，但可以以此为参考。
    skipLevelOfDetail: true,
    loadSiblings: true,
    cullRequestsWhileMoving: true,
    cullRequestsWhileMovingMultiplier: 10,
    preferLeaves: true,
    preloadWhenHidden: true,
    enableDebugWireframe: true, // 是否可以进行三角网的切换显示
    // 以上为优化的参数

    // popup: "all",
    // highlight: {
    //   type: mars3d.EventType.click, // 默认为鼠标移入高亮，也可以指定click单击高亮
    //   outlineEffect: true, // 采用OutlineEffect方式来高亮
    //   color: "#00FF00",
    //   width: 6
    // },
    center: { lat: 31.967057, lng: 118.799080, alt: 354, heading: 319, pitch: -23 },
    flyTo: true
  })
  map.addLayer(tiles3dLayer)

  // 可以绑定Popup弹窗，回调方法中任意处理
  // tiles3dLayer.bindPopup(function (event) {
  //   const attr = event.graphic.attr
  //   // attr["视频"] = `<video src='http://data.mars3d.cn/file/video/lukou.mp4' controls autoplay style="width: 300px;" ></video>`;
  //   return mars3d.Util.getTemplateHtml({ title: "石化工厂", template: "all", attr })
  // })
}

function initCard() {
  try {

 
  const customCard = new mars3d.graphic.DivGraphic({
      position:new mars3d.LngLatPoint(118.793217, 31.967381),
  
      style:{
        html:()=>{
        return `<div>
          <div>今日出料</div>
          <div>xxx吨</div>
          </div>`
      },
      offsetX:-100,
      offsetY:-100,
      className:styles.circleTag
}
})
const customCard2 = new mars3d.graphic.DivGraphic({
  position:new mars3d.LngLatPoint(118.793217, 31.967381),

  style:{
    html:()=>{
    return `<div>
      <div>今日运趟</div>
      <div>xxx趟</div>
      </div>`
  },
  offsetY:-100,
  className:styles.circleTag
}
})
const customCard3 = new mars3d.graphic.DivGraphic({
  position:new mars3d.LngLatPoint(118.793217, 31.967381),

  style:{
    html:()=>{
    return `<div>
      <div>今日燃料消耗</div>
      <div>xxxNm³</div>
      </div>`
  },
  offsetX:100,
  offsetY:-100,
  className:styles.circleTag
}
})
    // 将模型添加到地图
   
    map.graphicLayer.addGraphic(customCard)
    map.graphicLayer.addGraphic(customCard2)
    map.graphicLayer.addGraphic(customCard3)
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


