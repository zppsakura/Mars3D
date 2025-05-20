import * as mars3d from "mars3d"

let map: mars3d.Map // 地图对象
let roller: mars3d.graphic.ModelEntity
let animation: any
let isForward = true // 控制移动方向

// 初始化当前业务
export function onMounted(mapInstance: mars3d.Map): void {
  map = mapInstance
  console.log("压路机组件初始化")
  initRoller()
}

// 销毁当前业务
export function onUnmounted(): void {
  if (roller) {
    map.graphicLayer.removeGraphic(roller)
    roller = null
  }
  if (animation) {
    animation = null
  }
}

// 初始化压路机
function initRoller() {
  try {
    console.log("开始创建压路机模型")
    
    // 设置压路机位置（在道路上）
    const startPoint = new mars3d.LngLatPoint(116.388386, 39.921385)
    const endPoint = new mars3d.LngLatPoint(116.394292, 39.921385) 
    // 进一步增加移动距离
    
    // 创建压路机模型
    roller = new mars3d.graphic.ModelEntity({
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

    console.log("压路机模型创建完成，准备添加到地图")
    // 将模型添加到地图
    map.graphicLayer.addGraphic(roller)
    console.log("压路机模型已添加到地图")

    // 创建路径线
    const path = new mars3d.graphic.PolylineEntity({
      positions: [startPoint, endPoint],
      style: {
        width: 30,
        color: "#ff0000",
        clampToGround: true,
        dashLength: 16.0,
        dashPattern: 0xffff
      }
    })
    map.graphicLayer.addGraphic(path)
    console.log("路径已添加到地图")

    // 使用 flyTo 实现动画效果
    let currentPosition = startPoint
    const step = 0.0001 // 每次移动的步长

    const moveRoller = () => {
      if (!roller) { return }

      if (isForward) {
        // 向前移动
        currentPosition = new mars3d.LngLatPoint(
          currentPosition.lng + step,
          currentPosition.lat
        )
        
        // 到达终点时改变方向
        if (currentPosition.lng >= endPoint.lng) {
          isForward = false
          roller.style.heading = 180 // 改变朝向
        }
      } else {
        // 向后移动
        currentPosition = new mars3d.LngLatPoint(
          currentPosition.lng - step,
          currentPosition.lat
        )
        
        // 到达起点时改变方向
        if (currentPosition.lng <= startPoint.lng) {
          isForward = true
          roller.style.heading = 0 // 改变朝向
        }
      }

      // 更新位置
      roller.position = currentPosition
    }

    // 每100毫秒移动一次
    setInterval(moveRoller, 100)
    console.log("压路机动画已启动")

    // 自动定位到压路机位置
    map.flyToPoint(startPoint, {
      radius: 2000, // 增加观察距离以适应更长的路径
      duration: 2,
      heading: 180,
      pitch: -30,
      complete: () => {
        console.log("相机已定位到压路机位置")
      }
    })

  } catch (error) {
    console.error("压路机初始化失败:", error)
  }
}

// 设置压路机位置
function setPosition(position: mars3d.LngLatPoint) {
  if (roller) {
    roller.position = position
  }
}

// 设置压路机朝向
function setHeading(heading: number) {
  if (roller) {
    roller.style.heading = heading
  }
}

// 设置压路机动画路径
function setAnimationPath(positions: mars3d.LngLatPoint[]) {
  if (roller) {
    roller.position = positions[0]
  }
}

// 设置动画速度
function setAnimationSpeed(duration: number) {
  // 动画速度由 setInterval 控制，这里可以添加相关逻辑
} 
